import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Balad - Palestine Comedy Club Documentary',
    year: 2025,
    client: 'Palestine Comedy Club',
    role: ['Director', 'Cinematographer'],
    category: 'documentary',
    location: ['Palestine', 'UK'],
    description: 'Intimately documented the groundbreaking 2022 stand-up tour.',
    fullDescription: 'Documented the groundbreaking 2022 stand-up tour Balad, filming all performances, interviews, and behind-the-scenes moments.',
    videoUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?w=800&h=600&fit=crop',
    tags: ['Documentary', 'Comedy', 'Social Commentary'],
    featured: true,
  },
  {
    id: '2',
    title: 'False Awakening',
    year: 2024,
    client: 'Stereo48 Dance Company',
    role: ['Director', 'Filmmaker', 'Editor'],
    category: 'dance',
    location: ['Palestine'],
    description: 'A 3-episode dance series about a Palestinian girl trapped in a living dream.',
    videoUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&h=600&fit=crop',
    tags: ['Dance', 'Series', 'Contemporary'],
    featured: true,
  },
];