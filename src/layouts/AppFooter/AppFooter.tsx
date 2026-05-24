import { motion, useReducedMotion } from 'framer-motion';

export function AppFooter() {
  const reduceMotion = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1] as const;

  const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: easing,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const navItemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: (i: number = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: easing,
        delay: 0.3 + i * 0.08,
      },
    }),
  };

  return (
    <motion.footer
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={footerVariants}
      className="relative min-h-[75vh] bg-[#1E3754] text-[#F5F5F2] border-t border-white/10 flex flex-col justify-between overflow-hidden"
    >
      
      <div className="relative z-10 mx-auto max-w-[92rem] px-6 sm:px-8 lg:px-12 w-full pt-20 sm:pt-24 lg:pt-32 pb-6 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start w-full">
          
          {/* Left Side: Editorial Pillar (65% / lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full gap-8 max-w-[44rem]">
            <div>
              <motion.p
                variants={lineVariants}
                custom={0}
                className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#F5F5F2]/45"
              >
                SINGULARIS FAMILY OFFICE
              </motion.p>
              
              <h2 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-light leading-[1.35] tracking-[-0.04em] text-white mt-8 max-w-[34rem] lg:max-w-none flex flex-col">
                <span className="overflow-hidden inline-block py-1">
                  <motion.span variants={lineVariants} custom={1} className="inline-block">
                    A discreet institutional framework
                  </motion.span>
                </span>
                <span className="overflow-hidden inline-block py-1">
                  <motion.span variants={lineVariants} custom={2} className="inline-block">
                    for stewardship, continuity,
                  </motion.span>
                </span>
                <span className="overflow-hidden inline-block py-1">
                  <motion.span variants={lineVariants} custom={3} className="inline-block">
                    and long-horizon alignment.
                  </motion.span>
                </span>
              </h2>

              <motion.p
                variants={lineVariants}
                custom={4}
                className="mt-8 max-w-[28rem] text-[0.88rem] font-light leading-[1.7] text-[#F5F5F2]/60"
              >
                Singularis Family Office operates through measured governance, operational clarity, and institutional continuity across generations.
              </motion.p>
            </div>
          </div>
          
          {/* Right Side: Navigation Column (35% / lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-start lg:pl-12 w-full">
            <div className="space-y-6">
              <motion.h3
                variants={lineVariants}
                custom={5}
                className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#F5F5F2]/40"
              >
                Navigation
              </motion.h3>
              <ul className="space-y-4">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about-us' },
                  { label: 'Services', path: '/services' },
                  { label: 'Contact', path: '#contact' },
                ].map((link, idx) => (
                  <motion.li key={link.label} variants={navItemVariants} custom={idx}>
                    <a
                      href={link.path}
                      className="group relative inline-flex items-center text-[0.78rem] font-medium uppercase tracking-[0.2em] text-[#F5F5F2]/60 transition-all duration-300 hover:text-white hover:translate-x-1.5 py-1"
                    >
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1.5, delay: 0.8, ease: easing } },
        }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="mx-auto max-w-[92rem] px-6 sm:px-8 lg:px-12 py-8 flex flex-row items-center justify-between text-[0.68rem] tracking-[0.22em] text-[#F5F5F2]/40 uppercase">
          <p>© Singularis Family Office</p>
          <p className="font-light">Quietly structured.</p>
        </div>
      </motion.div>

    </motion.footer>
  );
}

export default AppFooter;