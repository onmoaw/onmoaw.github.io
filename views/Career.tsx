
import React, { useEffect, useState } from 'react';
import { api } from '../services/supabaseService';
import { Experience, Project, Education } from '../types';
import ZigZagDivider from '../components/ZigZagDivider';
import { Briefcase, Code, Cpu, GraduationCap } from 'lucide-react';

export const Career: React.FC = () => {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [expData, projData, eduData] = await Promise.all([
        api.career.getExperience(),
        api.career.getProjects(),
        api.career.getEducation()
      ]);
      setExperience(expData);
      setProjects(projData);
      setEducation(eduData);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-16 h-16 border-4 border-navy border-t-tangerine rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-16 animate-pulse-fast">
      {/* Hero Section */}
      <section className="relative bg-tangerine rounded-3xl p-8 md:p-12 retro-shadow-brick text-navy overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-4">
            HELLO, I'M <span className="text-white drop-shadow-md">ONMOAW</span>
          </h1>
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 opacity-90">
             SOFT DEV | GAME QA
          </h2>
          <p className="font-sans text-xl font-medium max-w-2xl opacity-90">
            Building intuitive mobile experiences and ensuring game quality. Based in Dhaka, Bangladesh.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
             {['Flutter', 'Mobile Dev', 'Game QA', 'MySQL', 'Web Design'].map(tech => (
               <span key={tech} className="px-3 py-1 bg-navy text-white font-mono text-sm rounded-full">
                 {tech}
               </span>
             ))}
          </div>
        </div>
        <div className="absolute right-[-50px] top-[-50px] w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20px] left-[20%] w-40 h-40 bg-brick/40 rounded-full blur-2xl"></div>
      </section>

      <ZigZagDivider color="fill-navy" className="opacity-10" />

      {/* Experience */}
      <section>
        <div className="flex items-center space-x-4 mb-8">
            <div className="bg-brick p-3 rounded-lg text-white retro-shadow">
                <Briefcase size={24} />
            </div>
            <h2 className="font-display font-bold text-3xl text-navy">Experience</h2>
        </div>
        
        <div className="relative border-l-4 border-sand ml-6 space-y-12">
          {experience.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-[14px] top-2 w-6 h-6 bg-cream border-4 border-tangerine rounded-full group-hover:bg-tangerine transition-colors"></div>
              
              <div className="bg-white p-6 rounded-xl border-2 border-navy/5 transition-all duration-300 hover:border-navy retro-shadow-hover">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="font-bold text-xl">{job.role}</h3>
                  <span className="font-mono text-sm bg-sand/50 px-2 py-1 rounded text-navy/70">{job.period}</span>
                </div>
                <div className="text-tangerine font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-tangerine rounded-full"></span>
                  {job.company}
                </div>
                <p className="text-navy/80 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="flex items-center space-x-4 mb-8">
            <div className="bg-sand p-3 rounded-lg text-navy retro-shadow">
                <GraduationCap size={24} />
            </div>
            <h2 className="font-display font-bold text-3xl text-navy">Education</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div key={edu.id} className="bg-white p-6 rounded-xl border-2 border-sand hover:border-navy transition-all">
                <h3 className="font-bold text-xl mb-1">{edu.school}</h3>
                <p className="text-tangerine font-medium mb-2">{edu.degree}</p>
                <span className="text-xs font-mono bg-navy/10 px-2 py-1 rounded">{edu.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="flex items-center space-x-4 mb-8">
            <div className="bg-navy p-3 rounded-lg text-white retro-shadow-brick">
                <Code size={24} />
            </div>
            <h2 className="font-display font-bold text-3xl text-navy">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border-2 border-navy retro-shadow flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display font-bold text-2xl mb-2">{project.title}</h3>
                <p className="text-navy/70 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-sand">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-bold text-brick flex items-center gap-1">
                      <Cpu size={12} /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
