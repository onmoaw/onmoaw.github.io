
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
}

export interface Photo {
  id: string;
  url: string;
  title: string;
  source: 'instagram' | 'flickr' | 'upload';
  date: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  platform: 'youtube' | 'facebook';
  link: string;
}

export interface LiveStatus {
  isLive: boolean;
  platform?: 'twitch' | 'youtube';
  viewers?: number;
  streamTitle?: string;
}

export enum Tab {
  CAREER = 'CAREER',
  PHOTOGRAPHY = 'PHOTOGRAPHY',
  GAMING = 'GAMING',
  ADMIN = 'ADMIN'
}
