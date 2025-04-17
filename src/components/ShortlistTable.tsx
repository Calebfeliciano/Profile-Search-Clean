import { useEffect, useState } from 'react';
import ShortlistedProfile from './ShortlistedProfile';
import type { ProfileData } from '../interfaces/Profile.interface';

const ShortlistTable = () => {
  const [shortlistedProfiles, setShortlistedProfiles] = useState<ProfileData[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedCandidates');
    if (typeof stored === 'string') {
      const parsed: ProfileData[] = JSON.parse(stored);
      setShortlistedProfiles(parsed);
    }
  }, []);

  const handleRemove = (id: number) => {
    const stored = localStorage.getItem('savedCandidates');
    let updatedList: ProfileData[] = [];
    if (typeof stored === 'string') {
      updatedList = JSON.parse(stored).filter((profile: ProfileData) => profile.id !== id);
    }
    localStorage.setItem('savedCandidates', JSON.stringify(updatedList));
    setShortlistedProfiles(updatedList);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Reject</th>
        </tr>
      </thead>
      <tbody>
        {shortlistedProfiles.map((profile) => (
          <ShortlistedProfile
            key={profile.id}
            profile={profile}
            handleRemove={handleRemove}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ShortlistTable;
