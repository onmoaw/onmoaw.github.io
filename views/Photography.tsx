
import React, { useEffect, useState } from 'react';
import { api } from '../services/supabaseService';
import { Photo } from '../types';
import { Instagram, Image as ImageIcon, ExternalLink } from 'lucide-react';

export const Photography: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [filter, setFilter] = useState<'all' | 'instagram' | 'flickr' | 'upload'>('all');

  useEffect(() => {
    api.photography.getAllPhotos().then(setPhotos);
  }, []);

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.source === filter);

  return (
    <div className="space-y-8">
      {/* Header & Controls */}
      <div className="bg-navy text-cream p-8 rounded-3xl retro-shadow-brick mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="font-display font-bold text-4xl mb-2">ONMORAW</h2>
            <p className="text-sand/70 font-mono text-sm">Capturing the world through my lens.</p>
          </div>
          
          <div className="flex bg-navy-800 p-1 rounded-lg border border-sand/20">
            {(['all', 'instagram', 'flickr', 'upload'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`
                  px-4 py-2 rounded-md font-bold text-sm capitalize transition-all
                  ${filter === f 
                    ? 'bg-tangerine text-navy shadow-sm' 
                    : 'text-sand hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry-style Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="break-inside-avoid relative group">
            <div className="relative overflow-hidden rounded-xl border-4 border-white shadow-xl">
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white font-display font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.title}
                </h3>
                <span className="text-tangerine font-mono text-xs mb-4">
                  {new Date(photo.date).toLocaleDateString()}
                </span>
                
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sand text-xs">
                  {photo.source === 'instagram' && <Instagram size={14} />}
                  {photo.source === 'flickr' && <span className="w-3 h-3 rounded-full bg-pink-500"></span>}
                  {photo.source === 'upload' && <ImageIcon size={14} />}
                  <span className="capitalize">{photo.source}</span>
                </div>
              </div>
            </div>
            
            {/* Decorative tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-sand/80 rotate-[-2deg] opacity-80 shadow-sm z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
