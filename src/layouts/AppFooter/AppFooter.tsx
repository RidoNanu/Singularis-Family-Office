import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { navigationItems } from '../../constants/navigation';

const contactEmail = 'office@singularisfamilyoffice.com';

const helpLinks = [
  { label: 'Private Inquiry', href: '#contact' },
  { label: 'Governance Overview', href: '#contact' },
  { label: 'Secure Contact', href: `mailto:${contactEmail}` },
] as const;

const followLinks = [
  { kind: 'phone', href: '#contact', title: 'Phone' },
  { kind: 'instagram', href: '#contact', title: 'Instagram' },
  { kind: 'linkedin', href: '#contact', title: 'LinkedIn' },
] as const;

function renderFollowIcon(kind: (typeof followLinks)[number]['kind']) {
  if (kind === 'phone') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.05rem] w-[1.05rem] fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.63 2.64a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.44-1.29a2 2 0 0 1 2.11-.45c.85.3 1.74.51 2.64.63A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  if (kind === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.05rem] w-[1.05rem] fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.05rem] w-[1.05rem] fill-current">
      <path d="M6.94 8.5h3.14v1.7h.04c.44-.83 1.5-1.7 3.08-1.7 3.29 0 3.9 2.17 3.9 4.99V19h-3.27v-4.86c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58V19H6.94V8.5ZM5.05 5.09a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3.41 8.5h3.28V19H3.41V8.5Z" />
    </svg>
  );
}

export function AppFooter() {
  const reduceMotion = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1] as const;

  const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: easing,
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: (i: number = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: easing,
        delay: i * 0.05,
      },
    }),
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: false, amount: 0.12 }}
      variants={footerVariants}
      className="relative overflow-hidden border-t border-white/10 bg-[#1E3754] text-[#F5F5F2]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="flex justify-end border-b border-white/10 pb-10">
            <motion.div
              variants={itemVariants}
              custom={0}
              className="w-full space-y-5 lg:max-w-[34rem]"
            >
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.28em] text-[#F5F5F2]/44">
                Get In Touch
              </p>

              <div className="rounded-[1.75rem] border border-white/14 bg-[#F5F5F2]/[0.04] p-2.5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex-1 rounded-full bg-[#F5F5F2]/[0.06] px-5 py-3 text-[0.88rem] text-[#F5F5F2]/52">
                    Enter your email
                  </div>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#F5F5F2] px-6 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#1E3754] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Request Contact
                  </a>
                </div>
              </div>

              <p className="max-w-[28rem] text-[0.8rem] leading-[1.7] text-[#F5F5F2]/48">
                Private correspondence for families, trustees, and advisors seeking structured continuity and governance clarity.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <motion.div variants={itemVariants} custom={1} className="space-y-4">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#F5F5F2]/42">
                Contact Information
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="block text-[0.94rem] font-light text-[#F5F5F2]/78 transition-colors duration-300 hover:text-white"
                >
                  {contactEmail}
                </a>
                <div className="text-[0.88rem] font-light text-[#F5F5F2]/58">
                  PGP secured correspondence
                </div>
                <div className="text-[0.88rem] font-light text-[#F5F5F2]/58">
                  By appointment only
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} custom={2} className="space-y-4">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#F5F5F2]/42">
                Company
              </h3>
              <ul className="space-y-3">
                {navigationItems.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-[0.94rem] font-light text-[#F5F5F2]/74 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} custom={3} className="space-y-4">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#F5F5F2]/42">
                Help
              </h3>
              <ul className="space-y-3">
                {helpLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.94rem] font-light text-[#F5F5F2]/74 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} custom={4} className="space-y-4">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#F5F5F2]/42">
                Follow Us
              </h3>
              <div className="flex items-center gap-3">
                {followLinks.map((link) => (
                  <a
                    key={link.kind}
                    href={link.href}
                    aria-label={link.title}
                    title={link.title}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/16 text-[#F5F5F2]/82 transition-all duration-300 hover:border-white/28 hover:text-white"
                  >
                    {renderFollowIcon(link.kind)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            custom={5}
            className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.72rem] uppercase tracking-[0.22em] text-[#F5F5F2]/40 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>© {currentYear} Singularis Family Office. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#contact" className="transition-colors duration-300 hover:text-white">
                Privacy
              </a>
              <a href="#contact" className="transition-colors duration-300 hover:text-white">
                Terms &amp; Conditions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default AppFooter;
