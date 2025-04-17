import { useEffect, useState, useCallback } from 'react';
import { fetchGithubList, fetchUserProfile } from '../api/API';
import ProfileCard from '../components/ProfileCard';
import type { ProfileData } from '../interfaces/Profile.interface';

const ProfileSearch = () => {
  const [profiles, setProfiles] = useState<ProfileData[]>([]);
  const [currentProfile, setCurrentProfile] = useState<ProfileData>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });
  const [index, setIndex] = useState<number>(0);

  const loadProfile = async (username: string) => {
    const result = await fetchUserProfile(username);
    console.log('👤 Profile Loaded:', result); // DEBUG LOG
    setCurrentProfile(result);
  };

  const loadBatch = useCallback(async () => {
    const data = await fetchGithubList();
    console.log('✅ Batch Fetched:', data); // DEBUG LOG
    setProfiles(data);
    if (data.length > 0) {
      await loadProfile(data[0].login || '');
    }
  }, []);

  const handleDecision = async (accept: boolean) => {
    if (accept) {
      const stored = localStorage.getItem('savedCandidates');
      const shortlist: ProfileData[] = stored ? JSON.parse(stored) : [];
      shortlist.push(currentProfile);
      localStorage.setItem('savedCandidates', JSON.stringify(shortlist));
    }

    const newIndex = index + 1;
    if (newIndex < profiles.length) {
      await loadProfile(profiles[newIndex].login || '');
      setIndex(newIndex);
    } else {
      await loadBatch();
      setIndex(0);
    }
  };

  useEffect(() => {
    loadBatch();
  }, [loadBatch]);

  return (
    <>
      <h1>Profile Search</h1>
      <ProfileCard profile={currentProfile} onSelect={handleDecision} />
    </>
  );
};

export default ProfileSearch;
