
import { MOCK_PHOTOS, MOCK_EXPERIENCE, MOCK_PROJECTS, MOCK_EDUCATION } from './mockData';
import { Photo, Project, Experience, Education } from '../types';

// NOTE: In a real app, initialize Supabase client here.
// import { createClient } from '@supabase/supabase-js';
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Simulating API calls
export const api = {
  career: {
    getExperience: async (): Promise<Experience[]> => {
      // await new Promise(resolve => setTimeout(resolve, 500)); // Simulate latency
      return MOCK_EXPERIENCE;
    },
    getProjects: async (): Promise<Project[]> => {
      return MOCK_PROJECTS;
    },
    getEducation: async (): Promise<Education[]> => {
      return MOCK_EDUCATION;
    }
  },
  
  photography: {
    getAllPhotos: async (): Promise<Photo[]> => {
      // In real app: const { data } = await supabase.from('photos').select('*');
      return MOCK_PHOTOS;
    },
    uploadPhoto: async (file: File, title: string): Promise<Photo> => {
        // This is where Supabase Storage logic would go
        console.log("Uploading file to Supabase Bucket:", file.name);
        
        return {
            id: Math.random().toString(36).substr(2, 9),
            url: URL.createObjectURL(file), // Temporary local URL for demo
            title,
            source: 'upload',
            date: new Date().toISOString()
        };
    }
  },

  gaming: {
    checkLiveStatus: async () => {
        // Fetch from Twitch API / YouTube API
        // For now, return mock
        const isLive = Math.random() > 0.7; // Lower chance to be live
        if (isLive) {
            return {
                isLive: true,
                platform: 'twitch' as const,
                viewers: Math.floor(Math.random() * 500) + 50,
                streamTitle: 'onmonix plays: Ranked Grind 🎮'
            };
        }
        return { isLive: false };
    }
  }
};
