import { Mail } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-film-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">
              REGASH
            </h3>
            <p className="text-gray-400 text-sm">
              Palestinian filmmaker dedicated to authentic storytelling that amplifies
              marginalized voices through cinema.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio">
                  <a className="text-gray-400 hover:text-film-accent transition-colors">
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-film-accent transition-colors">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-film-accent transition-colors">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <a className="text-gray-400 hover:text-film-accent transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail size={16} />
              <a
                href="mailto:Hello@regash.com"
                className="hover:text-film-accent transition-colors"
              >
                Hello@regash.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Regash (Alaa Aliabdallah). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
