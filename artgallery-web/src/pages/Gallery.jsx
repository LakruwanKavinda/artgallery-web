import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const artworksData = [
  {
    id: 1,
    title: "Midnight Solitude",
    medium: "Acrylic",
    type: "Premium",
    price: 45,
    desc: "Abstract landscape study",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADuBzPYH5OfXaOw-bY0wlByGZEmroLF3OQCN-FKGkjpHv9GIQ-z8YwGyQtriw6CgT48rae_ojMDXDrF-DaxcsOuHT6dpexeG_iEXTeX0hr7H_u4DsIMIS4kcntJMM-aJahBrW34V6SWyA7yU0kKgoZ3XMj5Ih3KvWIf8Koo6Tfh8xDpMoyUzV3M2_iF0BkeybF06_mFEt5NY4fFriqjG3jQZ4f9IsEfN0zMX2Nt7agH6OjwJjlkYDa4gVvTmo65wQSR1ZS6taOqZQ",
    heightClass: "h-[470px]",
    spanClass: "lg:col-span-2 lg:row-span-2",
    dateAdded: "2023-10-01"
  },
  {
    id: 2,
    title: "Echoes of Silence",
    medium: "Pencil",
    type: "Free",
    price: 0,
    desc: "Fine pen study in grayscale",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRSd0TkXSqjmwLSJZu2j-vvIMZrRE9XnnsaJL2IahGlm-Co3scyaRbXUmf2_AFUJriIYatktT79zgSiHsuh4J8-xKjK9H6UeWUwFRjmyLByxnTcBpbQRpITBOY5y_EkxSpD9q9Zv07_-2rjzGZ-66C3a2ScLIx_Wa_xT5mXH1S0cXXKXt467rv3W5EgKR8cQEGtnBFSzS4xH1pJtE7nG5RQ1GSja8tUE9PvWkRN_sloNh9qCqhBc0cjBJs-tuespFktLej2fv2SLU",
    heightClass: "h-[520px]",
    spanClass: "lg:row-span-2",
    dateAdded: "2023-11-15"
  },
  {
    id: 3,
    title: "Cyber Dreams",
    medium: "Digital",
    type: "Premium",
    price: 25,
    desc: "Neon geometric composition",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8lkTR6Dan2BdRptTlQ_MwEd4hXMVA8k1A5mYFfsX03vz1O22z24J0h3G84Tf4jCeq5PomjWniNo5tH6epjzFmXdk9DttXRIScqVcO36fB32jHpMTvqnIdHm7vSE8q9FIHpx2n4fdSoa4oYvneOMUmod3m2Zkqtr9Q8v5hwdK39S-REAOZifR1N4CQBaP0MDVEoWZnlKlJbe197BRYmg-r-eQ19-sBv1LLCUW5_VpoUe6s8H_YTyGfUbHK2YhmfUsytjiEdB2hjQ",
    heightClass: "h-[320px]",
    spanClass: "lg:row-span-2",
    dateAdded: "2023-09-20"
  },
  {
    id: 4,
    title: "Neon Pulse",
    medium: "Digital",
    type: "Premium",
    price: 30,
    desc: "Vibrant cyber portrait",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAocE4mwe06l1ZhpL1Rwww2-5ltOjZOWsSWj57aP1b5Dglq53UkGF4QJpjN4ZxrtI7du-P4G_ZQ4taTJKQecr_n2zUDHx8CXAwc-u15nstjbCqIbDlhkpr7M8YaBBrzUPBYvzXhUanhtETebxX0n-tXhC5e_b94og9p2J-jC4E0fIfz08BRXbSUUUMtkZkeFrdeIYY7zX2MIqrcpsyEEpq4r67frF9LmuuTR-xaREG7qcNPf-HaILRv2O2KHvEwieWnXynVG3-SFhI",
    heightClass: "h-[300px]",
    spanClass: "lg:col-span-2 lg:row-span-1",
    dateAdded: "2024-01-05"
  },
  {
    id: 5,
    title: "Whispering Ink",
    medium: "Pen",
    type: "Free",
    price: 0,
    desc: "Expressive ink textures",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1b12c2HLJ061S6sCC52swmAFL2f2vTX5x2cpRtgvGYwB9QBDYukJx-1PUD17GG7RnpUe4YrvXCKhKjoZh1G-4uzKkLG0jF9dtDPyqNNEiUkGqyBTL2Lg-zMRy4RuFpeTJqrXGCHtsMhYYWn-f_1tOa1swrKicvp-_Wu_JY88QSCvmsz-0zKwCpo58JbkhpEc28K-kn5wwbIzurpJpSlcDe3t3LcCDjE8OBTxKJFZOYqx4B9SWow4yy8_HbOdMR_GMtR6wHEvkZb0",
    heightClass: "h-[260px]",
    spanClass: "",
    dateAdded: "2023-12-10"
  },
  {
    id: 6,
    title: "Primal Flow",
    medium: "Acrylic",
    type: "Premium",
    price: 50,
    desc: "Fluid acrylic motion",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUwMRRWdH2ATzd_5m476k5FchnPAYZ15c19jT89EM8bnf0s3tI_H3Vm_Gq-K1SnVQW-_UN6jPTBrrnxSK9CcV8Nrlc1tPVIG79Co-gebwAe5nZQTiHWysH5S_h_t6ou4a13BwDFdlMlgymh6wjMyuixlFwft5ylhtpzu0k864a2hRUVuodlCJKx6w8MyioInLjy-sKu_HHwaWWgQlzYaN3uQBYLPQepVsehD2oExNKAjLTFLqG9VGTc0h4fi51MS1qhiUiM6llQow",
    heightClass: "h-[260px]",
    spanClass: "col-span-1 sm:col-span-2 lg:col-span-2",
    dateAdded: "2023-08-14"
  }
];

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadFilter, setDownloadFilter] = useState("All Assets");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleAction = async (artwork) => {
    if (artwork.type === 'Free') {
      try {
        const response = await fetch(artwork.image);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${artwork.title.replace(/\s+/g, '_').toLowerCase()}.jpg`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading image: ", error);
        window.open(artwork.image, '_blank');
      }
    } else {
      navigate('/checkout', { state: { artwork } });
    }
  };

  const filteredAndSortedArtworks = useMemo(() => {
    let result = [...artworksData];

    // Search
    if (searchQuery) {
      result = result.filter(art => art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.desc.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Medium Filter
    if (selectedFilter !== "All") {
      result = result.filter(art => art.medium === selectedFilter);
    }

    // Download/Access Type Filter
    if (downloadFilter !== "All Assets") {
      result = result.filter(art => art.type === downloadFilter);
    }

    return result;
  }, [searchQuery, selectedFilter, downloadFilter]);

  return (
    <div className="layout-container flex flex-col min-h-screen bg-background-dark text-slate-100 font-display">
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-10">
        {/* Hero */}
        <section className="mb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Explore the <span className="text-primary">Masterpieces</span></h1>
            <p className="text-slate-400 max-w-lg">Discover curated digital and traditional artworks from the world's most innovative contemporary artists. Download free and premium assets.</p>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-10 flex flex-col xl:flex-row gap-4 xl:items-center justify-between">
          {/* Search */}
          <div className="w-full xl:w-auto xl:max-w-xs shrink-0">
            <div className="relative rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-1.5">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                className="w-full pl-10 pr-3 py-1.5 bg-transparent text-slate-100 outline-none placeholder:text-slate-500 text-sm" 
                placeholder="Search artworks..." 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center overflow-x-auto xl:overflow-visible pb-2 md:pb-0">
            <div className="inline-flex rounded-full bg-slate-800/70 border border-slate-600 p-1 backdrop-blur-md shadow-inner whitespace-nowrap shrink-0">
              {[
                { label: "All", id: "All" },
                { label: "Pencil", id: "Pencil" },
                { label: "Acrylic", id: "Acrylic" },
                { label: "Digital", id: "Digital" },
                { label: "Pen", id: "Pen" },
              ].map((item) => {
                const active = selectedFilter === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedFilter(item.id)}
                    className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                      active
                        ? "bg-primary text-slate-900 shadow-lg shadow-primary/30"
                        : "bg-transparent text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="inline-flex rounded-full bg-slate-800/70 border border-slate-600 p-1 backdrop-blur-md shadow-inner shrink-0">
               {[
                { label: "All Assets", id: "All Assets" },
                { label: "Free", id: "Free" },
                { label: "Premium", id: "Premium" },
              ].map((item) => {
                const active = downloadFilter === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setDownloadFilter(item.id)}
                    className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                      active
                        ? "bg-white text-slate-900 shadow-lg"
                        : "bg-transparent text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Art Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 grid-flow-dense auto-rows-fr">
          {filteredAndSortedArtworks.map((art) => (
            <div 
              key={art.id} 
              onClick={() => setSelectedArtwork(art)}
              className={`group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl shadow-black/20 cursor-pointer ${art.spanClass}`}
            >
              <img src={art.image} alt={art.title} className={`${art.heightClass} w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-60`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100"></div>
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="inline-flex rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-900 shadow-md">
                  {art.type}
                </span>
                <span className="inline-flex rounded-full bg-slate-800/80 border border-slate-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-200 backdrop-blur-md">
                  {art.medium}
                </span>
              </div>

              <div className="absolute top-4 right-4 text-right">
                {art.type === 'Premium' ? (
                  <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-600">
                    <span className="text-white font-bold text-sm">${art.price.toFixed(2)}</span>
                  </div>
                ) : (
                  <div className="bg-emerald-500/20 text-emerald-400 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30">
                    <span className="font-bold text-sm">FREE</span>
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{art.title}</h3>
                  <p className="text-xs text-slate-300 mt-1.5">{art.desc}</p>
                </div>
                
                {/* Download/Buy Actions on Hover */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs font-medium text-slate-300">
                    {art.type === 'Premium' ? 'Purchase to unlock hi-res' : 'Download available'}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction(art);
                    }}
                    className="flex items-center justify-center size-10 rounded-full bg-white text-slate-900 hover:bg-primary hover:text-slate-900 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {art.type === 'Premium' ? 'shopping_bag' : 'download'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredAndSortedArtworks.length === 0 && (
             <div className="col-span-full py-20 text-center text-slate-500">
               <span className="material-symbols-outlined text-4xl mb-4 opacity-50">search_off</span>
               <h3 className="text-lg font-semibold text-slate-300 mb-2">No artworks found</h3>
               <p>Try adjusting your search or filters to find what you're looking for.</p>
             </div>
          )}
        </div>

        {/* Artwork Modal */}
        {selectedArtwork && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedArtwork(null)}>
            <div 
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="w-full md:w-3/5 md:h-full bg-black flex items-center justify-center overflow-hidden h-[40vh] md:h-auto">
                <img src={selectedArtwork.image} alt={selectedArtwork.title} className="w-full h-full object-contain" />
              </div>

              <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                    {selectedArtwork.type}
                  </span>
                  <span className="inline-flex rounded-full bg-slate-800 border border-slate-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">
                    {selectedArtwork.medium}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{selectedArtwork.title}</h2>
                <p className="text-slate-400 mb-8">{selectedArtwork.desc}</p>
                
                <div className="mt-auto pt-6 border-t border-slate-800">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Price</p>
                      {selectedArtwork.type === 'Premium' ? (
                        <p className="text-3xl font-black text-white">${selectedArtwork.price.toFixed(2)}</p>
                      ) : (
                        <p className="text-3xl font-black text-emerald-400">FREE</p>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleAction(selectedArtwork)}
                    className="w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all bg-primary text-slate-900 hover:bg-white text-sm shadow-xl shadow-primary/20"
                  >
                    <span className="material-symbols-outlined">
                      {selectedArtwork.type === 'Premium' ? 'shopping_cart_checkout' : 'download'}
                    </span>
                    {selectedArtwork.type === 'Premium' ? 'Purchase to Download' : 'Download Now'}
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

export default Gallery;
