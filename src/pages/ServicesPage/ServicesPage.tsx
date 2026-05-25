import { useRef, RefObject } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroService from '../../assets/imagery/hero_service.jpg';
import strucImage from '../../assets/imagery/struc.jpg';

const easing = [0.22, 1, 0.36, 1] as const;

const initialY = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40;

const headingVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing,
    },
  },
};

const bodyParagraphVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing,
    },
  },
};

const fadeUpVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing,
    },
  },
};

const cardVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing,
    },
  },
};

const lineRevealVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easing,
    },
  },
};

const timelineItems = [
  {
    mark: '01',
    heading: 'Define priorities',
    body: 'Strategic priorities are clarified through layered governance structures and measured pacing before operational execution begins.',
    rightMeta: 'SEQUENCED',
  },
  {
    mark: '02',
    heading: 'Establish cadence',
    body: 'Structured check-ins and reviews establish a sustainable operational rhythm while preserving long-term alignment.',
    rightMeta: 'STRUCTURED',
  },
  {
    mark: '03',
    heading: 'Align execution',
    body: 'Execution paths remain connected to core institutional priorities through visible alignment and review.',
    rightMeta: 'ALIGNED',
  },
];

const generationalSteps = [
  {
    number: '01',
    heading: 'Governance Structuring',
    body: 'Decision-making frameworks are layered intentionally to preserve continuity, accountability, and long-term strategic alignment.',
    keyword: 'STRUCTURED',
    rotation: -1.2,
  },
  {
    number: '02',
    heading: 'Succession Coordination',
    body: 'Leadership transition is approached through measured preparation, institutional participation, and generational continuity planning.',
    keyword: 'SEQUENCED',
    rotation: 1.0,
  },
  {
    number: '03',
    heading: 'Operational Stewardship',
    body: 'Operational systems are coordinated through defined review cadence, oversight architecture, and strategic pacing.',
    keyword: 'ALIGNED',
    rotation: -0.8,
  },
  {
    number: '04',
    heading: 'Capital Continuity',
    body: 'Preservation structures are designed to support long-term family objectives across evolving institutional conditions.',
    keyword: 'PRESERVED',
    rotation: 1.2,
  },
];

export function ServicesPage() {
  const reduceMotion = useReducedMotion();

  const heroRef = useRef<HTMLDivElement>(null);
  const continuityRef = useRef<HTMLDivElement>(null);
  const rhythmRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  const getExitStyles = (ref: RefObject<HTMLDivElement | null>) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    const exitY = useTransform(scrollYProgress, [0.75, 0.95], [0, -40]);
    const exitOpacity = useTransform(scrollYProgress, [0.75, 0.95], [1, 0]);
    return { y: exitY, opacity: exitOpacity };
  };

  const heroExit = getExitStyles(heroRef);
  const continuityExit = getExitStyles(continuityRef);
  const rhythmExit = getExitStyles(rhythmRef);
  const closingExit = getExitStyles(closingRef);

  return (
    <main className="bg-white overflow-hidden pt-0">
      {/* ── SECTION 01 — HERO ── */}
      <motion.section
        ref={heroRef}
        style={reduceMotion ? {} : heroExit}
        className="relative bg-neutral-900 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 text-center px-6 overflow-hidden"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroService}
            alt="Institutional Services Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="mx-auto max-w-[84rem] relative z-20 flex flex-col items-center">
          <motion.span
            variants={headingVariants}
            className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-white/50"
          >
            INSTITUTIONAL SERVICES
          </motion.span>
          <motion.h1
            variants={headingVariants}
            transition={{ delay: 0.08, duration: 1.0, ease: easing }}
            className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-none tracking-[-0.03em] text-white font-serif-elegant select-none max-w-[48rem]"
          >
            Structures designed for continuity.
          </motion.h1>
          <motion.p
            variants={bodyParagraphVariants}
            transition={{ delay: 0.16, duration: 1.0, ease: easing }}
            className="mt-8 max-w-[32rem] text-[0.98rem] sm:text-[1.06rem] font-light leading-[1.75] text-white/80"
          >
            Singularis Family Office approaches stewardship through governance clarity, operational coordination, and long-term institutional preservation.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            transition={{ delay: 0.24, duration: 1.0, ease: easing }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-20 border-t border-white/15 pt-6 w-full max-w-[40rem]"
          >
            {['PRIVATE COORDINATION', 'GOVERNANCE SYSTEMS', 'LONG-TERM ALIGNMENT'].map((meta) => (
              <span key={meta} className="text-[0.66rem] uppercase tracking-[0.24em] text-white/50 font-mono">
                {meta}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── SECTION 02 — STRUCTURED CONTINUITY ── */}
      <motion.section
        ref={continuityRef}
        style={reduceMotion ? {} : continuityExit}
        className="bg-[#FAF9F6] py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-16 border-t border-[#1E3754]/8 overflow-hidden"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="mx-auto max-w-[84rem]">
          {/* Centered Header block */}
          <div className="flex flex-col items-center text-center mb-20 sm:mb-28">
            <motion.span
              variants={headingVariants}
              className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40"
            >
              STRUCTURED CONTINUITY
            </motion.span>
            <motion.h2
              variants={headingVariants}
              transition={{ delay: 0.08, duration: 1.0, ease: easing }}
              className="mt-6 text-[#1E3754] text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.1] tracking-[-0.02em] font-serif-elegant max-w-[40rem]"
            >
              Institutional Coordination Across Generations
            </motion.h2>
          </div>

          {/* Connected floating cards layout */}
          <div className="relative mx-auto max-w-[64rem] mt-16 md:mt-24 px-0">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-[#1E3754]/15" />

            <div className="space-y-12 md:space-y-28 relative">
              {generationalSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    initial={reduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="relative flex flex-row items-center justify-between w-full"
                  >
                    {/* Central connection point (node on the vertical line) */}
                    <motion.div
                      variants={nodeVariants}
                      transition={{ delay: 0.05, duration: 0.55, ease: easing }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
                    >
                      <div className="h-4 w-4 rounded-full border border-[#1E3754]/30 bg-[#FAF9F6] flex items-center justify-center shadow-[0_2px_6px_rgba(30,55,84,0.05)]">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#1E3754]" />
                      </div>
                    </motion.div>

                    {/* Left dashed line (for left card) */}
                    {isLeft && (
                      <motion.div
                        variants={lineRevealVariants}
                        transition={{ delay: 0.15, duration: 0.8, ease: easing }}
                        className="absolute right-1/2 w-3 md:w-[3rem] h-px border-t border-dashed border-[#1E3754]/30 top-1/2 -translate-y-1/2 origin-right"
                      />
                    )}

                    {/* Right dashed line (for right card) */}
                    {!isLeft && (
                      <motion.div
                        variants={lineRevealVariants}
                        transition={{ delay: 0.15, duration: 0.8, ease: easing }}
                        className="absolute left-1/2 w-3 md:w-[3rem] h-px border-t border-dashed border-[#1E3754]/30 top-1/2 -translate-y-1/2 origin-left"
                      />
                    )}

                    {/* Left Column (contains card if isLeft is true) */}
                    <div className="w-[calc(50%-12px)] md:w-[calc(50%-3rem)] flex justify-end">
                      {isLeft && (
                        <motion.div
                          variants={cardVariants}
                          transition={{ delay: 0.25, duration: 1.0, ease: easing }}
                          className="relative bg-white border border-[#1E3754]/8 rounded-[12px] md:rounded-[24px] p-3 md:p-10 shadow-[0_8px_30px_rgba(30,55,84,0.02)] hover:shadow-[0_12px_40px_rgba(30,55,84,0.05)] w-full max-w-[390px] text-left transition-all duration-700 ease-out group"
                          style={{ rotate: reduceMotion ? 0 : step.rotation }}
                        >
                          {/* Anchor Node on the card's right edge */}
                          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 md:h-3 md:w-3 rounded-full border border-[#1E3754]/30 bg-[#FAF9F6] flex items-center justify-center z-30 group-hover:scale-110 transition-transform duration-300">
                            <div className="h-1 w-1 rounded-full bg-[#1E3754]/60" />
                          </div>

                          {/* Card Content */}
                          <div className="flex justify-between items-start mb-2 md:mb-6">
                            <span className="text-[8px] md:text-[0.66rem] font-mono tracking-[0.2em] text-[#1E3754]/40 uppercase">
                              PHASE {step.number}
                            </span>
                            <span className="text-[7px] md:text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#1E3754]/20 font-mono">
                              COORD
                            </span>
                          </div>

                          <h3 className="text-[#1E3754] text-xs sm:text-sm md:text-[1.4rem] font-light leading-tight font-serif-elegant mb-1.5 md:mb-4">
                            {step.heading}
                          </h3>
                          <p className="text-[9px] sm:text-[10px] md:text-[0.94rem] leading-[1.5] md:leading-[1.65] font-light text-[#1E3754]/68 mb-3 md:mb-6">
                            {step.body}
                          </p>

                          <div className="border-t border-[#1E3754]/6 pt-1.5 md:pt-4 flex justify-between items-center">
                            <span className="text-[7px] md:text-[0.6rem] font-mono uppercase tracking-[0.3em] text-[#1E3754]/40">
                              KEYWORD
                            </span>
                            <span className="text-[8px] md:text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#1E3754] font-mono">
                              {step.keyword}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right Column (contains card if isLeft is false) */}
                    <div className="w-[calc(50%-12px)] md:w-[calc(50%-3rem)] flex justify-start">
                      {!isLeft && (
                        <motion.div
                          variants={cardVariants}
                          transition={{ delay: 0.25, duration: 1.0, ease: easing }}
                          className="relative bg-white border border-[#1E3754]/8 rounded-[12px] md:rounded-[24px] p-3 md:p-10 shadow-[0_8px_30px_rgba(30,55,84,0.02)] hover:shadow-[0_12px_40px_rgba(30,55,84,0.05)] w-full max-w-[390px] text-left transition-all duration-700 ease-out group"
                          style={{ rotate: reduceMotion ? 0 : step.rotation }}
                        >
                          {/* Anchor Node on the card's left edge */}
                          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 md:h-3 md:w-3 rounded-full border border-[#1E3754]/30 bg-[#FAF9F6] flex items-center justify-center z-30 group-hover:scale-110 transition-transform duration-300">
                            <div className="h-1 w-1 rounded-full bg-[#1E3754]/60" />
                          </div>

                          {/* Card Content */}
                          <div className="flex justify-between items-start mb-2 md:mb-6">
                            <span className="text-[8px] md:text-[0.66rem] font-mono tracking-[0.2em] text-[#1E3754]/40 uppercase">
                              PHASE {step.number}
                            </span>
                            <span className="text-[7px] md:text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#1E3754]/20 font-mono">
                              COORD
                            </span>
                          </div>

                          <h3 className="text-[#1E3754] text-xs sm:text-sm md:text-[1.4rem] font-light leading-tight font-serif-elegant mb-1.5 md:mb-4">
                            {step.heading}
                          </h3>
                          <p className="text-[9px] sm:text-[10px] md:text-[0.94rem] leading-[1.5] md:leading-[1.65] font-light text-[#1E3754]/68 mb-3 md:mb-6">
                            {step.body}
                          </p>

                          <div className="border-t border-[#1E3754]/6 pt-1.5 md:pt-4 flex justify-between items-center">
                            <span className="text-[7px] md:text-[0.6rem] font-mono uppercase tracking-[0.3em] text-[#1E3754]/40">
                              KEYWORD
                            </span>
                            <span className="text-[8px] md:text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#1E3754] font-mono">
                              {step.keyword}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 03 — OPERATIONAL RHYTHM ── */}
      <motion.section
        ref={rhythmRef}
        style={reduceMotion ? {} : rhythmExit}
        className="bg-white py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-16 border-t border-[#1E3754]/8"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-[84rem]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 lg:gap-x-20 items-start">
            {/* Left side: Image */}
            <div className="col-span-12 md:col-span-5 lg:col-span-6">
              <motion.div
                variants={cardVariants}
                transition={{ delay: 0.12, duration: 1.0, ease: easing }}
                className="relative overflow-hidden rounded-[24px] border border-[#1E3754]/10 shadow-[0_12px_40px_rgba(30,55,84,0.03)] aspect-[4/5] md:h-[620px] w-full"
              >
                <img
                  src={strucImage}
                  alt="Disciplined Operational Rhythm"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right side: Content */}
            <div className="col-span-12 md:col-span-7 lg:col-span-6 md:pl-6">
              <div className="flex flex-col items-start mt-0 pt-0">
                <motion.h2
                  variants={headingVariants}
                  className="text-[#1E3754] font-light tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.1] font-serif-elegant select-none mt-0 pt-0"
                >
                  A disciplined operational rhythm.
                </motion.h2>
              </div>

              {/* Vertical timeline list */}
              <div className="relative pl-8 mt-6 space-y-12">
                {/* Vertical line running down the list */}
                <div className="absolute left-[9px] top-2 bottom-2 w-[1px] bg-[#1E3754]/15" />

                {timelineItems.map((phase, idx) => (
                  <motion.div
                    key={phase.mark}
                    variants={cardVariants}
                    transition={{ delay: 0.08 + idx * 0.08, duration: 1.0, ease: easing }}
                    className="relative flex flex-col items-start"
                  >
                    {/* Circular node anchor */}
                    <div className="absolute left-[-28px] top-[6px] h-4.5 w-4.5 rounded-full border-2 border-[#1E3754]/20 bg-white flex items-center justify-center shadow-[0_2px_6px_rgba(30,55,84,0.04)]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#1E3754]" />
                    </div>

                    {/* Content block */}
                    <div className="flex items-center gap-3">
                      <span className="text-[0.68rem] font-mono tracking-[0.2em] text-[#1E3754]/30">
                        {phase.mark}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-[#1E3754]/20" />
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#1E3754]/40 font-mono">
                        {phase.rightMeta}
                      </span>
                    </div>

                    <h3 className="mt-2 text-[#1E3754] text-[1.28rem] font-light font-serif-elegant leading-tight">
                      {phase.heading}
                    </h3>

                    <p className="mt-2.5 text-[0.92rem] leading-[1.65] font-light text-[#1E3754]/68 max-w-[28rem]">
                      {phase.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 04 — CLOSING ── */}
      <motion.section
        ref={closingRef}
        style={reduceMotion ? {} : closingExit}
        className="bg-white py-28 sm:py-36 lg:py-48 px-6 sm:px-12 lg:px-16 text-center border-t border-[#1E3754]/8"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-[84rem] flex flex-col items-center">
          <motion.span
            variants={headingVariants}
            className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40"
          >
            INSTITUTIONAL PRESENCE
          </motion.span>
          <motion.h2
            variants={headingVariants}
            transition={{ delay: 0.08, duration: 1.0, ease: easing }}
            className="mt-6 text-[#1E3754] text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-none tracking-[-0.03em] font-serif-elegant select-none"
          >
            Quiet systems. Visible structure.
          </motion.h2>
          <motion.p
            variants={bodyParagraphVariants}
            transition={{ delay: 0.16, duration: 1.0, ease: easing }}
            className="mt-8 max-w-[28rem] text-[0.98rem] sm:text-[1.04rem] font-light leading-[1.75] text-[#1E3754]/75"
          >
            Clarity, continuity, and governance alignment remain central to every layer of coordination.
          </motion.p>
          <motion.div
            variants={fadeUpVariants}
            transition={{ delay: 0.24, duration: 1.0, ease: easing }}
            className="mt-12"
          >
            <Link
              to="/#contact"
              className="inline-block px-10 py-4 border border-[#1E3754] text-[#1E3754] text-[0.66rem] font-semibold uppercase tracking-[0.24em] hover:bg-[#1E3754] hover:text-white transition-all duration-500 ease-out"
            >
              REQUEST CONTACT
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

export default ServicesPage;