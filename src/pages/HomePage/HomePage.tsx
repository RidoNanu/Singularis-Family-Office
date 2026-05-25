import { useState, useRef, RefObject } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { HeroSection } from '../../sections/home/HeroSection';
import { cn } from '../../utils/cn';
import serviceImage from '../../assets/imagery/service.jpg';
import continuityImage from '../../assets/imagery/continuity.png';
import inviteImage from '../../assets/imagery/invite.jpg';

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
const initialY = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40;

const globalRevealVariants = {
  hidden: { opacity: 0, y: initialY },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: easing,
    }
  }
};

// Heading Line stagger reveal
const headingLineVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing,
    }
  }
};

// Paragraph delay reveal
const bodyParagraphVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing,
    }
  }
};

// Cinematic Image reveal
const cinematicImageVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing
    }
  }
};

// Card / Item sequential stagger
const cardStaggerVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing,
    }
  }
};

const timelineLeftVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing
    }
  }
};

const timelineRightVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing
    }
  }
};

const spineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
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
  hidden: { y: initialY, opacity: 0, letterSpacing: '0.02em' },
  visible: {
    y: 0,
    opacity: 1,
    letterSpacing: '-0.05em',
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
};

const presenceImageLeftVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing
    }
  }
};

const presenceContentRightVariants = {
  hidden: { y: initialY, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing,
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};



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
function BeltCardShell({ card, index }: { card: BeltCard; index: number }) {
  const isDark = index % 2 === 1;

  const shellClass = cn(
    'group relative h-[23rem] flex-shrink-0 overflow-hidden border-r transition-colors duration-500 sm:h-[16rem]',
    isDark
      ? 'border-white/10 bg-[#1E3754] hover:bg-[#182F48]'
      : 'border-[#1E3754]/10 bg-[#F8F5EF] hover:bg-[#F3EFE7]'
  );

  return (
    <article className={shellClass} style={{ width: card.width }}>
      <div className="flex h-full flex-col justify-between p-6 sm:p-7 lg:p-8">
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <span
              className={cn(
                'text-[0.66rem] uppercase tracking-[0.28em]',
                isDark ? 'text-[#F5F5F2]/40' : 'text-[#1E3754]/40'
              )}
            >
              {card.label}
            </span>
            <span className={cn('h-px flex-1', isDark ? 'bg-white/10' : 'bg-[#1E3754]/8')} />
          </div>
          <div className="space-y-3">
            <p
              className={cn(
                'text-[1.28rem] font-light leading-[1.25] tracking-[-0.04em] sm:text-[1.42rem]',
                isDark ? 'text-[#F5F5F2]' : 'text-[#1E3754]'
              )}
            >
              {card.title}
            </p>
            <p
              className={cn(
                'max-w-[22ch] text-[0.94rem] leading-[1.85]',
                isDark ? 'text-[#F5F5F2]/70' : 'text-[#1E3754]/68'
              )}
            >
              {card.body}
            </p>
          </div>
        </div>
        <div className={cn('grid gap-4 border-t pt-4 sm:grid-cols-2', isDark ? 'border-white/10' : 'border-[#1E3754]/8')}>
          {(card.meta || []).map((item) => (
            <div key={item.key} className="flex flex-col gap-1">
              <span
                className={cn(
                  'text-[0.6rem] uppercase tracking-[0.22em]',
                  isDark ? 'text-[#F5F5F2]/40' : 'text-[#1E3754]/36'
                )}
              >
                {item.key}
              </span>
              <span
                className={cn(
                  'text-[0.82rem] font-medium',
                  isDark ? 'text-[#F5F5F2]/80' : 'text-[#1E3754]/78'
                )}
              >
                {item.val}
              </span>
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

  const operationsStyle = getExitStyles(operationsRef);

  const contactExit = getExitStyles(contactRef);

  return (
    <main className="bg-white">
      <HeroSection />

      <motion.section
        ref={presenceRef}
        id="presence"
        style={reduceMotion ? {} : presenceExit}
        className="relative w-full min-h-[72vh] flex flex-col justify-between py-8 sm:min-h-[108vh] sm:py-20 lg:min-h-[120vh] lg:py-32 xl:py-40 bg-white border-t border-[#1E3754]/6 overflow-hidden"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="w-full flex justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">
          <motion.p
            variants={headingLineVariants}
            className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40"
          >
            INSTITUTIONAL PRESENCE
          </motion.p>
        </div>

        <div className="w-full max-w-[84rem] mx-auto px-6 sm:px-8 lg:px-12 my-auto py-6 sm:py-14 lg:py-20 grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Left Side: Image Column sliding from Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={presenceImageLeftVariants}
            className="lg:col-span-5 w-full flex justify-center order-last lg:order-none"
          >
            <div className="relative w-full aspect-[3/4] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-xl bg-[#1E3754]/5 border border-[#1E3754]/8">
              
              <img
                src={serviceImage}
                alt="Institutional Presence"
                className="h-full w-full object-cover object-center transition-transform duration-[1.2s] ease-out hover:scale-105 rounded-xl"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
            </div>
          </motion.div>

          {/* Right Side: Content Column sliding from Right */}
          <motion.div
            variants={presenceContentRightVariants}
            className="lg:col-span-7 flex flex-col items-start text-left lg:pl-4"
          >
            <h2 className="text-[#1E3754] font-light tracking-[-0.05em] text-[1.6rem] sm:text-[clamp(2.4rem,4.8vw,4.2rem)] leading-[1.05] max-w-[15ch] flex flex-col">
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} transition={{ delay: 0.06 }} className="inline-block">
                  A quiet institution with
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} transition={{ delay: 0.12 }} className="inline-block">
                  structure already in
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} transition={{ delay: 0.18 }} className="inline-block">
                  place.
                </motion.span>
              </span>
            </h2>
            <motion.div variants={headingLineVariants} transition={{ delay: 0.24 }} className="my-8 h-px w-20 bg-[#1E3754]/14" />
            <motion.p variants={bodyParagraphVariants} className="max-w-[28rem] text-[0.92rem] sm:text-[1.08rem] font-light leading-[1.6] text-[#1E3754]/68">
              Singularis Family Office operates through measured governance, institutional pacing, and long-term operational clarity. The office is intentionally restrained in tone, allowing continuity and stewardship to remain central to every decision structure.
            </motion.p>
            <motion.p variants={bodyParagraphVariants} className="mt-6 text-[0.66rem] sm:text-[0.8rem] uppercase tracking-[0.2em] text-[#1E3754]/45 font-medium leading-[1.6]">
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
              className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#1E3754]/44"
            >
              GOVERNANCE & STRUCTURAL OVERSIGHT
            </motion.p>
            <h2 className="mt-8 mx-auto max-w-[14ch] text-[clamp(3rem,6vw,5.4rem)] font-light leading-[0.92] tracking-[-0.06em] text-[#1E3754] flex flex-col items-center">
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} transition={{ delay: 0.06 }} className="inline-block">
                  Structure that remains
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <motion.span variants={headingLineVariants} transition={{ delay: 0.12 }} className="inline-block">
                  readable.
                </motion.span>
              </span>
            </h2>
            <motion.p
              variants={bodyParagraphVariants}
              transition={{ delay: 0.18 }}
              className="mt-8 mx-auto max-w-[46rem] text-[1rem] leading-[2] text-[#1E3754]/70 sm:text-[1.08rem]"
            >
              Institutional systems should reduce operational friction, preserve clarity, and sustain continuity across time. The office operates through disciplined cadence, visible governance structures, and restrained execution frameworks.
            </motion.p>
          </div>

          <motion.div
            variants={globalRevealVariants}
            className="relative flex min-h-[72vh] items-start overflow-x-hidden overflow-y-visible pt-4 sm:min-h-[60vh] sm:items-end sm:pt-8"
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
                  {beltCards.map((card, idx) => (
                    <BeltCardShell
                      key={`${loopIndex}-${card.id}`}
                      card={card}
                      index={loopIndex * beltCards.length + idx}
                    />
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
        style={reduceMotion ? {} : continuityExit}
        className="relative overflow-hidden bg-[#1E3754] pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-[11.25rem] lg:pb-[11.25rem]"
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
            className="hidden sm:flex sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 mb-16 lg:mb-20"
          >
            <div />
            <motion.p
              variants={bodyParagraphVariants}
              transition={{ delay: 0.12 }}
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
                    transition={{ delay: 0.12 + idx * 0.08 }}
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
            <div className="order-first mb-6 h-full relative bg-transparent p-0 lg:order-none lg:col-span-5 lg:mb-0 lg:bg-transparent lg:p-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cinematicImageVariants}
                className="relative aspect-[5/4] sm:aspect-[3/4] lg:aspect-auto lg:absolute lg:inset-0 w-full h-full overflow-hidden rounded-[1.25rem] lg:rounded-xl lg:bg-transparent"
              >
                <img
                  src={continuityImage}
                  alt="Institutional architectural interior"
                  className="h-full w-full object-cover object-center grayscale-[20%] contrast-[0.96] saturate-[0.9] rounded-[1.25rem] lg:rounded-xl"
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
        className={`${sectionSpacing} overflow-x-hidden`}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-[92rem] px-2 sm:px-8 lg:px-12">
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
                  <motion.span variants={headingLineVariants} transition={{ delay: 0.06 }} className="inline-block">
                    A disciplined
                  </motion.span>
                </span>
                <span className="overflow-hidden inline-block py-1">
                  <motion.span variants={headingLineVariants} transition={{ delay: 0.12 }} className="inline-block">
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
                  className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-[1px] sm:w-[3px] bg-[#1E3754]/[0.14] sm:bg-[#1E3754]/[0.30]"
                />

                <div className="relative">
                <div className="space-y-12 sm:space-y-20 lg:space-y-24">
                  {operationsItems.map((phase, i) => {
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
                              <h3 className="mt-1 sm:mt-2 text-[11px] sm:text-[clamp(28px,3.6vw,36px)] font-medium text-[#1E3754] leading-[1.1] sm:leading-[1.0]">{phase.heading}</h3>
                              <p className="mt-1.5 sm:mt-3 text-[9px] sm:text-[clamp(18px,1.2vw,20px)] leading-[1.35] sm:leading-[1.6] text-[#1E3754]/75 whitespace-pre-line break-words">{phase.body}</p>
                              <div className="mt-1.5 sm:mt-3 text-[0.52rem] sm:text-[0.72rem] uppercase tracking-[0.15em] sm:tracking-[0.28em] text-[#1E3754]/40">{phase.rightMeta}</div>
                            </div>
                          ) : null}
                        </div>

                        {/* Center connector column */}
                        <div className="col-span-2 flex justify-center">
                          <div className="relative w-full flex justify-center items-start">
                            {/* horizontal connector from spine to node (fixed equal length, anchors at center) */}
                            <motion.div
                              variants={connectorVariants}
                              className="absolute h-[1.5px] sm:h-[3px] bg-[#1E3754]/[0.12] sm:bg-[#1E3754]/[0.22] w-[24px] sm:w-[140px] top-[14px] sm:top-[32px]"
                              style={{
                                ...(isLeft ? { right: '50%' } : { left: '50%' }),
                                transformOrigin: isLeft ? 'right center' : 'left center'
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
                              <h3 className="mt-1 sm:mt-2 text-[11px] sm:text-[clamp(28px,3.6vw,36px)] font-medium text-[#1E3754] leading-[1.1] sm:leading-[1.0]">{phase.heading}</h3>
                              <p className="mt-1.5 sm:mt-3 text-[9px] sm:text-[clamp(18px,1.2vw,20px)] leading-[1.35] sm:leading-[1.6] text-[#1E3754]/75 whitespace-pre-line break-words">{phase.body}</p>
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
          <div className="mx-auto max-w-[84rem] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* Left Side: Statement & Actions */}
            <div className="flex flex-col justify-between py-2">
              <div className="space-y-6">
                <motion.span variants={headingLineVariants} className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#1E3754]/52 block">
                  QUIET INVITATION
                </motion.span>
                <motion.h2 variants={contactStatementVariants} className="text-[clamp(2.2rem,4.2vw,3.6rem)] font-light leading-[1.1] tracking-[-0.05em] text-[#1E3754] max-w-[16ch]">
                  A discreet conversation, if appropriate.
                </motion.h2>
                <motion.p variants={bodyParagraphVariants} className="text-[0.98rem] font-light leading-[1.8] text-[#1E3754]/68 max-w-[28rem]">
                  We welcome formal inquiries from families, trustees, and institutional advisors seeking long-term governance continuity and structured stewardship frameworks.
                </motion.p>
                <motion.p variants={bodyParagraphVariants} className="text-[0.92rem] font-light leading-[1.7] text-[#1E3754]/52 max-w-[28rem]">
                  Request our institutional memorandum, governance overview, or arrange a private introductory conversation.
                </motion.p>
              </div>

              {/* Actions & Metadata */}
              <div className="space-y-6 mt-8">
                <motion.div variants={bodyParagraphVariants} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  <a
                    href="mailto:office@singularisfamilyoffice.com"
                    className="inline-flex items-center justify-center rounded-full bg-[#1E3754] px-8 py-3.5 text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#F5F5F2] transition-all duration-300 hover:bg-[#182F48] hover:-translate-y-0.5"
                  >
                    Request contact
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right Side: Image Column */}
            <div className="order-first mb-6 w-full lg:order-none lg:mb-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cinematicImageVariants}
                className="relative w-full aspect-[3/2] overflow-hidden rounded-[1.25rem] lg:rounded-xl lg:bg-transparent"
              >
                <img
                  src={inviteImage}
                  alt="Singularis Office Invitation"
                  className="h-full w-full object-cover object-center rounded-[1.25rem] lg:rounded-xl"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(30,55,84,0.04))]" />
              </motion.div>
            </div>

          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default HomePage;
