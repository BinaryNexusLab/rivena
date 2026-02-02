import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-ivory border-b border-divider sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigation('home')}
            className="font-serif text-3xl text-charcoal tracking-wider hover:text-champagne transition-colors"
          >
            RIVENA
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm tracking-wider uppercase transition-colors ${
                currentPage === 'home' ? 'text-champagne' : 'text-charcoal hover:text-champagne'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('beauty')}
              className={`text-sm tracking-wider uppercase transition-colors ${
                currentPage === 'beauty' ? 'text-champagne' : 'text-charcoal hover:text-champagne'
              }`}
            >
              Luxury Beauty
            </button>
            <button
              onClick={() => onNavigate('home-kitchen')}
              className={`text-sm tracking-wider uppercase transition-colors ${
                currentPage === 'home-kitchen' ? 'text-champagne' : 'text-charcoal hover:text-champagne'
              }`}
            >
              Home & Kitchen
            </button>
            <button
              onClick={() => onNavigate('fashion')}
              className={`text-sm tracking-wider uppercase transition-colors ${
                currentPage === 'fashion' ? 'text-champagne' : 'text-charcoal hover:text-champagne'
              }`}
            >
              Fashion
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <ShoppingBag className="text-charcoal" size={24} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-charcoal"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4">
            <button
              onClick={() => handleNavigation('home')}
              className={`text-sm tracking-wider uppercase transition-colors text-left ${
                currentPage === 'home' ? 'text-champagne' : 'text-charcoal hover:text-champagne'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('beauty')}
              className={`text-sm tracking-wider uppercase transition-colors text-left ${
                currentPage === 'beauty' ? 'text-champagne' : 'text-charcoal hover:text-champagne'
              }`}
            >
              Luxury Beauty
            </button>
            <button
              onClick={() => handleNavigation('home-kitchen')}
              className={`text-sm tracking-wider uppercase transition-colors text-left ${
                currentPage === 'home-kitchen' ? 'text-champagne' : 'text-charcoal hover:text-champagne'
              }`}
            >
              Home & Kitchen
            </button>
            <button
              onClick={() => handleNavigation('fashion')}
              className={`text-sm tracking-wider uppercase transition-colors text-left ${
                currentPage === 'fashion' ? 'text-champagne' : 'text-charcoal hover:text-champagne'
              }`}
            >
              Fashion
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
