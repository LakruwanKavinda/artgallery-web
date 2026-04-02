import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const artwork = location.state?.artwork;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artType: "Digital Art",
    budget: "",
    description: ""
  });
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (artwork) {
      setFormData((prev) => ({
        ...prev,
        description: `I would like to purchase the premium artwork: "${artwork.title}".\n\nAdditional notes: `
      }));
    }
  }, [artwork]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('artType', formData.artType);
    if (formData.budget) formDataObj.append('budget', formData.budget);
    formDataObj.append('description', formData.description);
    if (file) {
      formDataObj.append('referenceImage', file);
    }

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        body: formDataObj
      });
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Order delivered to lakruwankavinda689@gmail.com successfully!' });
        setFormData({ name: '', email: '', artType: 'Digital Art', budget: '', description: '' });
        setFile(null);
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Failed to send order.' });
      }
    } catch (error) {
      console.error("Order submission error:", error);
      setSubmitStatus({ type: 'error', message: 'Network error. Make sure the backend is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-slate-100 font-display antialiased">
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Order Form */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white leading-[1.1]">
                Order Custom <span className="text-primary">Artwork</span>
              </h1>
              <p className="text-slate-400 text-lg lg:text-xl max-w-2xl leading-relaxed">
                Transform your vision into a unique masterpiece created by our elite artists. Fill out the details below to start your commission or purchase a premium piece.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 lg:p-10 space-y-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">Full Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-primary/5 border border-primary/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 px-5 text-slate-100 placeholder:text-slate-600 transition-all outline-none" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">Email Address</label>
                  <input required name="email" value={formData.email} onChange={handleChange} className="w-full bg-primary/5 border border-primary/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 px-5 text-slate-100 placeholder:text-slate-600 transition-all outline-none" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">Art Type</label>
                  <div className="relative">
                    <select name="artType" value={formData.artType} onChange={handleChange} className="w-full appearance-none bg-primary/5 border border-primary/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 px-5 text-slate-100 transition-all cursor-pointer outline-none">
                      <option className="bg-background-dark">Digital Art</option>
                      <option className="bg-background-dark">Oil on Canvas</option>
                      <option className="bg-background-dark">Acrylic</option>
                      <option className="bg-background-dark">Pencil Sketch</option>
                      <option className="bg-background-dark">Pen &amp; Ink</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/60">expand_more</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">Budget ($)</label>
                  <input min="5" name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-primary/5 border border-primary/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 px-5 text-slate-100 placeholder:text-slate-600 transition-all outline-none" placeholder="Min $5" type="number" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">Project Description</label>
                <textarea required name="description" value={formData.description} onChange={handleChange} className="w-full bg-primary/5 border border-primary/20 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 p-5 text-slate-100 placeholder:text-slate-600 transition-all resize-none outline-none" placeholder="Describe the theme, mood, and specific details you want in your artwork..." rows="5"></textarea>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-1">Reference Image</label>
                <div className="relative border-2 border-dashed border-primary/20 hover:border-primary/50 transition-colors bg-primary/5 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer group">
                  <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/png, image/jpeg, application/pdf" />
                  
                  {file ? (
                    <div className="flex flex-col items-center z-10 pointer-events-none">
                      <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">task</span>
                      </div>
                      <p className="text-sm font-bold text-primary mt-4 text-center">Selected: {file.name}</p>
                      <button 
                        onClick={(e) => { e.preventDefault(); setFile(null); }} 
                        className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 hover:text-red-400 pointer-events-auto transition-colors"
                      >
                        Remove file
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center z-10 pointer-events-none">
                      <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                      </div>
                      <div className="text-center mt-4">
                        <p className="text-sm font-bold text-slate-200">Drag and drop or click to upload</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">PNG, JPG or PDF up to 10MB</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button disabled={isSubmitting} className="w-full bg-primary hover:bg-white text-background-dark font-black py-5 rounded-xl shadow-xl shadow-primary/10 transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-sm disabled:opacity-70" type="submit">
                {isSubmitting ? 'Sending Order...' : 'Submit Order'}
              </button>
              {submitStatus && (
                <div className={`p-4 rounded-xl text-center text-sm font-bold ${submitStatus.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                  {submitStatus.message}
                </div>
              )}
              <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest">By submitting, you agree to our Terms & Privacy Policy.</p>
            </form>
          </div>
          {/* Right Side: Inspiration & Previews */}
          <div className="sticky top-32 space-y-12 hidden lg:block">
            <div className="group relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img alt="Digital portrait preview" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD04HjU_EAKv3T_gU9sugBuUAI2zHNSDlS_F3CHxk5XdDyu2qilazRxsHYlKQ6jYvf0GuEqYIEJO7kIR67DhRoIAU7feUbCWQqesD1n2v-PtMyQcJwS7jzMODfJan8q3xiuCU_RrUZeKV1u0H4uvZMFU6bFZ0-ZmQ9aaPhWEuvgY7sh2GZPFvJMjqaRmSEvRw8vmNv9yX0KZJ0AQs-Gd9heqqnyZqRZCcn6PkGYxQ1sWuFnJo2rgo6WAnjFLwYdEhJJOychQ8pz8FE" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <span className="glass-panel text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">Example Piece</span>
                  <h3 className="text-3xl font-bold mt-4 text-white">The Golden Muse</h3>
                  <p className="text-slate-400 text-sm mt-3 max-w-sm leading-relaxed">Commissioned in 2023, this digital portrait blends classical aesthetics with modern digital techniques.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-panel p-8 rounded-3xl text-center flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">verified</span>
                <div>
                  <h4 className="font-bold text-white text-lg">Elite Artists</h4>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2">Hand-picked professionals</p>
                </div>
              </div>
              <div className="glass-panel p-8 rounded-3xl text-center flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">history_edu</span>
                <div>
                  <h4 className="font-bold text-white text-lg">Unique Style</h4>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2">Tailored to your vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Order;
