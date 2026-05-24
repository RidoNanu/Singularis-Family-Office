import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../../constants/navigation';
import { cn } from '../../utils/cn';

export function AppHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      // Transition after scrolling down 50px
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full overflow-hidden">
      {/* Sliding white background panel (reveals/slides from top on scroll) */}
      <div
        className={cn(
          'absolute inset-0 z-0 border-b transition-all duration-700 ease-out bg-white border-[#1E3754]/8 shadow-[0_4px_30px_rgba(0,0,0,0.01)]',
          scrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        )}
      />

      {/* Header Content Wrapper */}
      <div className="relative z-10 mx-auto flex max-w-[84rem] items-center justify-between px-6 py-5 sm:px-8 lg:px-12 lg:py-5">
        <Link
          to="/"
          className={cn(
            'text-[0.72rem] font-semibold uppercase tracking-[0.4em] transition-colors duration-500 hover:opacity-70',
            scrolled ? 'text-[#1E3754]' : 'text-white'
          )}
        >
          Singularis Family Office
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-[0.72rem] font-semibold uppercase tracking-[0.28em] transition-colors duration-500',
                scrolled
                  ? 'text-[#1E3754]/70 hover:text-[#1E3754]'
                  : 'text-white/70 hover:text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;