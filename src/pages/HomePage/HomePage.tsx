import { useState, useRef, RefObject } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HeroSection } from '../../sections/home/HeroSection';
import serviceImage from '../../assets/imagery/service.jpg';
import continuityImage from '../../assets/imagery/continuity.png';

const pageFrame = 'mx-auto max-w-[92rem] px-6 sm:px-8 lg:px-12';
const sectionSpacing = 'py-20 sm:py-24 lg:py-28';
const easing = [0.22, 1, 0.36, 1] as const;
type MetaItem = { key: string; val: string };
type BeltCard = {
  id: string;
  kind: 'text' | 'image' | 'quote';
  label?: string;
  title?: string;
  body?: string;
  quote?: string;
  image?: string;
  imageAlt?: string;
  note?: string;
  width?: string;
  height?: string;
  meta?: MetaItem[];
};

// Global Scroll Reveal Variants (Entrance)
const globalRevealVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: easing,
    }
  }
};

// Heading Line stagger reveal
const headingLineVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing,
      delay: i * 0.1
    }
  })
};

// Paragraph delay reveal
const bodyParagraphVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing,
      delay: 0.25
    }
  }
};

// Cinematic Image reveal
const cinematicImageVariants = {
  hidden: { y: 40, scale: 1.03, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing
    }
  }
};

// Card / Item sequential stagger
const cardStaggerVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing,
      delay: i * 0.1
    }
  })
};

const timelineLeftVariants = {
  hidden: { x: -40, y: 30, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
};

const timelineRightVariants = {
  hidden: { x: 40, y: 30, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
};

const spineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.0,
      ease: 'linear' as const
    }
  }
};

const connectorVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.1
    }
  }
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
      delay: 0.05
    }
  }
};

const contactStatementVariants = {
  hidden: { y: 40, opacity: 0, letterSpacing: '0.02em' },
  visible: {
    y: 0,
    opacity: 1,
    letterSpacing: '-0.05em',
    transition: {
      duration: 1.4,
      ease: easing
    }
  }
};

const presenceImageLeftVariants = {
  hidden: { x: -60, scale: 1.03, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing
    }
  }
};

const presenceContentRightVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: easing,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const CONNECTOR_WIDTH = '140px';
const SPINE_COLOR = 'rgba(30,55,84,0.20)';
const CONNECTOR_COLOR = 'rgba(30,55,84,0.12)';

const operationsItems = [
  {
    mark: '01',
    heading: 'Define priorities and oversight',
    body: 'Strategic priorities are clarified through layered governance structures and measured institutional pacing before operational execution begins.',
    rightMeta: 'SEQUENCED',
  },
  {
    mark: '02',
    heading: 'Sequence review cadence',
    body: 'Quarterly governance reviews establish operational rhythm while preserving institutional composure and long-term alignment.',
    rightMeta: 'STRUCTURED',
  },
  {
    mark: '03',
    heading: 'Align execution with governance',
    body: 'Execution remains connected to institutional priorities through visible accountability and strategic review systems.',
    rightMeta: 'ALIGNED',
  },
  {
    mark: '04',
    heading: 'Preserve continuity through review',
    body: 'Institutional review structures reduce fragmentation and maintain governance clarity during strategic transitions.',
    rightMeta: 'MEASURED',
  },
  {
    mark: '05',
    heading: 'Sustain long-term continuity',
    body: 'Continuity is preserved through succession preparation, disciplined oversight, and structures designed for generational stewardship.',
    rightMeta: 'ENDURING',
  },
];
const beltCards: BeltCard[] = [
  {
    id: 'decision-pathways',
    kind: 'text',
    label: '01 / DECISION PATHWAYS',
    title: 'Decision pathways',
    body: 'Clear responsibility frameworks preserve continuity during periods of transition and institutional change.',
    width: 'clamp(16rem, 82vw, 20rem)',
    height: '16rem',
    meta: [
      { key: 'Focus', val: 'Review Cadence' },
      { key: 'Mode', val: 'Governed' },
    ],
  },
  {
    id: 'risk-awareness',
    kind: 'text',
    label: '02 / RISK AWARENESS',
    title: 'Risk awareness',
    body: 'Signals are reviewed proportionately, allowing governance decisions to remain composed rather than reactive.',
    width: 'clamp(16rem, 82vw, 22rem)',
    height: '16rem',
    meta: [
      { key: 'Focus', val: 'Signal Review' },
      { key: 'Mode', val: 'Proportionate' },
    ],
  },
  {
    id: 'review-cadence',
    kind: 'text',
    label: '03 / REVIEW CADENCE',
    title: 'Review cadence',
    body: 'Measured checkpoints sustain institutional rhythm while reducing unnecessary operational pressure.',
    width: 'clamp(16rem, 82vw, 23rem)',
    height: '16rem',
    meta: [
      { key: 'Focus', val: 'Quarterly Review' },
      { key: 'Mode', val: 'Disciplined' },
    ],
  },
  {
    id: 'governance-lens',
    kind: 'text',
    label: '04 / GOVERNANCE LENS',
    title: 'Governance lens',
    body: 'Oversight structures remain visible, layered, and aligned with long-horizon stewardship objectives.',
    width: 'clamp(16rem, 82vw, 21rem)',
    height: '16rem',
    meta: [
      { key: 'Focus', val: 'Oversight' },
      { key: 'Mode', val: 'Structured' },
    ],
  },
  {
    id: 'operational-clarity',
    kind: 'text',
    label: '05 / OPERATIONAL CLARITY',
    title: 'Operational clarity',
    body: 'Execution remains connected to institutional priorities through visible alignment and governance continuity.',
    width: 'clamp(16rem, 84vw, 24rem)',
    height: '16rem',
    meta: [
      { key: 'Focus', val: 'Execution' },
      { key: 'Mode', val: 'Aligned' },
    ],
  },
];
function BeltCardShell({ card }: { card: BeltCard }) {
  const shellClass = 'group relative flex-shrink-0 overflow-hidden border-r border-[#1E3754]/10 bg-[#F8F5EF] transition-colors duration-500 hover:bg-[#F3EFE7]';

  return (
    <article className={shellClass} style={{ width: card.width, height: card.height }}>
      <div className="flex h-full flex-col justify-between p-6 sm:p-7 lg:p-8">
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <span className="text-[0.66rem] uppercase tracking-[0.28em] text-[#1E3754]/40">{card.label}</span>
            <span className="h-px flex-1 bg-[#1E3754]/8" />
          </div>
          <div className="space-y-3">
            <p className="text-[1.28rem] font-light leading-[1.25] tracking-[-0.04em] text-[#1E3754] sm:text-[1.42rem]">{card.title}</p>
            <p className="max-w-[22ch] text-[0.94rem] leading-[1.85] text-[#1E3754]/68">{card.body}</p>
          </div>
        </div>
        <div className="grid gap-4 border-t border-[#1E3754]/8 pt-4 sm:grid-cols-2">
          {(card.meta || []).map((item) => (
            <div key={item.key} className="flex flex-col gap-1">
              <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[#1E3754]/36">{item.key}</span>
              <span className="text-[0.82rem] font-medium text-[#1E3754]/78">{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function HomePage() {
  const reduceMotion = useReducedMotion();
  const [beltHovered, setBeltHovered] = useState(false);

  const presenceRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const continuityRef = useRef<HTMLDivElement>(null);
  const operationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const getExitStyles = (ref: RefObject<HTMLDivElement | null>) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    const exitY = useTransform(scrollYProgress, [0.75, 0.95], [0, -40]);
    const exitOpacity = useTransform(scrollYProgress, [0.75, 0.95], [1, 0]);
    return { y: exitY, opacity: exitOpacity };
  };

  const presenceExit = getExitStyles(presenceRef);
  const philosophyExit = getExitStyles(philosophyRef);
  const continuityExit = getExitStyles(continuityRef);

  const { scrollYProgress: operationsScroll } = useScroll({
    target: operationsRef,
    offset: ["start end", "end start"]
  });
  const operationsParallaxY = useTransform(operationsScroll, [0, 1], [60, -60]);
  const operationsSmoothY = useSpring(operationsParallaxY, { stiffness: 90, damping: 25 });
  const operationsOpacity = useTransform(operationsScroll, [0.8, 0.98], [1, 0]);
  const operationsStyle = { y: operationsSmoothY, opacity: operationsOpacity };

  const contactExit = getExitStyles(contactRef);

  return (
    <main className="bg-white">
      <HeroSection />

      <motion.section
        ref={presenceRef}
        id="presence"
        style={reduceMotion ? {} : presenceExit}
        className="relative w-full min-h-[120vh] flex flex-col justify-between py-24 lg:py-32 xl:py-40 bg-white border-t border-[#1E3754]/6 overflow-hidden"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="w-full flex justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">
          <motion.p
            variants={headingLineVariants}
            custom={0}
            className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40"
          >
            INSTITUTIONAL PRESENCE
          </motion.p>
        </div>

        <div className="w-full max-w-[84rem] mx-auto px-6 sm:px-8 lg:px-12 my-auto py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side: Image Column sliding from Left */}
          <motion.div
            variants={presenceImageLeftVariants}
            className="lg:col-span-5 w-full flex justify-center overflow-hidden rounded-xl"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-xl bg-[#1E3754]/5 border border-[#1E3754]/8">
              <img
                src={serviceImage}
                alt="Institutional Presence"
                className="h-full w-full object-cover object-center transition-transform duration-[1.2s] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
            </div>
          </motion.div>

          {/* Right Side: Content Column sliding from Right */}
          <motion.div
            variants={presenceContentRightVariants}
            className="lg:col-span-7 flex flex-col items-start text-left lg:pl-4"
          >
            <h2 className="text-[#1E3754] font-light tracking-[-0.05em] text-[clamp(2.4rem,4.8vw,4.2rem)] leading-[0.95] max-w-[15ch] flex flex-col">
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} custom={1} className="inline-block">
                  A quiet institution with
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} custom={2} className="inline-block">
                  structure already in
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} custom={3} className="inline-block">
                  place.
                </motion.span>
              </span>
            </h2>
            <motion.div variants={headingLineVariants} custom={4} className="my-8 h-px w-20 bg-[#1E3754]/14" />
            <motion.p variants={bodyParagraphVariants} className="max-w-[28rem] text-[1.02rem] sm:text-[1.08rem] font-light leading-[1.75] text-[#1E3754]/68">
              Singularis Family Office operates through measured governance, institutional pacing, and long-term operational clarity. The office is intentionally restrained in tone, allowing continuity and stewardship to remain central to every decision structure.
            </motion.p>
            <motion.p variants={bodyParagraphVariants} className="mt-6 text-[0.8rem] uppercase tracking-[0.2em] text-[#1E3754]/45 font-medium leading-[1.8]">
              Quiet oversight.<br />
              Visible continuity.<br />
              Measured governance.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={philosophyRef}
        id="philosophy"
        style={reduceMotion ? {} : philosophyExit}
        className="relative min-h-[140vh] overflow-hidden border-y border-[#1E3754]/6 bg-white"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,55,84,0.02),transparent_60%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[140vh] max-w-[92rem] flex-col px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <motion.p
              variants={headingLineVariants}
              custom={0}
              className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#1E3754]/44"
            >
              GOVERNANCE & STRUCTURAL OVERSIGHT
            </motion.p>
            <h2 className="mt-8 mx-auto max-w-[14ch] text-[clamp(3rem,6vw,5.4rem)] font-light leading-[0.92] tracking-[-0.06em] text-[#1E3754] flex flex-col items-center">
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} custom={1} className="inline-block">
                  Structure that remains
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} custom={2} className="inline-block">
                  readable.
                </motion.span>
              </span>
            </h2>
            <motion.p
              variants={bodyParagraphVariants}
              className="mt-8 mx-auto max-w-[46rem] text-[1rem] leading-[2] text-[#1E3754]/70 sm:text-[1.08rem]"
            >
              Institutional systems should reduce operational friction, preserve clarity, and sustain continuity across time. The office operates through disciplined cadence, visible governance structures, and restrained execution frameworks.
            </motion.p>
          </div>

          <motion.div
            variants={globalRevealVariants}
            className="relative flex min-h-[60vh] items-end overflow-hidden pt-8"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.88)_8%,rgba(255,255,255,0)_14%,rgba(255,255,255,0)_86%,rgba(255,255,255,0.88)_92%,rgba(255,255,255,0.96))]" />

            <motion.div
              className="flex w-max items-stretch border-y border-[#1E3754]/10 bg-[#F8F5EF]"
              onMouseEnter={() => setBeltHovered(true)}
              onMouseLeave={() => setBeltHovered(false)}
              animate={reduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
              transition={reduceMotion ? undefined : { duration: beltHovered ? 30 : 18, ease: 'linear', repeat: Infinity }}
              style={{ willChange: 'transform' }}
            >
              {[0, 1].map((loopIndex) => (
                <div key={loopIndex} className="flex items-stretch">
                  {beltCards.map((card) => (
                    <BeltCardShell key={`${loopIndex}-${card.id}`} card={card} />
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={continuityRef}
        id="continuity"
        style={reduceMotion ? { paddingTop: '11.25rem', paddingBottom: '11.25rem' } : { paddingTop: '11.25rem', paddingBottom: '11.25rem', ...continuityExit }}
        className="relative overflow-hidden bg-[#1E3754]"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* ── Background atmosphere words ── */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none" aria-hidden>
          <span className="absolute -left-[6%] top-[8%] text-[clamp(10rem,18vw,22rem)] font-extralight leading-none tracking-[-0.08em] text-white/[0.02]">
            CONTINUITY
          </span>
          <span className="absolute right-[-4%] bottom-[12%] text-[clamp(8rem,14vw,18rem)] font-extralight leading-none tracking-[-0.06em] text-white/[0.02]">
            LEGACY
          </span>
          <span className="absolute left-[30%] top-[52%] text-[clamp(6rem,12vw,15rem)] font-extralight leading-none tracking-[-0.07em] text-white/[0.02]">
            ALIGNMENT
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16">

          {/* ── Institutional Header (eyebrow removed) ── */}
          <motion.div
            variants={headingLineVariants}
            custom={0}
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between pb-8 mb-16 lg:mb-20"
          >
            <div />
            <motion.p
              variants={bodyParagraphVariants}
              className="max-w-[26rem] text-[0.88rem] leading-[1.75] text-[#F5F5F2]/55 text-right hidden sm:block"
            >
              Structured continuity depends on governance systems<br />
              that remain readable across generations.
            </motion.p>
          </motion.div>

          {/* ── Simple Editorial Two-Column Split Layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

            {/* Left Side: Content Column (7/12 width) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-12">
              <div className="space-y-8">
                {/* Heading removed as requested */}

                {/* Body paragraphs removed as requested */}
              </div>

              {/* Staggered Vertical Pillars */}
              <div className="space-y-8 pt-10 border-t border-white/10">
                {[
                  {
                    mark: '01',
                    title: 'SUCCESSION PLANNING',
                    body: 'Leadership continuity is approached gradually through governance participation, visible preparation, and long-term institutional mentorship.',
                    meta: 'TIMELINE → Multi-generational'
                  },
                  {
                    mark: '02',
                    title: 'GOVERNANCE DESIGN',
                    body: 'Layered governance structures preserve accountability, operational clarity, and institutional composure during transition periods.',
                    meta: 'STRUCTURE → Layered Accountability'
                  },
                  {
                    mark: '03',
                    title: 'STEWARDSHIP FRAMEWORKS',
                    body: 'Capital preservation, continuity planning, and governance responsibility are treated as interconnected institutional systems.',
                    meta: 'FOCUS → Intergenerational Care'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.mark}
                    variants={cardStaggerVariants}
                    custom={idx + 1}
                    className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start"
                  >
                    <span className="text-[0.64rem] font-mono text-white/30 mt-1">{item.mark}</span>
                    <div className="space-y-2">
                      <h3 className="text-[0.9rem] font-semibold tracking-[0.2em] text-[#F5F5F2] uppercase">
                        {item.title}
                      </h3>
                      <p className="text-[0.92rem] font-light leading-[1.7] text-[#F5F5F2]/70">
                        {item.body}
                      </p>
                      <span className="inline-block text-[0.62rem] font-medium tracking-[0.15em] text-[#F5F5F2]/45 uppercase mt-1">
                        {item.meta}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Architectural Image Column (5/12 width) */}
            <div className="lg:col-span-5 h-full relative rounded-xl overflow-hidden bg-[#F5F5F2] p-4">
              <motion.div
                variants={cinematicImageVariants}
                className="relative aspect-[3/4] lg:aspect-auto lg:absolute lg:inset-0 w-full h-full overflow-hidden rounded-xl bg-[#ebe8e2]"
              >
                <img
                  src={continuityImage}
                  alt="Institutional architectural interior"
                  className="h-full w-full object-cover object-center grayscale-[20%] contrast-[0.96] saturate-[0.9] rounded-xl"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(30,55,84,0.08))]" />
              </motion.div>
            </div>

          </div>

        </div>
      </motion.section>

      <motion.section
        ref={operationsRef}
        id="operations"
        style={reduceMotion ? {} : operationsStyle}
        className={sectionSpacing}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className={pageFrame}>
          <div className="mx-auto max-w-[92rem] relative">

            {/* Background atmosphere words (very low opacity) */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none" aria-hidden>
              <span className="absolute left-[-6%] top-[6%] text-[clamp(10rem,18vw,22rem)] font-extralight leading-none tracking-[-0.08em] text-[#1E3754]/[0.02]">CADENCE</span>
              <span className="absolute right-[-8%] top-[28%] text-[clamp(10rem,18vw,22rem)] font-extralight leading-none tracking-[-0.06em] text-[#1E3754]/[0.02]">ALIGNMENT</span>
              <span className="absolute left-[10%] bottom-[8%] text-[clamp(10rem,18vw,22rem)] font-extralight leading-none tracking-[-0.07em] text-[#1E3754]/[0.02]">OVERSIGHT</span>
            </div>

            {/* Top labelled heading area (centered) */}
            <motion.div variants={globalRevealVariants} className="text-center">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.34em] text-[#1E3754]/52">STRATEGIC OPERATIONAL COORDINATION</p>
              <h2 className="mt-6 mx-auto max-w-[56ch] text-[clamp(40px,6vw,72px)] font-light leading-[0.92] tracking-[-0.02em] text-[#1E3754] flex flex-col items-center">
                <span className="overflow-hidden inline-block py-1">
                  <motion.span variants={headingLineVariants} custom={1} className="inline-block">
                    A disciplined
                  </motion.span>
                </span>
                <span className="overflow-hidden inline-block py-1">
                  <motion.span variants={headingLineVariants} custom={2} className="inline-block">
                    operational rhythm.
                  </motion.span>
                </span>
              </h2>
              <motion.p variants={bodyParagraphVariants} className="mt-6 mx-auto max-w-[60ch] text-[clamp(18px,2vw,20px)] leading-[1.8] text-[#1E3754]/72">Institutional continuity depends on visible sequencing, measured governance pacing, and operational systems designed for long-term readability.</motion.p>
            </motion.div>

            {/* Sequence area with center spine */}
            <div className="relative mt-16 lg:mt-20">
              {/* center spine (one thin line) */}
              <motion.div
                variants={spineVariants}
                className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2"
                style={{ width: '2px', backgroundColor: SPINE_COLOR }}
              />

              <div className="relative">
                <div className="space-y-20 lg:space-y-24">
                  {operationsItems.map((phase, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                      <motion.div
                        key={phase.mark}
                        initial={reduceMotion ? false : 'hidden'}
                        whileInView="visible"
                        variants={isLeft ? timelineLeftVariants : timelineRightVariants}
                        viewport={{ once: false, amount: 0.35 }}
                        className="grid grid-cols-1 lg:grid-cols-12 items-start gap-4"
                      >
                        {/* Left column (content for left items) */}
                        <div className={`lg:col-span-5 ${isLeft ? 'lg:text-right lg:pr-8' : 'lg:col-start-1 lg:invisible'}`}>
                          {isLeft ? (
                            <div className="max-w-[44ch] ml-auto">
                              <div className="text-[0.92rem] font-mono text-[#1E3754]/30">{phase.mark}</div>
                              <h3 className="mt-2 text-[clamp(28px,3.6vw,36px)] font-medium text-[#1E3754]">{phase.heading}</h3>
                              <p className="mt-3 text-[clamp(18px,1.2vw,20px)] leading-[1.6] text-[#1E3754]/75 whitespace-pre-line">{phase.body}</p>
                              <div className="mt-3 text-[0.72rem] uppercase tracking-[0.28em] text-[#1E3754]/40">{phase.rightMeta}</div>
                            </div>
                          ) : null}
                        </div>

                        {/* Center connector column */}
                        <div className="lg:col-span-2 flex justify-center">
                          <div className="relative w-full flex justify-center items-start">
                            {/* horizontal connector from spine to node (fixed equal length, anchors at center) */}
                            <motion.div
                              variants={connectorVariants}
                              className="absolute"
                              style={{
                                top: '32px',
                                height: '2px',
                                backgroundColor: CONNECTOR_COLOR,
                                width: CONNECTOR_WIDTH,
                                ...(isLeft ? { right: '50%' } : { left: '50%' }),
                                transformOrigin: isLeft ? 'right center' : 'left center'
                              }}
                            />

                            {/* circular node centered on the spine */}
                            <motion.div
                              variants={nodeVariants}
                              className="relative z-10 mt-0"
                              style={{ left: '50%', transform: 'translateX(-50%)' }}
                            >
                              <div className="w-4 h-4 rounded-full bg-white border border-[#1E3754]/20 shadow-sm" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Right column (content for right items) */}
                        <div className={`lg:col-span-5 ${!isLeft ? 'lg:text-left lg:pl-8' : 'lg:col-start-8 lg:invisible'}`}>
                          {!isLeft ? (
                            <div className="max-w-[44ch]">
                              <div className="text-[0.92rem] font-mono text-[#1E3754]/30">{phase.mark}</div>
                              <h3 className="mt-2 text-[clamp(28px,3.6vw,36px)] font-medium text-[#1E3754]">{phase.heading}</h3>
                              <p className="mt-3 text-[clamp(18px,1.2vw,20px)] leading-[1.6] text-[#1E3754]/75 whitespace-pre-line">{phase.body}</p>
                              <div className="mt-3 text-[0.72rem] uppercase tracking-[0.28em] text-[#1E3754]/40">{phase.rightMeta}</div>
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
        </div>
      </motion.section>

      <motion.section
        ref={contactRef}
        id="contact"
        style={reduceMotion ? { paddingTop: '8rem', paddingBottom: '8rem' } : { paddingTop: '8rem', paddingBottom: '8rem', ...contactExit }}
        className="relative overflow-hidden bg-[#F5F5F2] border-t border-[#1E3754]/8"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className={pageFrame}>
          <div className="mx-auto max-w-[84rem] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Statement (7/12 width) */}
            <div className="lg:col-span-7 space-y-6">
              <motion.span variants={headingLineVariants} custom={0} className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#1E3754]/52 block">
                QUIET INVITATION
              </motion.span>
              <motion.h2 variants={contactStatementVariants} className="text-[clamp(2.2rem,4.2vw,3.6rem)] font-light leading-[1.1] tracking-[-0.05em] text-[#1E3754] max-w-[16ch]">
                A discreet conversation, if appropriate.
              </motion.h2>
              <motion.p variants={bodyParagraphVariants} className="text-[0.98rem] font-light leading-[1.8] text-[#1E3754]/68 max-w-[28rem]">
                We welcome formal inquiries from families, trustees, and institutional advisors seeking long-term governance continuity and structured stewardship frameworks.
              </motion.p>
            </div>

            {/* Right Side: Inquiry Card (5/12 width) */}
            <motion.div variants={cardStaggerVariants} custom={1} className="lg:col-span-5 w-full">
              <div className="flex flex-col justify-between border border-[#1E3754]/8 bg-[#FDFBF7] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[#1E3754]/16">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[0.62rem] uppercase tracking-[0.26em] text-[#1E3754]/36">01 / SECURE INQUIRY</span>
                    <span className="h-px flex-1 bg-[#1E3754]/8" />
                  </div>
                  <p className="text-[0.92rem] font-light leading-[1.7] text-[#1E3754]/62">
                    Request our institutional memorandum, governance overview, or arrange a private introductory conversation.
                  </p>
                  
                  <a
                    href="mailto:office@singularisfamilyoffice.com"
                    className="group relative flex items-center justify-between border-b border-[#1E3754]/12 pb-4 text-[0.82rem] font-semibold uppercase tracking-[0.25em] text-[#1E3754] transition-all duration-300 hover:border-[#1E3754]/30 mt-6"
                  >
                    <span>Request contact</span>
                    <span className="text-[1rem] transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-[#1E3754]/8 pt-6 mt-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[#1E3754]/34">OFFICE EMAIL</span>
                    <span className="text-[0.82rem] font-medium text-[#1E3754]/72 truncate" title="office@singularisfamilyoffice.com">office@singularisfamilyoffice.com</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[#1E3754]/34">CHANNEL</span>
                    <span className="text-[0.82rem] font-medium text-[#1E3754]/72">PGP SECURED</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default HomePage;
