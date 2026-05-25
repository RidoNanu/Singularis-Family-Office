import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../../constants/navigation';
import { cn } from '../../utils/cn';

export function AppHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      // Transition after scrolling down 50px
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    handleScroll();
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full overflow-hidden">
      {/* Sliding white background panel (reveals/slides from top on scroll) */}
      <div
        className={cn(
          'absolute inset-0 z-0 border-b transition-all duration-700 ease-out bg-white border-[#1E3754]/8 shadow-[0_4px_30px_rgba(0,0,0,0.01)]',
          scrolled || mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        )}
      />

      {/* Header Content Wrapper */}
      <div className="relative z-10 mx-auto flex max-w-[84rem] items-center justify-between px-6 py-5 sm:px-8 lg:px-12 lg:py-5">
        <Link
          to="/"
          aria-label="Singularis Family Office home"
          className={cn(
            'flex flex-col items-start leading-none transition-opacity duration-500 hover:opacity-70',
            scrolled || mobileOpen ? 'text-[#1E3754]' : 'text-white'
          )}
        >
          <span className="text-[1.12rem] font-light uppercase tracking-[0.26em] sm:text-[1.24rem]">
            Singularis
          </span>
          <span className="mt-1 text-[0.46rem] font-semibold uppercase tracking-[0.42em] opacity-80 sm:text-[0.52rem]">
            Family Office
          </span>
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={cn(
            'relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 md:hidden',
            scrolled || mobileOpen
              ? 'border-[#1E3754]/12 bg-white/90 text-[#1E3754]'
              : 'border-white/20 bg-white/10 text-white'
          )}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <span
            className={cn(
              'absolute h-px w-5 bg-current transition-transform duration-300',
              mobileOpen ? 'translate-y-0 rotate-45' : '-translate-y-[5px]'
            )}
          />
          <span
            className={cn(
              'absolute h-px w-5 bg-current transition-opacity duration-300',
              mobileOpen ? 'opacity-0' : 'opacity-100'
            )}
          />
          <span
            className={cn(
              'absolute h-px w-5 bg-current transition-transform duration-300',
              mobileOpen ? 'translate-y-0 -rotate-45' : 'translate-y-[5px]'
            )}
          />
        </button>

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

      <div
        className={cn(
          'fixed inset-0 z-20 md:hidden transition-opacity duration-300',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-[#1E3754]/18 backdrop-blur-[2px]"
        />

        <div className="absolute right-6 top-[5.25rem] w-[min(17rem,calc(100vw-3rem))] rounded-[1.4rem] border border-[#1E3754]/10 bg-white/96 p-3 shadow-[0_22px_60px_rgba(30,55,84,0.16)] backdrop-blur-md">
          <nav aria-label="Mobile primary" className="flex flex-col">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="rounded-[1rem] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#1E3754]/78 transition-colors duration-300 hover:bg-[#1E3754]/[0.05] hover:text-[#1E3754]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
