import React from "react";

const Gallery = () => {
  return (
    <div className="layout-container flex flex-col min-h-screen bg-background-dark text-slate-100 font-display">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/20 px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">ART L</h2>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-10">

        {/* Filters */}
        <div className="flex gap-3 mb-10">
          <button className="px-6 py-2 rounded-full bg-primary text-background-dark font-bold">All</button>
          <button className="px-6 py-2 rounded-full bg-white/10">Free</button>
          <button className="px-6 py-2 rounded-full bg-white/10">Premium</button>
        </div>

        {/* 🔥 UPDATED GALLERY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          {[
            {
              title: "Midnight Solitude",
              type: "Acrylic",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADuBzPYH5OfXaOw-bY0wlByGZEmroLF3OQCN-FKGkjpHv9GIQ-z8YwGyQtriw6CgT48rae_ojMDXDrF-DaxcsOuHT6dpexeG_iEXTeX0hr7H_u4DsIMIS4kcntJMM-aJahBrW34V6SWyA7yU0kKgoZ3XMj5Ih3KvWIf8Koo6Tfh8xDpMoyUzV3M2_iF0BkeybF06_mFEt5NY4fFriqjG3jQZ4f9IsEfN0zMX2Nt7agH6OjwJjlkYDa4gVvTmo65wQSR1ZS6taOqZQ",
            },
            {
              title: "Echoes of Silence",
              type: "Pencil",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRSd0TkXSqjmwLSJZu2j-vvIMZrRE9XnnsaJL2IahGlm-Co3scyaRbXUmf2_AFUJriIYatktT79zgSiHsuh4J8-xKjK9H6UeWUwFRjmyLByxnTcBpbQRpITBOY5y_EkxSpD9q9Zv07_-2rjzGZ-66C3a2ScLIx_Wa_xT5mXH1S0cXXKXt467rv3W5EgKR8cQEGtnBFSzS4xH1pJtE7nG5RQ1GSja8tUE9PvWkRN_sloNh9qCqhBc0cjBJs-tuespFktLej2fv2SLU",
            },
            {
              title: "Whispering Ink",
              type: "Pen",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1b12c2HLJ061S6sCC52swmAFL2f2vTX5x2cpRtgvGYwB9QBDYukJx-1PUD17GG7RnpUe4YrvXCKhKjoZh1G-4uzKkLG0jF9dtDPyqNNEiUkGqyBTL2Lg-zMRy4RuFpeTJqrXGCHtsMhYYWn-f_1tOa1swrKicvp-_Wu_JY88QSCvmsz-0zKwCpo58JbkhpEc28K-kn5wwbIzurpJpSlcDe3t3LcCDjE8OBTxKJFZOYqx4B9SWow4yy8_HbOdMR_GMtR6wHEvkZb0",
            },
            {
              title: "Cyber Dreams",
              type: "Digital",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8lkTR6Dan2BdRptTlQ_MwEd4hXMVA8k1A5mYFfsX03vz1O22z24J0h3G84Tf4jCeq5PomjWniNo5tH6epjzFmXdk9DttXRIScqVcO36fB32jHpMTvqnIdHm7vSE8q9FIHpx2n4fdSoa4oYvneOMUmod3m2Zkqtr9Q8v5hwdK39S-REAOZifR1N4CQBaP0MDVEoWZnlKlJbe197BRYmg-r-eQ19-sBv1LLCUW5_VpoUe6s8H_YTyGfUbHK2YhmfUsytjiEdB2hjQ",
            },
            {
              title: "Neon Pulse",
              type: "Digital",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAocE4mwe06l1ZhpL1Rwww2-5ltOjZOWsSWj57aP1b5Dglq53UkGF4QJpjN4ZxrtI7du-P4G_ZQ4taTJKQecr_n2zUDHx8CXAwc-u15nstjbCqIbDlhkpr7M8YaBBrzUPBYvzXhUanhtETebxX0n-tXhC5e_b94og9p2J-jC4E0fIfz08BRXbSUUUMtkZkeFrdeIYY7zX2MIqrcpsyEEpq4r67frF9LmuuTR-xaREG7qcNPf-HaILRv2O2KHvEwieWnXynVG3-SFhI",
            },
            {
              title: "Primal Flow",
              type: "Acrylic",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUwMRRWdH2ATzd_5m476k5FchnPAYZ15c19jT89EM8bnf0s3tI_H3Vm_Gq-K1SnVQW-_UN6jPTBrrnxSK9CcV8Nrlc1tPVIG79Co-gebwAe5nZQTiHWysH5S_h_t6ou4a13BwDFdlMlgymh6wjMyuixlFwft5ylhtpzu0k864a2hRUVuodlCJKx6w8MyioInLjy-sKu_HHwaWWgQlzYaN3uQBYLPQepVsehD2oExNKAjLTFLqG9VGTc0h4fi51MS1qhiUiM6llQow",
            },
          ].map((art, index) => (
            <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-xl border border-white/10">

              <img
                src={art.img}
                alt={art.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <p className="text-xs text-primary font-bold uppercase">{art.type}</p>
                <h3 className="text-lg font-bold">{art.title}</h3>
              </div>

            </div>
          ))}

        </div>
      </main>
    </div>
  );
};

export default Gallery;