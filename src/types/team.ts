export interface TeamMemberSocials {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface TeamMember {
  img: string;
  name: string;
  position: string;
  isVerified: boolean;
  socials: React.ReactNode;
}
