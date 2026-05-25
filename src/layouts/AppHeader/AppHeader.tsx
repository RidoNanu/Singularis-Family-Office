import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '../../constants/navigation';
import { cn } from '../../utils/cn';
import logoImage from '../../assets/imagery/trans_logo.png';

export function AppHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();


  const handleLinkClick = (path: string) => {
    setMobileOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const easing = [0.22, 1, 0.36, 1] as const;

  const menuOverlayVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.4,
        ease: easing,
      },
    },
  };

  const menuListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full overflow-hidden">
      {/* Sliding white background panel (always visible on mobile, reveals/slides from top on desktop) */}
      <div
        className={cn(
          'absolute inset-0 z-0 border-b transition-all duration-700 ease-out bg-white border-[#1E3754]/8 shadow-[0_4px_30px_rgba(0,0,0,0.01)]',
          scrolled || mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100 md:-translate-y-full md:opacity-0'
        )}
      />

      {/* Header Content Wrapper */}
      <div className="relative z-30 mx-auto flex max-w-[84rem] items-center justify-between px-6 py-5 sm:px-8 lg:px-12 lg:py-5">
        <Link
          to="/"
          onClick={() => handleLinkClick('/')}
          aria-label="Singularis Family Office home"
          className="transition-opacity duration-500 hover:opacity-70 flex items-center h-10 w-36 relative overflow-visible"
        >
          <img
            src={logoImage}
            alt="Singularis Family Office Logo"
            className={cn(
              "absolute left-[-28px] sm:left-[-36px] top-1/2 -translate-y-1/2 h-44 sm:h-52 w-auto max-w-none object-contain transition-all duration-500",
              scrolled || mobileOpen ? "" : "md:brightness-0 md:invert"
            )}
          />
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={cn(
            'relative z-30 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 md:hidden',
            'border-[#1E3754]/12 bg-white/90 text-[#1E3754]'
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
              onClick={() => handleLinkClick(item.path)}
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

      {/* Fullscreen Premium Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-20 md:hidden h-screen w-screen bg-[#FDFBF7] flex flex-col justify-between px-8 pb-12 pt-[7.5rem]"
          >
            <button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-transparent cursor-default"
            />

            <motion.nav
              variants={menuListVariants}
              aria-label="Mobile primary"
              className="relative z-10 flex flex-col gap-6 text-left mt-6"
            >
              {navigationItems.map((item) => (
                <motion.div key={item.path} variants={menuItemVariants}>
                  <Link
                    to={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className="group flex items-baseline py-2 border-b border-[#1E3754]/5"
                  >
                    <span className="text-[1.75rem] font-light uppercase tracking-[0.08em] text-[#1E3754] transition-colors duration-300 group-hover:text-[#1E3754]/60">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default AppHeader;
