import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-slate-100 font-display antialiased">
      <main className="flex-1">
        {/* Modern Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                The Visionary <br /><span className="text-primary">Behind the Canvas</span>
              </h1>
            </div>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              ART L is a contemporary creator blending traditional techniques with modern narratives. Driven by passion and precision, every stroke tells a story of elegance, depth, and human connection. Based in London, ART L's work explores the boundaries between digital precision and tactile organic textures.
            </p>
            <div className="pt-4">
              <a href="https://lakruwandissanayake4585.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary/5 border border-primary text-primary px-10 py-4 rounded-xl font-bold hover:bg-primary hover:text-background-dark transition-all shadow-lg shadow-primary/5 uppercase tracking-widest text-xs text-center border-t-0 border-b-0 border-l-0 border-r-0">
                View Portfolio
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/20 rounded-[2rem] blur-2xl group-hover:bg-primary/30 transition duration-1000"></div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 glass-panel">
                <img alt="Artist Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbJwkdYTAzhgAWZbiGO08M0LLMfIehFu58SeZujrdEOkzzPLrg5Ra2mAjY4MzX9rI1BGGueBIiR9mNbCm71bRwSh_ka-3GxkAUHMiSmUGyVJJzdXxuQ8laGR0Yi-ddjVswseOwCt-m5DW-Kh7EUlLT-QUgdZE-Nrn7oBa0OGUTq6K2BupV3EBdok5rXzkOjnbfoPyeVi7nOJkwD3iLQbYh28pu9G2LI0ZHLJwDlFntUUppdpxhodT-AZBV5B-oYFn0o5ZgD_GGwKg" />
              </div>
            </div>
          </div>
        </section>
        {/* Our Story (Modern Accordion) */}
        <section className="bg-primary/[0.02] border-y border-white/5 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Our Story</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <details className="group glass-panel rounded-2xl overflow-hidden" open>
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none hover:bg-primary/5 transition-colors">
                <span className="text-xl font-bold text-white flex items-center gap-6">
                  <span className="text-primary font-black text-sm uppercase tracking-widest">01</span>
                  The Beginning
                </span>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                My journey started with a single graphite pencil and a dream to capture the essence of human emotion through light and shadow. In the early days, I spent countless hours studying the masters, learning how to manipulate value and form to create realism that breathes.
              </div>
            </details>
            <details className="group glass-panel rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none hover:bg-primary/5 transition-colors">
                <span className="text-xl font-bold text-white flex items-center gap-6">
                  <span className="text-primary font-black text-sm uppercase tracking-widest">02</span>
                  Finding My Voice
                </span>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                Evolution meant stepping away from pure realism into the realm of abstract expression. I began integrating acrylics and digital layering, finding a unique middle ground that reflects the complexity of our modern, tech-driven lives while staying rooted in organic artistry.
              </div>
            </details>
            <details className="group glass-panel rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none hover:bg-primary/5 transition-colors">
                <span className="text-xl font-bold text-white flex items-center gap-6">
                  <span className="text-primary font-black text-sm uppercase tracking-widest">03</span>
                  Art with a Purpose
                </span>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                Today, ART L stands for more than just aesthetics. Every piece is designed to provoke thought, evoke empathy, or provide a moment of serene escape. My mission is to bridge the gap between the viewer's internal world and the external canvas.
              </div>
            </details>
          </div>
        </section>
        {/* Skills & Expertise (Clean Professional Layout) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-extrabold text-white tracking-tight mb-6">Skills & Expertise</h2>
                <p className="text-slate-400 leading-relaxed">
                  A multidisciplinary approach allows for the creation of diverse artworks that cater to different spaces and emotional tones.
                </p>
              </div>
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-bold text-slate-300 uppercase tracking-widest text-[10px]">Pencil & Charcoal</span>
                    <span className="text-primary font-black text-xs">95%</span>
                  </div>
                  <div className="h-1.5 w-full skill-bar-bg rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(238,189,43,0.5)]" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-bold text-slate-300 uppercase tracking-widest text-[10px]">Acrylic & Oil</span>
                    <span className="text-primary font-black text-xs">88%</span>
                  </div>
                  <div className="h-1.5 w-full skill-bar-bg rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(238,189,43,0.5)]" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-bold text-slate-300 uppercase tracking-widest text-[10px]">Digital Illustration</span>
                    <span className="text-primary font-black text-xs">92%</span>
                  </div>
                  <div className="h-1.5 w-full skill-bar-bg rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(238,189,43,0.5)]" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-bold text-slate-300 uppercase tracking-widest text-[10px]">Pen & Ink</span>
                    <span className="text-primary font-black text-xs">80%</span>
                  </div>
                  <div className="h-1.5 w-full skill-bar-bg rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(238,189,43,0.5)]" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel aspect-square rounded-[2rem] flex flex-col items-center justify-center p-8 text-center group hover:border-primary/40 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">edit</span>
                <h3 className="font-extrabold text-white uppercase tracking-widest text-xs">Pencil Art</h3>
              </div>
              <div className="glass-panel aspect-square rounded-[2rem] flex flex-col items-center justify-center p-8 text-center group hover:border-primary/40 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">palette</span>
                <h3 className="font-extrabold text-white uppercase tracking-widest text-xs">Acrylic</h3>
              </div>
              <div className="glass-panel aspect-square rounded-[2rem] flex flex-col items-center justify-center p-8 text-center group hover:border-primary/40 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">devices</span>
                <h3 className="font-extrabold text-white uppercase tracking-widest text-xs">Digital</h3>
              </div>
              <div className="glass-panel aspect-square rounded-[2rem] flex flex-col items-center justify-center p-8 text-center group hover:border-primary/40 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">gesture</span>
                <h3 className="font-extrabold text-white uppercase tracking-widest text-xs">Pen Art</h3>
              </div>
            </div>
          </div>
        </section>
        {/* Career Milestones (Refined Timeline) */}
        <section className="bg-background-dark py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <h2 className="text-4xl font-extrabold text-white tracking-tight text-center mb-20">Career Milestones</h2>
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
              {/* Milestones */}
              <div className="space-y-24">
                <div className="relative flex items-center justify-between">
                  <div className="w-[45%] text-right pr-12 lg:pr-20">
                    <span className="text-primary font-black text-sm uppercase tracking-widest mb-2 block">2023</span>
                    <h3 className="text-2xl font-bold text-white mb-3">Lumina Exhibition</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Solo exhibition featuring over 40 digital and physical pieces in London's South Bank.</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background-dark shadow-[0_0_15px_rgba(238,189,43,0.6)] z-10"></div>
                  <div className="w-[45%]"></div>
                </div>
                <div className="relative flex items-center justify-between">
                  <div className="w-[45%]"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background-dark shadow-[0_0_15px_rgba(238,189,43,0.6)] z-10"></div>
                  <div className="w-[45%] text-left pl-12 lg:pl-20">
                    <span className="text-primary font-black text-sm uppercase tracking-widest mb-2 block">2021</span>
                    <h3 className="text-2xl font-bold text-white mb-3">Global Digital Arts Award</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Received the prestigious award for Innovation in Hybrid Media techniques.</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between">
                  <div className="w-[45%] text-right pr-12 lg:pr-20">
                    <span className="text-primary font-black text-sm uppercase tracking-widest mb-2 block">2018</span>
                    <h3 className="text-2xl font-bold text-white mb-3">Foundation of ART L</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">The official launch of the ART L studio and online gallery space.</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background-dark shadow-[0_0_15px_rgba(238,189,43,0.6)] z-10"></div>
                  <div className="w-[45%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Order CTA Section (Updated Aesthetic) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
          <div className="relative bg-primary rounded-[3rem] p-12 lg:p-24 overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 size-96 rounded-full bg-white/10 blur-3xl"></div>
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              <div className="max-w-3xl">
                <h2 className="text-4xl lg:text-6xl font-black text-background-dark leading-tight mb-8">
                  Transform Your Vision into a Masterpiece
                </h2>
                <p className="text-background-dark/70 text-lg lg:text-xl font-semibold max-w-xl">
                  Looking for something unique? Let's collaborate on a custom artwork tailored to your style and space.
                </p>
              </div>
              <Link to="/order" className="bg-background-dark text-white hover:bg-black px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all shrink-0 hover:scale-105 active:scale-95 text-center">
                Order Custom Artwork
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-background-dark border-t border-primary/10 px-6 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 text-primary mb-8">
                <div className="size-6">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold tracking-tight">ART L</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                A sanctuary for premium digital and physical art. Curating excellence for the modern collector and visionary creator.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-primary uppercase text-[10px] tracking-[0.3em]">Resources</h4>
              <ul className="space-y-4 text-sm">
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Gallery Guide</a></li>
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Download Terms</a></li>
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">License Types</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-primary uppercase text-[10px] tracking-[0.3em]">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Our Vision</a></li>
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Careers</a></li>
                <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-primary uppercase text-[10px] tracking-[0.3em]">Newsletter</h4>
              <div className="flex flex-col gap-3">
                <input className="bg-primary/5 border border-primary/20 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-primary/30 outline-none text-slate-200" placeholder="Email address" type="email" />
                <button className="w-full py-3 bg-primary text-background-dark font-bold rounded-xl text-sm hover:bg-white transition-all">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
            <p>© 2024 ART L Collective. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10">
              <a className="hover:text-primary transition-colors" href="#">Instagram</a>
              <a className="hover:text-primary transition-colors" href="#">Twitter</a>
              <a className="hover:text-primary transition-colors" href="#">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
