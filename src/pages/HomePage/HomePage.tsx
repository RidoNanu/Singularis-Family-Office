import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HeroSection } from '../../sections/home/HeroSection';
import serviceImage from '../../assets/imagery/service.jpg';
import continuityImage from '../../assets/imagery/continuity.png';

const pageFrame = 'mx-auto max-w-[92rem] px-6 sm:px-8 lg:px-12';
const sectionSpacing = 'py-20 sm:py-24 lg:py-28';
const easing = [0.16, 1, 0.3, 1] as const;
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

const staggerMotion = { hidden: {}, visible: {} } as const;
const itemMotion = { hidden: {}, visible: {} } as const;
const sectionMotion = { hidden: {}, visible: {} } as const;

const operationalSteps = [
  'Define priorities and oversight',
  'Sequence review cadence',
  'Align execution with governance',
];

const beltCards: BeltCard[] = [
  {
    id: 'decision-pathways',
    kind: 'text',
    label: '01 / DECISION PATHWAYS',
    title: 'Decision pathways',
    body: 'Clear responsibility structures reduce ambiguity and preserve continuity during complex transitions.',
    width: 'clamp(16rem, 82vw, 20rem)',
    height: '16rem',
    meta: [
      { key: 'Focus', val: 'Review Cadence' },
      { key: 'Mode', val: 'Governed' },
    ],
  },
  {
    id: 'hallway-image',
    kind: 'image',
    label: 'Image / Measure',
    image: serviceImage,
    imageAlt: 'Architectural interior detail',
    note: 'Measured environments reduce operational noise.',
    width: 'clamp(18rem, 88vw, 28rem)',
    height: '19rem',
  },
  {
    id: 'risk-awareness',
    kind: 'text',
    label: '02 / RISK AWARENESS',
    title: 'Risk awareness',
    body: 'Signals are reviewed without excess urgency, allowing governance to remain proportionate and stable.',
    width: 'clamp(16rem, 82vw, 22rem)',
    height: '16rem',
    meta: [
      { key: 'Focus', val: 'Signal Review' },
      { key: 'Mode', val: 'Proportionate' },
    ],
  },
  {
    id: 'quote-card',
    kind: 'quote',
    label: 'Quote / Continuity',
    quote: 'Clarity compounds quietly over time.',
    note: 'Institutional continuity depends on readable systems.',
    width: 'clamp(20rem, 90vw, 30rem)',
    height: '17rem',
  },
  {
    id: 'review-cadence',
    kind: 'text',
    label: '03 / REVIEW CADENCE',
    title: 'Review cadence',
    body: 'Measured checkpoints maintain institutional discipline without creating unnecessary operational pressure.',
    width: 'clamp(16rem, 82vw, 23rem)',
    height: '16rem',
    meta: [
      { key: 'Focus', val: 'Quarterly Review' },
      { key: 'Mode', val: 'Disciplined' },
    ],
  },
  {
    id: 'detail-image',
    kind: 'image',
    label: 'Image / Atmosphere',
    image: serviceImage,
    imageAlt: 'Structured office interior detail',
    note: 'Atmosphere reflects governance philosophy.',
    width: 'clamp(18rem, 88vw, 26rem)',
    height: '19rem',
  },
  {
    id: 'governance-lens',
    kind: 'text',
    label: '04 / GOVERNANCE LENS',
    title: 'Governance lens',
    body: 'Oversight remains visible, structured, and proportional to long-term objectives.',
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
    body: 'Execution stays aligned with institutional priorities, context, and intergenerational continuity.',
    width: 'clamp(16rem, 84vw, 24rem)',
    height: '16rem',
    meta: [
      { key: 'Focus', val: 'Execution' },
      { key: 'Mode', val: 'Aligned' },
    ],
  },
];
function BeltCardShell({ card }: { card: BeltCard }) {
  const shellClass = 'group relative flex-shrink-0 overflow-hidden rounded-sm border border-[#1E3754]/10 bg-[#F8F5EF] shadow-[0_20px_60px_rgba(30,55,84,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#1E3754]/18 hover:shadow-[0_26px_72px_rgba(30,55,84,0.08)]';

  if (card.kind === 'image') {
    return (
      <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: easing }} className={shellClass} style={{ width: card.width, height: card.height }}>
        <div className="relative h-full w-full overflow-hidden">
          <img src={card.image} alt={card.imageAlt} className="h-full w-full object-cover object-center grayscale contrast-[0.94] transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.12))]" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="max-w-[18ch] text-[0.92rem] leading-[1.65] text-[#1E3754]/84">{card.note}</p>
          </div>
        </div>
      </motion.article>
    );
  }

  if (card.kind === 'quote') {
    return (
      <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: easing }} className={shellClass} style={{ width: card.width, height: card.height }}>
        <div className="flex h-full flex-col justify-between p-6 sm:p-7 lg:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-[#1E3754]/8 pb-4">
            <span className="text-[0.66rem] uppercase tracking-[0.28em] text-[#1E3754]/38">Quote</span>
            <span className="h-px flex-1 bg-[#1E3754]/8" />
          </div>
          <div className="space-y-5">
            <p className="max-w-[16ch] text-[clamp(1.9rem,2.8vw,2.7rem)] font-light leading-[0.98] tracking-[-0.05em] text-[#1E3754]">“{card.quote}”</p>
            <p className="max-w-[18ch] text-[0.93rem] leading-[1.75] text-[#1E3754]/68">{card.note}</p>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: easing }} className={shellClass} style={{ width: card.width, height: card.height }}>
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
    </motion.article>
  );
}

export function HomePage() {
  const reduceMotion = useReducedMotion();
  const [beltHovered, setBeltHovered] = useState(false);

  return (
    <main className="bg-white">
      <HeroSection />

      <motion.section
        id="presence"
        className="relative w-full min-h-[120vh] flex flex-col justify-between py-24 lg:py-32 xl:py-40 bg-white border-t border-[#1E3754]/6 overflow-hidden"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        variants={staggerMotion}
      >
        <div className="w-full flex justify-center px-6 sm:px-8 lg:px-12">
          <motion.p variants={itemMotion} className="text-[0.66rem] font-semibold uppercase tracking-[0.45em] text-[#1E3754]/40">
            Institutional Presence
          </motion.p>
        </div>

        <div className="w-full max-w-[84rem] mx-auto px-6 sm:px-8 lg:px-12 my-auto py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div variants={itemMotion} className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm bg-[#1E3754]/5 border border-[#1E3754]/8">
              <img src={serviceImage} alt="Institutional Presence" className="h-full w-full object-cover object-center transition-transform duration-[1.2s] ease-out hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start text-left lg:pl-4">
            <motion.h2 variants={itemMotion} className="text-[#1E3754] font-light tracking-[-0.05em] text-[clamp(2.4rem,4.8vw,4.2rem)] leading-[0.95] max-w-[15ch]">
              A quiet office with<br />structure already in<br />place.
            </motion.h2>

            <motion.div variants={itemMotion} className="my-8 h-px w-20 bg-[#1E3754]/14" />

            <motion.p variants={itemMotion} className="max-w-[28rem] text-[1.02rem] sm:text-[1.08rem] font-light leading-[1.75] text-[#1E3754]/68">
              Singularis Family Office is framed with restraint, proportion, and composure.
              The atmosphere is intentionally open so the office reads as institutional rather
              than promotional.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section
        id="philosophy"
        className="relative min-h-[140vh] overflow-hidden border-y border-[#1E3754]/6 bg-white"
      >
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,55,84,0.02),transparent_60%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[140vh] max-w-[92rem] flex-col px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <motion.p variants={itemMotion} className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#1E3754]/44">
              Governance & structural oversight
            </motion.p>
            <motion.h2 variants={itemMotion} className="mt-8 mx-auto max-w-[14ch] text-[clamp(3rem,6vw,5.4rem)] font-light leading-[0.92] tracking-[-0.06em] text-[#1E3754]">
              Structure that stays<br />readable.
            </motion.h2>
            <motion.p variants={itemMotion} className="mt-8 mx-auto max-w-[46rem] text-[1rem] leading-[2] text-[#1E3754]/70 sm:text-[1.08rem]">
              Institutional systems should reduce friction, clarify intent, and preserve continuity across time.
              The office operates through visible cadence, measured oversight, and calm operational structure.
            </motion.p>
          </div>

          <div className="relative flex min-h-[60vh] items-end overflow-hidden pt-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.88)_8%,rgba(255,255,255,0)_14%,rgba(255,255,255,0)_86%,rgba(255,255,255,0.88)_92%,rgba(255,255,255,0.96))]" />

            <motion.div
              className="flex w-max items-stretch"
              onMouseEnter={() => setBeltHovered(true)}
              onMouseLeave={() => setBeltHovered(false)}
              animate={reduceMotion ? { x: 0 } : { x: ['-50%', '0%'] }}
              transition={reduceMotion ? undefined : { duration: beltHovered ? 125 : 88, ease: 'linear', repeat: Infinity }}
              style={{ willChange: 'transform' }}
            >
              {[0, 1].map((loopIndex) => (
                <div key={loopIndex} className="flex items-stretch gap-5 pr-5 lg:gap-6 lg:pr-6">
                  {beltCards.map((card) => (
                    <BeltCardShell key={`${loopIndex}-${card.id}`} card={card} />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="continuity"
        className="relative overflow-hidden bg-[#f5f4f1]"
        style={{ paddingTop: '11.25rem', paddingBottom: '11.25rem' }}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.9, ease: easing, staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        {/* ── Background atmosphere words ── */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none" aria-hidden>
          <span className="absolute -left-[6%] top-[8%] text-[clamp(10rem,18vw,22rem)] font-extralight leading-none tracking-[-0.08em] text-[#1E3754]/[0.025]">
            CONTINUITY
          </span>
          <span className="absolute right-[-4%] bottom-[12%] text-[clamp(8rem,14vw,18rem)] font-extralight leading-none tracking-[-0.06em] text-[#1E3754]/[0.025]">
            LEGACY
          </span>
          <span className="absolute left-[30%] top-[52%] text-[clamp(6rem,12vw,15rem)] font-extralight leading-none tracking-[-0.07em] text-[#1E3754]/[0.025]">
            ALIGNMENT
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16">

          {/* ── Institutional Header (eyebrow removed) ── */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } } }}
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between pb-8 mb-16 lg:mb-20"
          >
            <div />
            <p className="max-w-[26rem] text-[0.88rem] leading-[1.75] text-[#1E3754]/55 text-right hidden sm:block">
              Structured continuity requires governance systems<br />
              that remain readable across generations.
            </p>
          </motion.div>

          {/* ── Simple Editorial Two-Column Split Layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Left Side: Content Column (7/12 width) */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easing } } }}
              className="lg:col-span-7 flex flex-col justify-between gap-12"
            >
              <div className="space-y-8">
                {/* Heading removed as requested */}
                
                {/* Body paragraphs removed as requested */}
              </div>

              {/* Staggered Vertical Pillars */}
              <div className="space-y-8 pt-10 border-t border-[#1E3754]/10">
                {[
                  {
                    mark: '01',
                    title: 'SUCCESSION PLANNING',
                    body: 'Leadership transitions are structured gradually through visible preparation, defined governance participation, and long-term institutional mentorship.',
                    meta: 'TIMELINE → Multi-generational'
                  },
                  {
                    mark: '02',
                    title: 'GOVERNANCE DESIGN',
                    body: 'Decision structures are intentionally layered to preserve accountability, clarity of authority, and continuity during periods of transition.',
                    meta: 'STRUCTURE → Layered Accountability'
                  },
                  {
                    mark: '03',
                    title: 'STEWARDSHIP FRAMEWORKS',
                    body: 'Capital preservation, governance responsibility, and intergenerational continuity are treated as interconnected systems.',
                    meta: 'FOCUS → Intergenerational Care'
                  }
                ].map((item) => (
                  <div key={item.mark} className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start">
                    <span className="text-[0.64rem] font-mono text-[#1E3754]/30 mt-1">{item.mark}</span>
                    <div className="space-y-2">
                      <h3 className="text-[0.9rem] font-semibold tracking-[0.2em] text-[#1E3754]/70 uppercase">
                        {item.title}
                      </h3>
                      <p className="text-[0.92rem] font-light leading-[1.7] text-[#1E3754]/60">
                        {item.body}
                      </p>
                      <span className="inline-block text-[0.62rem] font-medium tracking-[0.15em] text-[#1E3754]/40 uppercase mt-1">
                        {item.meta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Architectural Image Column (5/12 width) */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easing } } }}
              className="lg:col-span-5 h-full relative rounded-xl overflow-hidden bg-white p-4"
            >
                <div className="relative aspect-[3/4] lg:aspect-auto lg:absolute lg:inset-0 w-full h-full overflow-hidden rounded-xl bg-[#ebe8e2]">
                  <img
                    src={continuityImage}
                    alt="Institutional architectural interior"
                    className="h-full w-full object-cover object-center grayscale-[20%] contrast-[0.96] saturate-[0.9] rounded-xl"
                  />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(30,55,84,0.08))]" />
              </div>
            </motion.div>

          </div>

        </div>
      </motion.section>

      <motion.section
        id="operations"
        className={sectionSpacing}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-18% 0px -18% 0px' }}
        variants={sectionMotion}
      >
        <div className={pageFrame}>
          <div className="mx-auto max-w-[86rem]">
            <motion.p variants={itemMotion} className="text-[0.72rem] font-medium uppercase tracking-[0.34em] text-[#1E3754]/52">
              Strategic operational coordination
            </motion.p>
            <motion.div variants={itemMotion} className="mt-5 max-w-[19ch] text-[clamp(2.2rem,4.8vw,4.4rem)] font-light leading-[0.92] tracking-[-0.06em] text-[#1E3754]">
              A disciplined operational rhythm.
            </motion.div>

            <motion.div variants={staggerMotion} initial={false} className="mt-14 border-t border-[#1E3754]/10">
              {operationalSteps.map((item, index) => (
                <motion.div key={item} variants={itemMotion} className="grid gap-5 border-b border-[#1E3754]/10 py-6 lg:grid-cols-[0.16fr_0.84fr] lg:items-start lg:py-7">
                  <span className="text-[0.72rem] uppercase tracking-[0.3em] text-[#1E3754]/42">0{index + 1}</span>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                    <p className="max-w-[28rem] text-[1rem] leading-[1.9] text-[#1E3754]/74 sm:text-[1.06rem]">{item}</p>
                    <span className="text-[0.72rem] uppercase tracking-[0.26em] text-[#1E3754]/40">Sequenced</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className={`${sectionSpacing} border-t border-[#1E3754]/6 bg-[linear-gradient(180deg,rgba(30,55,84,0.012),rgba(30,55,84,0.006))]`}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-18% 0px -18% 0px' }}
        variants={sectionMotion}
      >
        <div className={pageFrame}>
          <div className="mx-auto flex max-w-[42rem] flex-col items-center text-center">
            <motion.p variants={itemMotion} className="text-[0.72rem] font-medium uppercase tracking-[0.34em] text-[#1E3754]/52">
              Quiet invitation
            </motion.p>
            <motion.h2 variants={itemMotion} className="mt-8 max-w-[12ch] text-[clamp(2.1rem,4vw,3.6rem)] font-light leading-[0.96] tracking-[-0.05em] text-[#1E3754]">
              A discreet conversation, if appropriate.
            </motion.h2>

            <motion.a
              variants={itemMotion}
              href="mailto:office@singularisfamilyoffice.com"
              className="mt-12 inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#1E3754]/78 transition-colors hover:text-[#1E3754]"
            >
              Request contact
              <span className="h-px w-8 bg-[#1E3754]/35 transition-all duration-500 hover:w-12" />
            </motion.a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default HomePage;
