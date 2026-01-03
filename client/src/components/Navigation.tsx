import { Link, useLocation } from 'wouter';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/booking', label: 'Contact' },
    { path: '/image-generator', label: 'AI Generator' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-film-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-display font-bold text-gradient">
              REGASH
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`text-sm font-medium transition-colors duration-300 ${
                    location === link.path
                      ? 'text-film-accent'
                      : 'text-white hover:text-film-accent'
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-film-darker"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <a
                    className={`block text-lg font-medium transition-colors duration-300 ${
                      location === link.path
                        ? 'text-film-accent'
                        : 'text-white hover:text-film-accent'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
