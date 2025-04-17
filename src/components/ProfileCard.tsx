import type { ProfileData } from '../interfaces/Profile.interface';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

type ProfileCardProps = {
  profile: ProfileData;
  onSelect: (accepted: boolean) => void;
};

const ProfileCard = ({ profile, onSelect }: ProfileCardProps) => {
  if (!profile?.login) {
    return <h2>No profiles available right now</h2>;
  }

  return (
    <section>
      <img
        src={profile.avatar_url || 'https://placehold.co/600x400'}
        alt={`Profile of ${profile.login}`}
        style={{ width: '300px', borderRadius: '30px 30px 0 0' }}
      />

      <section
        style={{
          backgroundColor: '#000',
          width: '280px',
          borderRadius: '0 0 30px 30px',
          padding: '0 10px 10px',
        }}
      >
        {profile.html_url && (
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            <h2 style={{ padding: 0, margin: '-7px 0 0 0', color: 'white' }}>
              {profile.name}
              <em> ({profile.login})</em>
            </h2>
          </a>
        )}

        {profile.location && <p>Location: {profile.location}</p>}
        {profile.email && (
          <p>
            Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        )}
        {profile.company && <p>Company: {profile.company}</p>}
        {profile.bio && <p>Bio: {profile.bio}</p>}
      </section>

      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <IoRemoveCircle
          onClick={() => onSelect(false)}
          style={{
            color: 'red',
            fontSize: '80px',
            cursor: 'pointer',
          }}
        />
        <IoAddCircle
          onClick={() => onSelect(true)}
          style={{
            fontSize: '80px',
            color: 'green',
            cursor: 'pointer',
          }}
        />
      </section>
    </section>
  );
};

export default ProfileCard;
