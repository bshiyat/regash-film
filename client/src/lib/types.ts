export interface Project {
  id: string;
  title: string;
  year: number;
  client: string;
  role: string[];
  category: 'documentary' | 'narrative' | 'dance' | 'circus' | 'commercial' | 'photography';
  location: string[];
  description: string;
  fullDescription?: string;
  videoUrl?: string;
  thumbnail: string;
  tags: string[];
  featured?: boolean;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  year: number;
  projects: {
    title: string;
    description: string;
  }[];
  description: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  projectType: string;
  message: string;
}
