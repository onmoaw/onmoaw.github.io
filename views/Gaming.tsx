
import React, { useEffect, useState } from 'react';
import { api } from '../services/supabaseService';
import { LiveStatus, Video } from '../types';
import { MOCK_VIDEOS } from '../services/mockData';
import { Twitch, Youtube, Facebook, Gamepad, PlayCircle } from 'lucide-react';

export const Gaming: React.FC = () => {
  const [liveStatus, setLiveStatus] = useState<LiveStatus>({ isLive: false });
  const [videos, setVideos] = useState<Video[]>(MOCK_VIDEOS);

  useEffect(() => {
    // Check live status immediately and then every minute
    const check = () => api.gaming.checkLiveStatus().then(setLiveStatus);
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12">
      {/* Live Status Header */}
      <div className={`
        relative rounded-3xl p-8 border-4 overflow-hidden transition-all duration-500
        ${liveStatus.isLive 
          ? 'bg-navy border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]' 
          : 'bg-navy border-navy shadow-lg'
        }
      `}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F5A623 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 border-white ${liveStatus.isLive ? 'animate-pulse' : 'bg-navy-800'}`}>
              <Gamepad size={48} className="text-white" />
            </div>
            {liveStatus.isLive && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                LIVE
              </span>
            )}
          </div>

          <div className="text-center md:text-left flex-grow">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">
              {liveStatus.isLive ? liveStatus.streamTitle : 'ONMONIX OFFLINE'}
            </h2>
            <p className="text-sand/60 font-mono">
              {liveStatus.isLive 
                ? `Currently streaming on ${liveStatus.platform?.toUpperCase()} to ${liveStatus.viewers} viewers`
                : 'Not currently streaming. Check out the latest highlights from onmonix!'}
            </p>
          </div>

          <div className="flex gap-4">
             <button className="bg-[#6441a5] p-3 rounded-xl text-white hover:scale-110 transition-transform"><Twitch /></button>
             <button className="bg-[#FF0000] p-3 rounded-xl text-white hover:scale-110 transition-transform"><Youtube /></button>
          </div>
        </div>
      </div>

      {/* Latest Content Grid */}
      <div>
        <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-brick"></div>
            <h3 className="font-display font-bold text-2xl text-navy">LATEST CLIPS & VODS</h3>
            <div className="h-1 flex-grow bg-brick/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group bg-white rounded-xl overflow-hidden border-2 border-navy retro-shadow-hover transition-all">
              <div className="relative aspect-video bg-black group-hover:opacity-90 transition-opacity">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle size={48} className="text-white drop-shadow-lg" />
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    {video.platform === 'youtube' ? <Youtube size={12} className="text-red-500" /> : <Facebook size={12} className="text-blue-500" />}
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-bold text-lg leading-tight mb-2 line-clamp-2 group-hover:text-brick transition-colors">
                  {video.title}
                </h4>
                <div className="flex justify-between items-center text-sm text-navy/60 font-mono">
                  <span>{video.views} views</span>
                  <span className="text-tangerine">Watch Now &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
