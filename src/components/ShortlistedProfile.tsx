import type { ProfileData } from '../interfaces/Profile.interface';
import { IoRemoveCircle } from 'react-icons/io5';

type ShortlistedProfileProps = {
  profile: ProfileData;
  handleRemove: (id: number) => void;
};

const ShortlistedProfile = ({ profile, handleRemove }: ShortlistedProfileProps) => {
  if (!profile) {
    return (
      <tr>
        <td colSpan={7}>
          <h3>No profiles available.</h3>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        <img
          src={profile.avatar_url ?? ''}
          alt={`Profile of ${profile.login}`}
          style={{
            width: '70px',
            borderRadius: '10px',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </td>
      <td>
        <a href={profile.html_url ?? ''} target="_blank" rel="noreferrer">
          <h3 style={{ color: 'white' }}>
            {profile.name}
            <br />
            <em>({profile.login})</em>
          </h3>
        </a>
      </td>
      <td>{profile.location || '—'}</td>
      <td>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </td>
      <td>{profile.company || '—'}</td>
      <td>
        <div style={{ maxHeight: '100px', overflowY: 'auto' }}>
          {profile.bio}
        </div>
      </td>
      <td>
        <IoRemoveCircle
          onClick={() => handleRemove(profile.id ?? 0)}
          style={{
            color: 'red',
            margin: '0 auto',
            display: 'block',
            cursor: 'pointer',
            fontSize: '50px',
          }}
        />
      </td>
    </tr>
  );
};

export default ShortlistedProfile;
