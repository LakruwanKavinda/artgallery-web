import React from "react";

const Home = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-slate-100">
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">filter_vintage</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tighter uppercase">Art L</h2>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Gallery</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Downloads</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Order</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">About</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-6 py-2 text-sm font-bold text-background-dark hover:brightness-110 transition-all">
              Login
            </button>
            <button className="md:hidden text-slate-100">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="absolute inset-0 glow-bg pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-8 z-10">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
                  Est. 2024
                </span>

                <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  Where Art <br />
                  <span className="text-primary">Comes Alive</span>
                </h1>

                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Experience the intersection of tradition and digital innovation. Discover curated masterpieces or commission your own personalized vision.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="rounded-xl bg-primary px-8 py-4 text-background-dark font-bold hover:scale-105 transition-transform">
                  Explore Gallery
                </button>
                <button className="rounded-xl bg-white/5 border border-white/10 px-8 py-4 text-white font-bold hover:bg-white/10 transition-colors">
                  Order Custom Art
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition duration-1000"></div>

              <div
                className="relative aspect-[4/5] rounded-2xl bg-cover bg-center overflow-hidden border border-white/10 shadow-2xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd7DOkZDNxHG4ssxjQ3mcs7_XnRKAqDM_OFjlgMKV1VaB5ywkCo79ehpIi7j-EuMdT9MvAZTenpZ17Qgg1cSd_YXlMcRDELxtWUafNVuZo-PLqaJmblhCWcS0twb3cN1S3jSnij79tROkojBDcs5WeGvCqzKhCeHSROL5qSQD2UVMiN7Ht4U1REneE2TZsoVzQu6UJH7ZZNeiY0nYfW9GEfS2N8v57xUTMqTq9t4fQ0n69P39h9qlmS1uYpjuYPeUNeYBXnpP6aQQ")',
                }}
              ></div>
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
              <a className="text-primary font-bold flex items-center gap-2 group" href="#">
                View All <span className="material-symbols-outlined group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                {
                  title: "Midnight Solitude",
                  type: "Acrylic on Canvas",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQoRt5sdoj9YxKVDl-7As11oKAS9cHlL-5ld5H7tCZrrzsEyL3KWPm2WqlmCr6qp8KekQU7nm35nn8tqB5bvgPJ0N5VN7GMlavuFZW9hwoMwSb8lMLyG90JL1lMuu4BBXPhYMudefrFS-2fPV7230TUZf4KJYg6QggY4m3aYFkN8PZp5ILpd6OA8I8DXdc8s8N4R0nJEiezFqFpYy75Kn1R2r9RVl6UjYFz0KUqsoElhlFqjyRTBx17vGTwnHUrbQV6n3yWphH9Ok",
                },
                {
                  title: "Golden Horizon",
                  type: "Digital Illustration",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-WL5S2oFW38lJs_LSjHjH0uBohS9IM42N3J0vlUARjc3E1A8x6tcuFzxUA1ZI8mfMXFzPS83nEOQDqjTfFWDPKMvRYtIlrehdbI0UAuP55gRlcT0kTDuceWHI3KVuOdF6-W6EPpiHFyig2HgIuVpYkekS79_uM83l97ZlMrffeaQI75XrXuJXG3Ct3H-sHrhHDS72xtUZ5urgCLBxDDEqFz3_Q_aS3gJF7DRtSgIQ7g684NtntMGCd-ZpgSAZ-6GTANq4-dCHm_g",
                },
                {
                  title: "Urban Echo",
                  type: "Pen & Ink",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhC9vwaim9jzYdrH_8T0KkexWCmdJCCkgJrEX92LGrFD5tDNNuP2fg75ZMZ3zYpKT31A0pVzmberLcXDAxhp7qCD67nPqOGkZ2l2cM0P8w3ppmji3kv5piWkkNGGl5E2mWdE5KWiUO8YL7VySGdyXVaXrpRZSIH3BYLKI9OTcDNGfKXAZlcTr3pchZAJaCEK8q-C5kHaE__zQvfpFFcm7SwlZYvho4RGH9FXDwF5yTrVlG_5iuC1lv4bxQMTv4RPuhC1tNrgEcBWU",
                },
                {
                  title: "Ethereal Bloom",
                  type: "Oil Painting",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe6vQxLdGCcd8EySREkbgnkOffG062zSKneperoy8_jwfVe0HXPNCt1zaqGYhxnDaYJLBZQ-RVpsNM-KgqVVJm7k7LsbGsWMaJhwKuzjSVBbMof7u6Mxl7IwMqsJOAzECnHFU-xwRmmDEMkPfpVxwg9boOvvjeMY88OhY4ogNpE8mL_1Y5MLB3J4ZGAv3DpPtsZ79ENiC0ht0qoSgFBRqb18dbhiADjupXrqPY6THRk5Ve3VV2ymQ188Skete3FroLENWIsy-RCxM",
                },
              ].map((art, index) => (
                <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-background-dark border border-white/5">
                  <img src={art.img} alt={art.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-lg font-bold text-white">{art.title}</h3>
                    <p className="text-primary text-sm">{art.type}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;