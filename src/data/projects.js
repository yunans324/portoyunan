// Centralized project data
import uiux from '../assets/uiux.png';

export const projects = [
  {
    id: 1,
    slug: 'uiux-design',
    title: 'UI/UX Design',
    image: uiux,
    description: 'Ini adalah detail lengkap tentang desain UI/UX yang modern.',
    stack: ['Figma','Prototype','User Flow'],
    year: 2025,
  },
  {
    id: 2,
    slug: 'web-app',
    title: 'Web App',
    image: null,
    description: 'Ini adalah detail lengkap tentang aplikasi web fullstack (placeholder).',
    stack: ['React','API','Routing'],
    year: 2025,
  },
  {
    id: 3,
    slug: 'next-feature',
    title: 'Next Feature Idea',
    image: null,
    description: 'Project konsep berikutnya akan ditambahkan segera.',
    stack: ['Idea'],
    year: 2025,
  }
];

export function getProjectById(id) {
  return projects.find(p => String(p.id) === String(id));
}
