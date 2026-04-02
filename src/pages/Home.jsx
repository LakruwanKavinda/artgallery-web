import React, { useState } from "react";
import { Link } from "react-router-dom";
import homehero1 from "../assets/homehero1.jpg";
import auth1 from "../assets/auth1.jpg";

// Reusable UI components would be imported here (Navbar, Footer, ArtCard, etc.)
// For now, static JSX is used. Modularize as needed.

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-slate-100 selection:bg-primary/30 font-display">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-24 lg:pt-12 lg:pb-32">
          <div className="absolute inset-0 glow-bg pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 z-10">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">Est. 2024</span>
                <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  Where Art <br /><span className="text-primary">Comes Alive</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Experience the intersection of tradition and digital innovation. Discover curated masterpieces or commission your own personalized vision.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/gallery" className="rounded-xl bg-primary px-8 py-4 text-background-dark font-bold hover:scale-105 transition-transform">
                  Explore Gallery
                </Link>
                <Link to="/order" className="rounded-xl bg-white/5 border border-white/10 px-8 py-4 text-white font-bold hover:bg-white/10 transition-colors">
                  Order Custom Art
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition duration-1000"></div>
              <div className="relative aspect-[4/5] rounded-2xl bg-cover bg-center overflow-hidden border border-white/10 shadow-2xl" style={{backgroundImage: `url(${homehero1})`}}></div>
            </div>
          </div>
        </section>
        {/* Featured Artworks */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Featured Masterpieces</h2>
                <p className="text-slate-400">Hand-selected works from our recent collections</p>
              </div>
              <Link to="/gallery" className="text-primary font-bold flex items-center gap-2 group">
                View All <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Art Cards - static for now, modularize later */}
              <div onClick={() => setSelectedImage('https://lh3.googleusercontent.com/aida-public/AB6AXuAQoRt5sdoj9YxKVDl-7As11oKAS9cHlL-5ld5H7tCZrrzsEyL3KWPm2WqlmCr6qp8KekQU7nm35nn8tqB5bvgPJ0N5VN7GMlavuFZW9hwoMwSb8lMLyG90JL1lMuu4BBXPhYMudefrFS-2fPV7230TUZf4KJYg6QggY4m3aYFkN8PZp5ILpd6OA8I8DXdc8s8N4R0nJEiezFqFpYy75Kn1R2r9RVl6UjYFz0KUqsoElhlFqjyRTBx17vGTwnHUrbQV6n3yWphH9Ok')} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-background-dark border border-white/5 cursor-pointer">
                <img alt="Midnight Solitude" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQoRt5sdoj9YxKVDl-7As11oKAS9cHlL-5ld5H7tCZrrzsEyL3KWPm2WqlmCr6qp8KekQU7nm35nn8tqB5bvgPJ0N5VN7GMlavuFZW9hwoMwSb8lMLyG90JL1lMuu4BBXPhYMudefrFS-2fPV7230TUZf4KJYg6QggY4m3aYFkN8PZp5ILpd6OA8I8DXdc8s8N4R0nJEiezFqFpYy75Kn1R2r9RVl6UjYFz0KUqsoElhlFqjyRTBx17vGTwnHUrbQV6n3yWphH9Ok" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white">Midnight Solitude</h3>
                  <p className="text-primary text-sm">Acrylic on Canvas</p>
                </div>
              </div>
              <div onClick={() => setSelectedImage('https://lh3.googleusercontent.com/aida-public/AB6AXuC-WL5S2oFW38lJs_LSjHjH0uBohS9IM42N3J0vlUARjc3E1A8x6tcuFzxUA1ZI8mfMXFzPS83nEOQDqjTfFWDPKMvRYtIlrehdbI0UAuP55gRlcT0kTDuceWHI3KVuOdF6-W6EPpiHFyig2HgIuVpYkekS79_uM83l97ZlMrffeaQI75XrXuJXG3Ct3H-sHrhHDS72xtUZ5urgCLBxDDEqFz3_Q_aS3gJF7DRtSgIQ7g684NtntMGCd-ZpgSAZ-6GTANq4-dCHm_g')} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-background-dark border border-white/5 cursor-pointer">
                <img alt="Golden Horizon" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-WL5S2oFW38lJs_LSjHjH0uBohS9IM42N3J0vlUARjc3E1A8x6tcuFzxUA1ZI8mfMXFzPS83nEOQDqjTfFWDPKMvRYtIlrehdbI0UAuP55gRlcT0kTDuceWHI3KVuOdF6-W6EPpiHFyig2HgIuVpYkekS79_uM83l97ZlMrffeaQI75XrXuJXG3Ct3H-sHrhHDS72xtUZ5urgCLBxDDEqFz3_Q_aS3gJF7DRtSgIQ7g684NtntMGCd-ZpgSAZ-6GTANq4-dCHm_g" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white">Golden Horizon</h3>
                  <p className="text-primary text-sm">Digital Illustration</p>
                </div>
              </div>
              <div onClick={() => setSelectedImage('https://lh3.googleusercontent.com/aida-public/AB6AXuDhC9vwaim9jzYdrH_8T0KkexWCmdJCCkgJrEX92LGrFD5tDNNuP2fg75ZMZ3zYpKT31A0pVzmberLcXDAxhp7qCD67nPqOGkZ2l2cM0P8w3ppmji3kv5piWkkNGGl5E2mWdE5KWiUO8YL7VySGdyXVaXrpRZSIH3BYLKI9OTcDNGfKXAZlcTr3pchZAJaCEK8q-C5kHaE__zQvfpFFcm7SwlZYvho4RGH9FXDwF5yTrVlG_5iuC1lv4bxQMTv4RPuhC1tNrgEcBWU')} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-background-dark border border-white/5 cursor-pointer">
                <img alt="Urban Echo" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhC9vwaim9jzYdrH_8T0KkexWCmdJCCkgJrEX92LGrFD5tDNNuP2fg75ZMZ3zYpKT31A0pVzmberLcXDAxhp7qCD67nPqOGkZ2l2cM0P8w3ppmji3kv5piWkkNGGl5E2mWdE5KWiUO8YL7VySGdyXVaXrpRZSIH3BYLKI9OTcDNGfKXAZlcTr3pchZAJaCEK8q-C5kHaE__zQvfpFFcm7SwlZYvho4RGH9FXDwF5yTrVlG_5iuC1lv4bxQMTv4RPuhC1tNrgEcBWU" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white">Urban Echo</h3>
                  <p className="text-primary text-sm">Pen &amp; Ink</p>
                </div>
              </div>
              <div onClick={() => setSelectedImage('https://lh3.googleusercontent.com/aida-public/AB6AXuBe6vQxLdGCcd8EySREkbgnkOffG062zSKneperoy8_jwfVe0HXPNCt1zaqGYhxnDaYJLBZQ-RVpsNM-KgqVVJm7k7LsbGsWMaJhwKuzjSVBbMof7u6Mxl7IwMqsJOAzECnHFU-xwRmmDEMkPfpVxwg9boOvvjeMY88OhY4ogNpE8mL_1Y5MLB3J4ZGAv3DpPtsZ79ENiC0ht0qoSgFBRqb18dbhiADjupXrqPY6THRk5Ve3VV2ymQ188Skete3FroLENWIsy-RCxM')} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-background-dark border border-white/5 cursor-pointer">
                <img alt="Ethereal Bloom" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe6vQxLdGCcd8EySREkbgnkOffG062zSKneperoy8_jwfVe0HXPNCt1zaqGYhxnDaYJLBZQ-RVpsNM-KgqVVJm7k7LsbGsWMaJhwKuzjSVBbMof7u6Mxl7IwMqsJOAzECnHFU-xwRmmDEMkPfpVxwg9boOvvjeMY88OhY4ogNpE8mL_1Y5MLB3J4ZGAv3DpPtsZ79ENiC0ht0qoSgFBRqb18dbhiADjupXrqPY6THRk5Ve3VV2ymQ188Skete3FroLENWIsy-RCxM" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white">Ethereal Bloom</h3>
                  <p className="text-primary text-sm">Oil Painting</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Medium Categories */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Explore by Medium</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group flex flex-col items-center gap-4 cursor-pointer">
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors group-hover:text-background-dark text-primary">
                <span className="material-symbols-outlined text-4xl">edit</span>
              </div>
              <h3 className="text-xl font-bold">Pencil</h3>
            </div>
            <div className="group flex flex-col items-center gap-4 cursor-pointer">
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors group-hover:text-background-dark text-primary">
                <span className="material-symbols-outlined text-4xl">format_paint</span>
              </div>
              <h3 className="text-xl font-bold">Acrylic</h3>
            </div>
            <div className="group flex flex-col items-center gap-4 cursor-pointer">
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors group-hover:text-background-dark text-primary">
                <span className="material-symbols-outlined text-4xl">computer</span>
              </div>
              <h3 className="text-xl font-bold">Digital</h3>
            </div>
            <div className="group flex flex-col items-center gap-4 cursor-pointer">
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors group-hover:text-background-dark text-primary">
                <span className="material-symbols-outlined text-4xl">history_edu</span>
              </div>
              <h3 className="text-xl font-bold">Pen &amp; Ink</h3>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 size-32 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute -bottom-4 -right-4 size-32 border-b-2 border-r-2 border-primary"></div>
                <img alt="" className="rounded-lg relative z-10 w-full h-[500px] object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-700" src={auth1} />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <h2 className="text-4xl font-black">Behind the Canvas</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Founded by visionaries who believe that art is the universal language of the soul. ART L was established to bridge the gap between traditional craftsmanship and modern digital expression.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Every piece in our gallery is carefully curated or commissioned to ensure it resonates with the viewer, telling a story that goes beyond the brushstrokes.
              </p>
              <div className="flex gap-4 mt-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">120+</span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">Exhibitions</span>
                </div>
                <div className="w-px h-10 bg-primary/20"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">5k+</span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">Collectors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Popup Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/20 bg-slate-950 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-white/20 transition"
                aria-label="Close image popup"
              >
                ✕
              </button>
              <img src={selectedImage} alt="Selected artwork" className="w-full h-[70vh] object-cover" />
              <div className="p-4 bg-slate-900 text-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Artwork Preview</h3>
                    <p className="text-slate-400 text-sm">Click outside or close to return to the gallery.</p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="rounded-md bg-primary px-3 py-1 text-sm font-semibold text-background-dark"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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

export default Home;
