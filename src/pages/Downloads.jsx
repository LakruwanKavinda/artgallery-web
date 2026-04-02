import React from "react";

const Downloads = () => {
  // TODO: Add state for filter, sort, modal, etc.
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-slate-100 font-display">
      {/* Global Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-8">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">ART L</h2>
          </div>
          <nav className="hidden lg:flex items-center gap-10">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Gallery</a>
            <a className="text-sm font-semibold text-primary" href="#">Downloads</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Order</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">About</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Contact</a>
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center bg-primary/5 border border-primary/20 rounded-lg px-3 py-1.5">
              <span className="material-symbols-outlined text-primary text-xl">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-32 xl:w-48 placeholder:text-primary/40" placeholder="Search assets..." type="text" />
            </div>
            <div className="size-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden">
              <img className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGHKgzM_6iejk1IRB_YjXj1RAnpMFPrj-UqgxRC2zzKb5kuR-_X6AFt-Z07Er80xYVUV8mlv4zxLXxXHtoA6easKZAfHe-mZ3a50PNiWQr7TBke7kNbu6KMnaCr6hQxIbGCSrIspHXec_nVUfVFEVs94TS4Mz1v24OQDnZ81t3I6U5B9IabJR71oetjFs8peaj0DPa_NFzI1YU6VCqMR8eus6G_o9GfFGfgl1O1e3J0c4uYEuUQfN-gLWH2UNxtRzKr_8KBl5_6i0" alt="User profile avatar" />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-16 lg:py-24">
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Digital <span className="text-primary">Downloads</span>
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl max-w-2xl leading-relaxed">
            Premium artistic assets for the visionary creator. Curated quality in every pixel.
          </p>
        </div>
        {/* Filter & Sort Section: Glassmorphic */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="glass-panel p-1.5 rounded-2xl flex items-center w-fit">
            <button className="px-10 py-2.5 rounded-xl text-sm font-bold transition-all bg-primary text-background-dark shadow-xl">All Assets</button>
            <button className="px-10 py-2.5 rounded-xl text-sm font-bold transition-all hover:text-primary text-slate-400">Free</button>
            <button className="px-10 py-2.5 rounded-xl text-sm font-bold transition-all hover:text-primary text-slate-400">Premium</button>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-slate-500 tracking-wider uppercase">Sort By</span>
            <div className="relative group">
              <select className="appearance-none bg-primary/5 border border-primary/20 rounded-xl px-6 py-3 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-100 outline-none min-w-[200px] cursor-pointer">
                <option>Recently Added</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Popularity</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary text-lg">expand_more</span>
            </div>
          </div>
        </div>
        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12">
          {/* Card 1: Premium */}
          <div className="art-card-modern group relative flex flex-col">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img className="image-zoom w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7A8GfhsFE1CZAZCfJZkrIbUnTroZmsG-SYn0RjLGpH4KWnv65hyw4_wNH0wWIWnl66AMYa72Z9TbwcoYXs2GBSkB74ag0rkK7x_12DOm6rsWtXmurOZ_4Q9FiDIFuFsQ1pRlAHeOiCNBqDYJaokQ976l-HxGn3F8etMSc47Mecvw27iOzfTX8R4G1-XvLAm1xFcSCsF8KwHMPqYWHSn6KwNJXYSWUQFaXVGfhIcYXOFhEAJoIfNrjNFvjSPl_ahRSuXBVo2Xg2sw" alt="Abstract golden oil painting texture" />
              <div className="image-overlay absolute inset-0 bg-background-dark/40 opacity-0 transition-opacity flex items-center justify-center">
                <div className="glass-panel p-4 rounded-full text-primary scale-90 group-hover:scale-100 transition-transform">
                  <span className="material-symbols-outlined text-4xl">shopping_bag</span>
                </div>
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="glass-panel text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">Premium</span>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Digital Art</p>
                <h3 className="text-2xl font-bold text-white leading-tight">Golden Solitude</h3>
              </div>
              <div className="text-right">
                <p className="text-primary font-black text-xl mb-1">$15.00</p>
                <a className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest border-b border-transparent hover:border-primary" href="#">View Details</a>
              </div>
            </div>
          </div>
          {/* Card 2: Free */}
          <div className="art-card-modern group relative flex flex-col">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img className="image-zoom w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmJXiMFxbnaZycUUPbjh1oy8V9kTvEzySvkeuM8Dw7csWoK-8Hil4uDutBhvj0GW2BPvJXw9yz1XgjXzaiyGObGU54qw9v-EIdvGkCAsR0KMa64TqPK9mIsIdJHT6q0K_s7sZ6zSN4kDRzRw_9IedItmGGHDOlLf478rMt1GvCwH8tb8cTs2A30RU2Fy2w_8WaUN_Kppfn6gD8v90b21hTl_A6Q4JkkdCI1NmjZfH-H2Y0fF_ux2tP_46oteXUb-mDljrm2NGBR2Q" alt="Pencil sketch of a surreal landscape" />
              <div className="image-overlay absolute inset-0 bg-background-dark/40 opacity-0 transition-opacity flex items-center justify-center">
                <div className="glass-panel p-4 rounded-full text-white scale-90 group-hover:scale-100 transition-transform">
                  <span className="material-symbols-outlined text-4xl">download</span>
                </div>
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="glass-panel bg-slate-800/80 border-slate-700 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">Free Asset</span>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Pencil Sketch</p>
                <h3 className="text-2xl font-bold text-white leading-tight">Ethereal Dreams</h3>
              </div>
              <div className="text-right">
                <p className="text-slate-300 font-black text-xl mb-1">FREE</p>
                <a className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest border-b border-transparent hover:border-primary" href="#">Download</a>
              </div>
            </div>
          </div>
          {/* Card 3: Premium */}
          <div className="art-card-modern group relative flex flex-col">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img className="image-zoom w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADzGDq8V29bWWxY4D2uUkerjdfEnC6tUACgLIteBgrs1AHY67RktLNmwUfm4jJ3T2wPu6lUOoRVI1YeUdrIKNHZLcji-z8e9-NlCH3hFSWjdRTvKbVjiNCwXHYwK-DJRE1x0RKIsWDj1ki12LsovmAF7KuW_a4Rh0_aDJmcreMLfQXq_bJTu_szhdyDqPeLHmI5ygj351bjZ9ljmBa3HwIiYHO8p6Z2CSAexiCpTEnuC4RV1ewQNMwrZkb4psMkuOqJn82JfB9aNc" alt="Vibrant neon flower digital illustration" />
              <div className="image-overlay absolute inset-0 bg-background-dark/40 opacity-0 transition-opacity flex items-center justify-center">
                <div className="glass-panel p-4 rounded-full text-primary scale-90 group-hover:scale-100 transition-transform">
                  <span className="material-symbols-outlined text-4xl">shopping_bag</span>
                </div>
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="glass-panel text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">Premium</span>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Digital Illustration</p>
                <h3 className="text-2xl font-bold text-white leading-tight">Midnight Bloom</h3>
              </div>
              <div className="text-right">
                <p className="text-primary font-black text-xl mb-1">$20.00</p>
                <a className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest border-b border-transparent hover:border-primary" href="#">View Details</a>
              </div>
            </div>
          </div>
          {/* Card 4: Premium */}
          <div className="art-card-modern group relative flex flex-col">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img className="image-zoom w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAioby5XWFVIXUBiOvXrxhkSA-kIazCdoB_57Br9f4KVRN0ny8Ra2gZ38Q_KlChHKxi9PmJb06nEXUq8mvj7VhL89DCRkzxzCHe1fgMozXmQpFtZXSOxUv1FBF8f9LeaErGxa1cK87JJRSAF3Zoh9d5ojKh395Obwf5AVO7zLUjcZBUFvDFuS7C6t8yg7kfMLaM9A2MH57POdxhsc6YfTosYUlLr1Dk41h9G4sXF0f8nsJ92IzqOv2uCPr_hT2h6zuHpx_4exSeNGw" alt="Cyberpunk city neon street pattern" />
              <div className="image-overlay absolute inset-0 bg-background-dark/40 opacity-0 transition-opacity flex items-center justify-center">
                <div className="glass-panel p-4 rounded-full text-primary scale-90 group-hover:scale-100 transition-transform">
                  <span className="material-symbols-outlined text-4xl">shopping_bag</span>
                </div>
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="glass-panel text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">Premium</span>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Cyberpunk</p>
                <h3 className="text-2xl font-bold text-white leading-tight">Neon Pulse</h3>
              </div>
              <div className="text-right">
                <p className="text-primary font-black text-xl mb-1">$12.00</p>
                <a className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest border-b border-transparent hover:border-primary" href="#">View Details</a>
              </div>
            </div>
          </div>
          {/* Card 5: Free */}
          <div className="art-card-modern group relative flex flex-col">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img className="image-zoom w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJQEyMV4Iumwn2__QvtlBDxl5Ng2Tdosw4321t3pVymFlKZn9snvmMotDsEM3ok5BbLLLgOTT-Gaw2fYV1JHzplpLW5z7n6KL3jV2zn_iwh8ZA2sGi6RVoOz6xItrnUGll5bF37xXvbqGIScAGwyLGTtUDZT-_-Qu16pzylVc_T3WyKJ2SMY-EAKf2HcjvTBSc-3zg7fAuH3OkCX4OjWdmclSaY4ThI90XkYkzY4h0jUug2LIkHOMVBIjPwyTTP21GrWTQK-gATQU" alt="Minimalist architectural shapes charcoal" />
              <div className="image-overlay absolute inset-0 bg-background-dark/40 opacity-0 transition-opacity flex items-center justify-center">
                <div className="glass-panel p-4 rounded-full text-white scale-90 group-hover:scale-100 transition-transform">
                  <span className="material-symbols-outlined text-4xl">download</span>
                </div>
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="glass-panel bg-slate-800/80 border-slate-700 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">Free Asset</span>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Charcoal Study</p>
                <h3 className="text-2xl font-bold text-white leading-tight">Silent Structure</h3>
              </div>
              <div className="text-right">
                <p className="text-slate-300 font-black text-xl mb-1">FREE</p>
                <a className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest border-b border-transparent hover:border-primary" href="#">Download</a>
              </div>
            </div>
          </div>
          {/* Card 6: Premium */}
          <div className="art-card-modern group relative flex flex-col">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img className="image-zoom w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZwnqZ5k-XKstic2mo9uln6QabYdfl7CqPDWNE6cU7XkzNgbiAVHSz7MDhtg0jK77paOSy99InzNdSJcH7XXPcjRq45UbuKQSrIxjn7Mi-tNC5sBvR8JrNxNNMWElXtg7aoCetK7vPIoecY3yvLy0VPEGb5XrXTIqP_3TtnmWh9C2DD00lQOPV-ir8uG678CQvxq5L5ghw6YT0rLTXVO1mQY09XNGMsF8gHgvkY14OgRgCaykurWmbzRPAp7xtJwACja4DolUga-Y" alt="Fluid art acrylic pour design" />
              <div className="image-overlay absolute inset-0 bg-background-dark/40 opacity-0 transition-opacity flex items-center justify-center">
                <div className="glass-panel p-4 rounded-full text-primary scale-90 group-hover:scale-100 transition-transform">
                  <span className="material-symbols-outlined text-4xl">shopping_bag</span>
                </div>
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="glass-panel text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">Premium</span>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Acrylic Pour</p>
                <h3 className="text-2xl font-bold text-white leading-tight">Fluid Velocity</h3>
              </div>
              <div className="text-right">
                <p className="text-primary font-black text-xl mb-1">$18.00</p>
                <a className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest border-b border-transparent hover:border-primary" href="#">View Details</a>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination/Load More: Minimalist */}
        <div className="mt-24 flex justify-center">
          <button className="group flex items-center gap-4 text-primary font-bold tracking-[0.2em] uppercase text-xs">
            <span className="h-px w-12 bg-primary/30 group-hover:w-20 transition-all duration-500"></span>
            Discover More Masterpieces
            <span className="h-px w-12 bg-primary/30 group-hover:w-20 transition-all duration-500"></span>
          </button>
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

export default Downloads;
