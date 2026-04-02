import React from "react";

const Contact = () => {
  // TODO: Add state for form, validation, etc.
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-dark text-slate-100 font-display antialiased">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tighter text-white">ART L</h1>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Gallery</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Downloads</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Order</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">About</a>
            <a className="text-sm font-semibold text-primary" href="#">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest uppercase text-xs">Get in Touch</span>
                <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-none">
                  Let's Start a <br /><span className="text-primary">Conversation.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">
                  Whether you're an artist looking for representation or a collector seeking a new masterpiece, our curators are here to assist.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase">Email Us</p>
                    <a className="text-xl font-medium hover:text-primary transition-colors" href="mailto:hello@artl-gallery.com">hello@artl-gallery.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase">Visit Our Gallery</p>
                    <p className="text-xl font-medium">124 Art District, Manhattan<br />New York, NY 10011</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <p className="text-sm font-bold text-slate-500 uppercase mb-6 tracking-widest">Connect With Us</p>
                <div className="flex gap-4">
                  <a className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-background-dark transition-all" href="#">
                    {/* Facebook Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                  </a>
                  <a className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-background-dark transition-all" href="#">
                    {/* Instagram Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </a>
                  <a className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-background-dark transition-all" href="#">
                    {/* LinkedIn Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 15.31c0 3.03-2.34 5.44-5.34 5.44a5.32 5.32 0 0 1-5.06-3.72h-.05c-.3 1.05-.72 1.76-1.33 2.16-.62.41-1.39.61-2.31.61-1.4 0-2.48-.41-3.23-1.22-.76-.81-1.13-1.95-1.13-3.41 0-1.76.54-3.24 1.63-4.44C6.27 9.53 7.74 8.93 9.61 8.93c.83 0 1.49.12 1.99.37.5.25.86.63 1.08 1.15V5.28h3.98v10.03c0 1.01.62 1.51 1.86 1.51.93 0 1.39-.4 1.39-1.21V9.28h2.09V15.31zm-10.43.32c0-.79-.53-1.18-1.58-1.18-.5 0-.9.13-1.19.4-.29.26-.43.6-.43 1.02 0 .42.12.75.36.98.24.23.57.35 1 .35.53 0 .93-.15 1.22-.44.29-.29.43-.68.43-1.13h.19zM22 6.55h-2.09V3.28h-3.98v3.27h-2.1v3.1h2.1v6.03c0 1.4.37 2.48 1.12 3.23.75.75 1.83 1.13 3.23 1.13.92 0 1.69-.2 2.31-.61.61-.4 1.03-1.11 1.33-2.16h.05a5.32 5.32 0 0 1 5.06 3.72c3 0 5.34-2.41 5.34-5.44V9.65H22V6.55z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Right Side: Contact Form */}
            <div className="bg-primary/5 p-8 lg:p-12 rounded-xl border border-primary/20">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400">Your Full Name</label>
                  <input className="w-full bg-background-dark/50 border-primary/20 rounded-lg focus:ring-primary focus:border-primary py-4 px-6 text-white placeholder-slate-600 transition-all" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400">Email Address</label>
                  <input className="w-full bg-background-dark/50 border-primary/20 rounded-lg focus:ring-primary focus:border-primary py-4 px-6 text-white placeholder-slate-600 transition-all" placeholder="john@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400">Message</label>
                  <textarea className="w-full bg-background-dark/50 border-primary/20 rounded-lg focus:ring-primary focus:border-primary py-4 px-6 text-white placeholder-slate-600 transition-all" placeholder="Tell us how we can help you..." rows="5"></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-black py-5 rounded-lg text-lg uppercase tracking-widest transition-all shadow-lg shadow-primary/20" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section className="w-full h-96 relative mt-12 grayscale brightness-50 contrast-125 border-y border-primary/10">
          <div className="absolute inset-0 bg-background-dark/40 z-10 pointer-events-none"></div>
          <div className="w-full h-full bg-slate-800" data-location="New York City">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDLtKohJih1gFSXB3ReXNawkY7DhrKouWNxOvY6uZOeCimBXIbKuvIBnxEwY-tCMfKpMfOEh0mnYoV1WUKkSYtxzjUCinisSVm4FjzQs4DIw_q_VUn3jwSNQXaZccwyezNM-b4V8olUkNpRCvAq4fpkLhlC6IvCQA_UQ_IByRSz5iH5xiNxm_Ky9mgxKjp4rOp45M2m-YmS5J6DYdHTzeFDA4g41qhQhB7t2Tqwo9qpJuNpAYpWJ78kab-LS9YG3G5nsGJhe6Fde0" alt="Stylized dark map of Manhattan art district" />
          </div>
          {/* Location Overlay Card */}
          <div className="absolute bottom-10 left-6 lg:left-20 z-20 bg-background-dark/90 p-6 rounded-lg border border-primary/30 backdrop-blur-md max-w-sm">
            <h4 className="text-primary font-bold mb-2">Main Gallery</h4>
            <p className="text-sm text-slate-300">Mon - Fri: 10:00 AM - 8:00 PM</p>
            <p className="text-sm text-slate-300 italic">Sat - Sun: 11:00 AM - 6:00 PM</p>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-background-light dark:bg-background-dark border-t border-primary/10 py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="text-primary/50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tighter text-slate-500">ART L</span>
          </div>
          <p className="text-sm text-slate-500">© 2024 ART L Gallery. All architectural rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors" href="#">Terms</a>
            <a className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
