// Defines the structure for a GitHub user profile used throughout the app
export interface ProfileData {
    id: number | null;               // GitHub user ID
    login: string | null;            // Username
    email: string | null;            // Public email address
    html_url: string | null;         // Profile link
    name: string | null;             // Full name
    avatar_url: string | null;       // Avatar image URL
    bio: string | null;              // Short bio text
    company: string | null;          // Listed company
    location: string | null;         // User location
  }
  