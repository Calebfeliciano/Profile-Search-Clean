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
    if (!username) {
      console.warn('⚠️ No username provided to loadProfile');
      return;
    }

    const result = await fetchUserProfile(username);
    console.log('👤 Profile Loaded:', result);
    setCurrentProfile(result);
  };

  const loadBatch = useCallback(async () => {
    console.log('🚀 Fetching GitHub user list...');
    const data = await fetchGithubList();

    console.log('✅ Is array:', Array.isArray(data));
    console.log('✅ Length:', data.length);
    console.log('✅ First login:', data[0]?.login);

    if (Array.isArray(data) && data.length > 0 && data[0].login) {
      setProfiles(data);
      await loadProfile(data[0].login || 'octocat');
    } else {
      console.warn('⚠️ No valid profiles returned from GitHub. Falling back...');
      setProfiles([]);
      setCurrentProfile({
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
    if (newIndex < profiles.length && profiles[newIndex]?.login) {
      await loadProfile(profiles[newIndex].login || '');
      setIndex(newIndex);
    } else {
      await loadBatch();
      setIndex(0);
    }
  };

  useEffect(() => {
    console.log('🔐 Loaded token:', import.meta.env.VITE_GITHUB_TOKEN); // ✅ Token check
    loadBatch();
  }, [loadBatch]);

  console.log('🧪 Rendering with currentProfile:', currentProfile);

  return (
    <>
      <h1>Profile Search</h1>
      <ProfileCard profile={currentProfile} onSelect={handleDecision} />
    </>
  );
};

export default ProfileSearch;
