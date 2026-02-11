import React, { useState } from 'react';
import { api } from '../services/supabaseService';
import { Upload, Lock, CheckCircle, AlertCircle } from 'lucide-react';

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  // Simple client-side check for demo purposes
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Mock password
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) return;

    setUploadStatus('uploading');
    try {
      await api.photography.uploadPhoto(file, title);
      setUploadStatus('success');
      setTimeout(() => setUploadStatus('idle'), 3000);
      setFile(null);
      setTitle('');
    } catch (err) {
      setUploadStatus('error');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-2xl border-2 border-navy retro-shadow text-center">
        <div className="w-16 h-16 bg-navy text-cream rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock size={32} />
        </div>
        <h2 className="font-display font-bold text-2xl mb-6">RESTRICTED AREA</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Enter Access Key"
            className="w-full p-3 border-2 border-sand rounded-lg font-mono focus:border-tangerine focus:outline-none transition-colors"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-brick text-white font-bold py-3 rounded-lg hover:bg-navy transition-colors">
            UNLOCK SYSTEM
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl p-8 border-2 border-navy retro-shadow-brick">
        <h2 className="font-display font-bold text-3xl mb-8 flex items-center gap-3">
          <Upload className="text-tangerine" /> 
          PHOTO UPLOAD CENTER
        </h2>

        <form onSubmit={handleUpload} className="space-y-6">
          <div>
            <label className="block font-bold mb-2 text-navy">Image Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 bg-cream/50 border-2 border-sand rounded-xl focus:border-navy focus:outline-none"
              placeholder="e.g. Neon City Scape"
            />
          </div>

          <div>
            <label className="block font-bold mb-2 text-navy">File Asset</label>
            <div className="border-2 border-dashed border-navy/30 rounded-xl p-8 text-center hover:bg-cream/30 transition-colors cursor-pointer relative">
              <input 
                type="file" 
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {file ? (
                <div className="text-brick font-bold flex flex-col items-center">
                    <CheckCircle className="mb-2" />
                    {file.name}
                </div>
              ) : (
                <div className="text-navy/50 flex flex-col items-center">
                    <Upload className="mb-2" />
                    <span>Drag and drop or click to select</span>
                </div>
              )}
            </div>
          </div>

          <button 
            disabled={uploadStatus === 'uploading'}
            className={`
              w-full py-4 rounded-xl font-bold text-white text-lg transition-all
              ${uploadStatus === 'uploading' ? 'bg-sand cursor-wait' : 'bg-navy hover:bg-tangerine'}
            `}
          >
            {uploadStatus === 'uploading' ? 'UPLOADING...' : 'PUBLISH ASSET'}
          </button>

          {uploadStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
                <CheckCircle size={20} /> Upload successful!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};