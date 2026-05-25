import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import heroImage from '../../assets/imagery/i3.png';

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Desktop responsive state
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll tracking on the outer track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Desktop image translation: slides out horizontally to the right on scroll
  const rawImageX = useTransform(scrollYProgress, [0, 0.20, 0.95, 1], [0, 0, 100, 100]);
  const smoothImageX = useSpring(rawImageX, { stiffness: 95, damping: 26 });
  const imageX = useTransform(smoothImageX, (v) => (isDesktop ? `${v}%` : '0%'));

  // Desktop reveal layer animation values: fades in and rises slightly
  const rawRevealOpacity = useTransform(scrollYProgress, [0, 0.25, 0.90, 1], [0, 0, 1, 1]);
  const revealOpacity = useSpring(rawRevealOpacity, { stiffness: 95, damping: 26 });

  const rawRevealY = useTransform(scrollYProgress, [0, 0.25, 0.90, 1], [30, 30, 0, 0]);
  const revealY = useSpring(rawRevealY, { stiffness: 95, damping: 26 });

  // Mobile image translation: slides out horizontally with spring smoothing
  const rawMobileImageX = useTransform(scrollYProgress, [0, 0.20, 0.95, 1], [0, 0, 110, 110]);
  const smoothMobileImageX = useSpring(rawMobileImageX, { stiffness: 95, damping: 26 });
  const mobileImageX = useTransform(smoothMobileImageX, (v) => `${v}%`);

  // Mobile reveal layer animation values
  const rawMobileRevealOpacity = useTransform(scrollYProgress, [0, 0.25, 0.90, 1], [0, 0, 1, 1]);
  const mobileRevealOpacity = useSpring(rawMobileRevealOpacity, { stiffness: 95, damping: 26 });

  const rawMobileRevealY = useTransform(scrollYProgress, [0, 0.25, 0.90, 1], [30, 30, 0, 0]);
  const mobileRevealY = useSpring(rawMobileRevealY, { stiffness: 95, damping: 26 });

  const easing = [0.22, 1, 0.36, 1] as const;

  const lineVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: (i: number = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easing,
        delay: i * 0.1,
      },
    }),
  };

  const paragraphVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easing,
        delay: 0.3,
      },
    },
  };

  const bottomMetaVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: easing,
        delay: 0.45,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-heading"
      className="relative w-full h-[210vh] sm:h-[220vh] lg:h-[300vh] bg-white"
    >
      {/* Mobile sticky cover-reveal (re-structured and optimized for buttery 60fps scrolling) */}
      <div className="relative h-full w-full lg:hidden">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute inset-x-0 top-0 h-px bg-[#1E3754]/10" />
            <div className="absolute -top-24 right-[-8rem] h-[22rem] w-[22rem] rounded-full bg-[#1E3754]/[0.04] blur-3xl" />
            <div className="absolute bottom-[-10rem] left-[-8rem] h-[20rem] w-[20rem] rounded-full bg-[#1E3754]/[0.03] blur-3xl" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            style={reduceMotion ? { opacity: 1, y: 0 } : { opacity: mobileRevealOpacity, y: mobileRevealY }}
            className="absolute inset-0 z-10 flex flex-col justify-between bg-white px-6 py-28 text-center text-[#1E3754]"
          >
            <motion.div
              variants={lineVariants}
              custom={0}
              className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40 mx-auto"
            >
              Institutional Presence
            </motion.div>

            <div className="my-auto py-10 flex flex-col items-center">
              <h1 className="text-[#1E3754] text-center font-light tracking-[-0.05em] text-[clamp(3.2rem,13vw,5.5rem)] leading-[0.9] select-none flex flex-col items-center">
                <span className="overflow-hidden inline-block py-2">
                  <motion.span variants={lineVariants} custom={1} className="inline-block">
                    Singularis
                  </motion.span>
                </span>
                <span className="overflow-hidden inline-block py-2">
                  <motion.span variants={lineVariants} custom={2} className="inline-block font-extralight opacity-90">
                    Family Office
                  </motion.span>
                </span>
              </h1>

              <motion.div
                variants={lineVariants}
                custom={3}
                className="my-9 h-px w-24 bg-[#1E3754]/14"
              />

              <motion.p
                variants={paragraphVariants}
                className="max-w-[20rem] text-[0.92rem] font-light leading-[1.68] text-[#1E3754]/68 tracking-[0.01em] text-center"
              >
                A discreet institutional office structured for continuity, governance clarity, and long-horizon stewardship across generations.
              </motion.p>
            </div>

            <motion.div
              variants={bottomMetaVariants}
              className="flex justify-between items-center w-full max-w-[24rem] mx-auto text-[0.62rem] uppercase tracking-[0.25em] text-[#1E3754]/38 border-t border-[#1E3754]/8 pt-5"
            >
              <span>Stewardship Council</span>
              <span>Est. 2026</span>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ x: mobileImageX }}
            className="absolute inset-0 z-20 overflow-hidden bg-white"
          >
            <img
              src={heroImage}
              alt="Interior study"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>

      {/* Desktop sticky cover-reveal (completely untouched and preserved) */}
      <div className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen w-full lg:overflow-hidden bg-white flex-col justify-center">
        {/* Ambient background decoration */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-0 h-px bg-[#1E3754]/10" />
          <div className="absolute -top-24 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#1E3754]/[0.04] blur-3xl" />
          <div className="absolute bottom-[-10rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#1E3754]/[0.03] blur-3xl" />
        </div>

        {/* Layout container */}
        <div className="relative z-10 w-full h-full lg:block bg-white">

          {/* REVEAL LAYER (Revealed underneath the sliding image) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            style={reduceMotion ? { opacity: 1 } : { opacity: revealOpacity, y: revealY }}
            className="absolute inset-0 h-full w-full flex flex-col justify-between py-16 lg:py-24 xl:py-28 px-6 text-center text-[#1E3754] bg-white z-10"
          >
            {/* TOP: Refined Institutional Label */}
            <motion.div
              variants={lineVariants}
              custom={0}
              className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40 mx-auto"
            >
              Institutional Presence
            </motion.div>

            {/* MIDDLE: Monumental Centered Editorial Heading + Restrained Supporting Statement */}
            <div className="my-auto py-12 flex flex-col items-center">
              <h1 className="text-[#1E3754] text-center font-light tracking-[-0.05em] text-[clamp(4rem,9.5vw,8rem)] leading-[0.9] select-none flex flex-col items-center">
                <span className="overflow-hidden inline-block py-2">
                  <motion.span variants={lineVariants} custom={1} className="inline-block">
                    Singularis
                  </motion.span>
                </span>
                <span className="overflow-hidden inline-block py-2">
                  <motion.span variants={lineVariants} custom={2} className="inline-block font-extralight opacity-90">
                    Family Office
                  </motion.span>
                </span>
              </h1>

              <motion.div
                variants={lineVariants}
                custom={3}
                className="my-10 lg:my-12 h-px w-24 bg-[#1E3754]/14"
              />

              <motion.p
                variants={paragraphVariants}
                className="max-w-[20rem] text-[0.92rem] sm:text-[0.98rem] font-light leading-[1.65] text-[#1E3754]/68 tracking-[0.01em] text-center"
              >
                A discreet institutional office structured for continuity, governance clarity, and long-horizon stewardship across generations.
              </motion.p>
            </div>

            {/* BOTTOM: Minimal coordinates / metadata integrated into rhythm */}
            <motion.div
              variants={bottomMetaVariants}
              className="flex justify-between items-center w-full max-w-[28rem] mx-auto text-[0.66rem] uppercase tracking-[0.25em] text-[#1E3754]/38 border-t border-[#1E3754]/8 pt-5"
            >
              <span>Stewardship Council</span>
              <span>Est. 2026</span>
            </motion.div>
          </motion.div>

          {/* FULLSCREEN SLIDING IMAGE PANEL (Covers the reveal typography initially) */}
          <motion.div
            style={{ x: imageX }}
            className="absolute inset-0 h-full w-full z-20 overflow-hidden bg-white"
          >
            <img
              src={heroImage}
              alt="Interior study"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
