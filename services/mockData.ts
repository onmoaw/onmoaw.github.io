
import { Experience, Project, Photo, Video, LiveStatus, Education } from '../types';

export const MOCK_EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Junior Software Engineer',
    company: 'Pirthe Limited',
    period: 'May 2025 - Present',
    description: 'Working on two Flutter-based projects, contributing to UI updates and ensuring an intuitive user experience. Designing and implementing database solutions to enhance data handling and storage.'
  },
  {
    id: '2',
    role: 'Intern',
    company: 'Pirthe Limited',
    period: 'Feb 2025 - Apr 2025',
    description: 'Managed project operations, ensuring timely delivery and addressing key challenges while assisting with mobile application development.'
  },
  {
    id: '3',
    role: 'QA Tester (Game Domain)',
    company: 'Crusherslab QA',
    period: 'Nov 2024 - Jan 2025',
    description: 'Tested the third-person battle royale game "Off the Grid", identifying bugs and performance issues. Provided constructive feedback on mechanics, UI/UX, and player experience.'
  },
  {
    id: '4',
    role: 'Secretary General',
    company: 'Intigra Science Org',
    period: 'May 2020 - Feb 2022',
    description: 'Led organizational activities and managed administrative duties for the science organization.'
  }
];

export const MOCK_EDUCATION: Education[] = [
  {
    id: '1',
    school: 'Daffodil International University',
    degree: 'B.Sc. in Computer Science and Engineering',
    period: '2019 - 2024'
  },
  {
    id: '2',
    school: 'Government Science College',
    degree: 'Higher Secondary (Science)',
    period: '2015 - 2017'
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Flutter Mobile App Ecosystem',
    description: 'Developed intuitive UI/UX for cross-platform mobile applications using Flutter, focusing on performance and responsive design.',
    tech: ['Flutter', 'Dart', 'Mobile Dev'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Game QA Analysis Dashboard',
    description: 'Comprehensive testing and reporting framework for "Off the Grid" Battle Royale, focusing on gameplay mechanics and bug tracking.',
    tech: ['QA Testing', 'Jira', 'Game Design'],
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop'
  },
];

export const MOCK_PHOTOS: Photo[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop', title: 'Dhaka Streets', source: 'instagram', date: '2023-10-01' },
  { id: '2', url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop', title: 'Mountain Trek', source: 'flickr', date: '2023-09-15' },
  { id: '3', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', title: 'Golden Hour', source: 'upload', date: '2023-11-20' },
  { id: '4', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop', title: 'Dev Setup', source: 'instagram', date: '2023-12-01' },
  { id: '5', url: 'https://images.unsplash.com/photo-1624138784181-6c3405ba7a9d?q=80&w=800&auto=format&fit=crop', title: 'Code & Coffee', source: 'upload', date: '2023-12-10' },
  { id: '6', url: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=800&auto=format&fit=crop', title: 'Perspective', source: 'flickr', date: '2024-01-05' },
];

export const MOCK_VIDEOS: Video[] = [
  { id: 'v1', title: 'Off The Grid - Gameplay Analysis', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop', views: '12K', platform: 'youtube', link: '#' },
  { id: 'v2', title: 'Flutter Speedrun Coding', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop', views: '45K', platform: 'facebook', link: '#' },
  { id: 'v3', title: 'Best FPS Moments 2024', thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop', views: '2K', platform: 'youtube', link: '#' },
];

export const MOCK_LIVE_STATUS: LiveStatus = {
  isLive: false,
  platform: 'twitch',
  viewers: 0,
  streamTitle: 'OFFLINE'
};
