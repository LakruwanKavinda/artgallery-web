import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Order from './pages/Order';
import Contact from './pages/Contact';
import About from './pages/About';
import Checkout from './pages/Checkout';
import logo1 from './assets/logo1.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Order', path: '/order' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background-dark text-slate-100">

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-primary/10 bg-background-dark/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6 lg:px-8">
            
            {/* Logo */}
            <div className="flex items-center gap-2 text-primary">
            <div className="h-8 w-8 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
              <img src={logo1} alt="ART L logo" className="h-full w-full object-cover scale-[1.3]" />
            </div>
              <div className="text-lg font-extrabold">ART L</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 text-sm font-semibold">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 transition ${
                      isActive
                        ? 'bg-primary text-background-dark font-bold'
                        : 'text-slate-300 hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-primary p-2 focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-primary/10 bg-background-dark/95 backdrop-blur-md px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 transition text-center font-semibold ${
                      isActive
                        ? 'bg-primary text-background-dark font-bold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}
        </header>

        {/* Pages */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/order" element={<Order />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;