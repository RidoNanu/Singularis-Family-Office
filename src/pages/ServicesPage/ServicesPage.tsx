import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroService from '../../assets/imagery/hero_service.jpg';

const easing = [0.22, 1, 0.36, 1] as const;

const headingVariants = {
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

const bodyParagraphVariants = {
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

const fadeUpVariants = {
  hidden: { y: 20, opacity: 0 },
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

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
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
      delay: 0.2,
    },
  },
};

const mobileLineRevealVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
      delay: 0.2,
    },
  },
};

const timelineLeftVariants = {
  hidden: { x: -40, y: 30, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing,
    },
  },
};

const timelineRightVariants = {
  hidden: { x: 40, y: 30, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing,
    },
  },
};

const spineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.0,
      ease: 'linear' as const,
    },
  },
};

const connectorVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.1,
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
      delay: 0.25,
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

  return (
    <main className="bg-white overflow-hidden pt-[7.5rem]">
      {/* ── SECTION 01 — HERO ── */}
      <motion.section
        className="relative bg-neutral-900 py-24 sm:py-32 lg:py-40 text-center px-6 overflow-hidden"
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
            custom={0}
            className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-white/50"
          >
            INSTITUTIONAL SERVICES
          </motion.span>
          <motion.h1
            variants={headingVariants}
            custom={1}
            className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-none tracking-[-0.03em] text-white font-serif-elegant select-none max-w-[48rem]"
          >
            Structures designed for continuity.
          </motion.h1>
          <motion.p
            variants={bodyParagraphVariants}
            className="mt-8 max-w-[32rem] text-[0.98rem] sm:text-[1.06rem] font-light leading-[1.75] text-white/80"
          >
            Singularis Family Office approaches stewardship through governance clarity, operational coordination, and long-term institutional preservation.
          </motion.p>
          
          <motion.div
            variants={fadeUpVariants}
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
              custom={0}
              className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40"
            >
              STRUCTURED CONTINUITY
            </motion.span>
            <motion.h2
              variants={headingVariants}
              custom={1}
              className="mt-6 text-[#1E3754] text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.1] tracking-[-0.02em] font-serif-elegant max-w-[40rem]"
            >
              Institutional Coordination Across Generations
            </motion.h2>
          </div>

          {/* Connected floating cards layout */}
          <div className="relative mx-auto max-w-[64rem] mt-16 md:mt-24 px-2 md:px-0">
            {/* Center vertical line */}
            <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-[#1E3754]/15" />

            <div className="space-y-16 md:space-y-28 relative">
              {generationalSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    initial={reduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full pl-10 md:pl-0"
                  >
                    {/* Central connection point (node on the vertical line) */}
                    <motion.div
                      variants={nodeVariants}
                      className="absolute left-[18px] md:left-1/2 top-[50px] md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
                    >
                      <div className="h-4 w-4 rounded-full border border-[#1E3754]/30 bg-[#FAF9F6] flex items-center justify-center shadow-[0_2px_6px_rgba(30,55,84,0.05)]">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#1E3754]" />
                      </div>
                    </motion.div>

                    {/* Left dashed line (for left card) */}
                    {isLeft && (
                      <motion.div
                        variants={lineRevealVariants}
                        className="absolute right-[50%] w-[3rem] h-px border-t border-dashed border-[#1E3754]/30 top-1/2 -translate-y-1/2 hidden md:block origin-right"
                      />
                    )}

                    {/* Right dashed line (for right card) */}
                    {!isLeft && (
                      <motion.div
                        variants={lineRevealVariants}
                        className="absolute left-[50%] w-[3rem] h-px border-t border-dashed border-[#1E3754]/30 top-1/2 -translate-y-1/2 hidden md:block origin-left"
                      />
                    )}

                    {/* Mobile dashed line (always left) */}
                    <motion.div
                      variants={mobileLineRevealVariants}
                      className="absolute left-[18px] w-[22px] h-px border-t border-dashed border-[#1E3754]/30 top-[50px] -translate-y-1/2 md:hidden origin-left"
                    />

                    {/* Card container */}
                    <div className={`w-full md:w-[calc(50%-3rem)] flex ${isLeft ? 'justify-start md:justify-end' : 'justify-start md:order-last'}`}>
                      <motion.div
                        variants={cardVariants}
                        className="relative bg-white border border-[#1E3754]/8 rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(30,55,84,0.02)] hover:shadow-[0_12px_40px_rgba(30,55,84,0.05)] w-full max-w-[390px] text-left transition-all duration-700 ease-out group"
                        style={{ rotate: reduceMotion ? 0 : step.rotation }}
                      >
                        {/* Anchor Node on the card */}
                        <div className="absolute left-0 md:left-auto right-auto md:right-0 top-[50px] md:top-1/2 -translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border border-[#1E3754]/30 bg-[#FAF9F6] flex items-center justify-center z-30 group-hover:scale-110 transition-transform duration-300">
                          <div className="h-1 w-1 rounded-full bg-[#1E3754]/60" />
                        </div>

                        {/* Card Content */}
                        <div className="flex justify-between items-start mb-6">
                          <span className="text-[0.66rem] font-mono tracking-[0.2em] text-[#1E3754]/40 uppercase">
                            PHASE {step.number}
                          </span>
                          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#1E3754]/20 font-mono">
                            COORD
                          </span>
                        </div>

                        <h3 className="text-[#1E3754] text-[1.4rem] font-light leading-tight font-serif-elegant mb-4">
                          {step.heading}
                        </h3>
                        <p className="text-[0.94rem] leading-[1.65] font-light text-[#1E3754]/68 mb-6">
                          {step.body}
                        </p>

                        <div className="border-t border-[#1E3754]/6 pt-4 flex justify-between items-center">
                          <span className="text-[0.6rem] font-mono uppercase tracking-[0.3em] text-[#1E3754]/40">
                            KEYWORD
                          </span>
                          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#1E3754] font-mono">
                            {step.keyword}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for non-card side */}
                    <div className="w-full md:w-[calc(50%-3rem)] hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 03 — OPERATIONAL RHYTHM ── */}
      <motion.section
        className="bg-white py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-16 border-t border-[#1E3754]/8"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-[84rem]">
          <div className="flex flex-col items-center text-center">
            <motion.span
              variants={headingVariants}
              custom={0}
              className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40"
            >
              STRUCTURED OVERSIGHT
            </motion.span>
            <motion.h2
              className="mt-6 text-[#1E3754] text-center font-light tracking-[-0.03em] text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.1] select-none font-serif-elegant"
            >
              A disciplined operational rhythm.
            </motion.h2>
            <motion.p
              variants={bodyParagraphVariants}
              className="mt-6 mx-auto max-w-[60ch] text-[0.98rem] sm:text-[1.04rem] font-light leading-[1.75] text-[#1E3754]/72"
            >
              Institutional continuity depends on measured pacing, governance cadence, and operational clarity.
            </motion.p>
          </div>

          {/* Sequence area with center spine */}
          <div className="relative mt-16 lg:mt-24">
            {/* Center spine */}
            <motion.div
              variants={spineVariants}
              className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-[1px] sm:w-[3px] bg-[#1E3754]/[0.14] sm:bg-[#1E3754]/[0.30]"
            />

            <div className="relative">
              <div className="space-y-12 sm:space-y-20 lg:space-y-24">
                {timelineItems.map((phase, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={phase.mark}
                      initial={reduceMotion ? false : 'hidden'}
                      whileInView="visible"
                      variants={isLeft ? timelineLeftVariants : timelineRightVariants}
                      viewport={{ once: false, amount: 0.35 }}
                      className="grid grid-cols-12 items-start gap-1 sm:gap-4"
                    >
                      {/* Left column (content for left items) */}
                      <div className={`col-span-5 ${isLeft ? 'text-right pr-1 sm:pr-8' : 'col-start-1 invisible'}`}>
                        {isLeft ? (
                          <div className="max-w-full sm:max-w-[44ch] lg:ml-auto">
                            <div className="text-[0.58rem] sm:text-[0.92rem] font-mono text-[#1E3754]/30">{phase.mark}</div>
                            <h3 className="mt-1 sm:mt-2 text-[11px] sm:text-[clamp(22px,2.8vw,30px)] font-medium text-[#1E3754] leading-[1.1]">{phase.heading}</h3>
                            <p className="mt-1.5 sm:mt-3 text-[9px] sm:text-[clamp(15px,1vw,17px)] leading-[1.35] sm:leading-[1.6] text-[#1E3754]/75 whitespace-pre-line break-words">{phase.body}</p>
                            <div className="mt-1.5 sm:mt-3 text-[0.52rem] sm:text-[0.72rem] uppercase tracking-[0.15em] sm:tracking-[0.28em] text-[#1E3754]/40">{phase.rightMeta}</div>
                          </div>
                        ) : null}
                      </div>

                      {/* Center connector column */}
                      <div className="col-span-2 flex justify-center">
                        <div className="relative w-full flex justify-center items-start">
                          {/* horizontal connector from spine to node */}
                          <motion.div
                            variants={connectorVariants}
                            className="absolute h-[1.5px] sm:h-[3px] bg-[#1E3754]/[0.12] sm:bg-[#1E3754]/[0.22] w-[24px] sm:w-[140px] top-[14px] sm:top-[32px]"
                            style={{
                              ...(isLeft ? { right: '50%' } : { left: '50%' }),
                              transformOrigin: isLeft ? 'right center' : 'left center',
                            }}
                          />

                          {/* circular node anchored exactly where the connector meets the spine */}
                          <div className="absolute left-1/2 z-10 -translate-x-1/2 top-[9px] sm:top-[24px]">
                            <motion.div variants={nodeVariants} className="flex items-center justify-center">
                              <div className="flex h-2.5 w-2.5 sm:h-5 sm:w-5 items-center justify-center rounded-full border border-[#1E3754]/24 bg-white shadow-[0_4px_12px_rgba(30,55,84,0.06)]">
                                <div className="h-0.5 w-0.5 sm:h-1.5 sm:w-1.5 rounded-full bg-[#1E3754]/36" />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Right column (content for right items) */}
                      <div className={`col-span-5 ${!isLeft ? 'text-left pl-1 sm:pl-8' : 'col-start-8 invisible'}`}>
                        {!isLeft ? (
                          <div className="max-w-full sm:max-w-[44ch]">
                            <div className="text-[0.58rem] sm:text-[0.92rem] font-mono text-[#1E3754]/30">{phase.mark}</div>
                            <h3 className="mt-1 sm:mt-2 text-[11px] sm:text-[clamp(22px,2.8vw,30px)] font-medium text-[#1E3754] leading-[1.1]">{phase.heading}</h3>
                            <p className="mt-1.5 sm:mt-3 text-[9px] sm:text-[clamp(15px,1vw,17px)] leading-[1.35] sm:leading-[1.6] text-[#1E3754]/75 whitespace-pre-line break-words">{phase.body}</p>
                            <div className="mt-1.5 sm:mt-3 text-[0.52rem] sm:text-[0.72rem] uppercase tracking-[0.15em] sm:tracking-[0.28em] text-[#1E3754]/40">{phase.rightMeta}</div>
                          </div>
                        ) : null}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 04 — CLOSING ── */}
      <motion.section
        className="bg-white py-28 sm:py-36 lg:py-48 px-6 sm:px-12 lg:px-16 text-center border-t border-[#1E3754]/8"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-[84rem] flex flex-col items-center">
          <motion.span
            variants={headingVariants}
            custom={0}
            className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40"
          >
            INSTITUTIONAL PRESENCE
          </motion.span>
          <motion.h2
            variants={headingVariants}
            custom={1}
            className="mt-6 text-[#1E3754] text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-none tracking-[-0.03em] font-serif-elegant select-none"
          >
            Quiet systems. Visible structure.
          </motion.h2>
          <motion.p
            variants={headingVariants}
            custom={2}
            className="mt-8 max-w-[28rem] text-[0.98rem] sm:text-[1.04rem] font-light leading-[1.75] text-[#1E3754]/75"
          >
            Clarity, continuity, and governance alignment remain central to every layer of coordination.
          </motion.p>
          <motion.div variants={fadeUpVariants} className="mt-12">
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