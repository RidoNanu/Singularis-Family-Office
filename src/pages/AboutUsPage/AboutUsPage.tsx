import { motion, useReducedMotion } from 'framer-motion';
import about2 from '../../assets/imagery/Revathi-Anand-detail-img-01.webp';
import about1 from '../../assets/imagery/aravind-thondan-detail-img-01.webp';

const easing = [0.22, 1, 0.36, 1] as const;

const headingLineVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing,
      delay: i * 0.15
    }
  })
};

const bodyParagraphVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing,
      delay: 0.3
    }
  }
};

const cinematicImageVariants = {
  hidden: { y: 30, scale: 1.02, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing
    }
  }
};

export function AboutUsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-white overflow-hidden">
      {/* ── PROFILE 1: REVATHI ANAND ── */}
      {/* Section 1: Header (Dark Blue - #1E3754) */}
      <motion.section
        className="relative bg-[#1E3754] pt-32 pb-44 sm:pt-40 sm:pb-52 lg:pt-48 lg:pb-64 text-center px-6"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-[84rem] relative flex flex-col items-center">
          <motion.h1
            variants={headingLineVariants}
            custom={0}
            className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-light leading-none tracking-[0.02em] text-white uppercase font-serif-elegant mb-5"
          >
            ABOUT US
          </motion.h1>
          <motion.p
            variants={headingLineVariants}
            custom={1}
            className="text-[0.68rem] sm:text-[0.76rem] font-light uppercase tracking-[0.24em] text-[#F5F5F2]/60"
          >
            Meet the Team Behind the Agency
          </motion.p>
        </div>

        {/* Horizontal Divider at the bottom of the section */}
        <div className="absolute bottom-0 left-0 right-0 border-b border-black z-10" />

        {/* Center portrait image overlapping both sections */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-[240px] sm:w-[320px] lg:w-[360px] aspect-[3/4]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cinematicImageVariants}
            className="w-full h-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)] border border-black/10 bg-[#1E3754]"
          >
            <img
              src={about2}
              alt="Revathi Anand"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Description (White) */}
      <motion.section
        className="bg-white pt-[160px] sm:pt-[220px] lg:pt-[300px] pb-24 sm:pb-32 lg:pb-40 text-center px-6 sm:px-12 lg:px-16"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-[84rem]">
          <motion.h2
            variants={headingLineVariants}
            custom={0}
            className="text-[#1E3754] text-[2.2rem] sm:text-[3.2rem] font-light tracking-[-0.04em] mb-1.5"
          >
            Revathi Anand
          </motion.h2>
          <motion.p
            variants={headingLineVariants}
            custom={1}
            className="text-[0.66rem] sm:text-[0.72rem] uppercase tracking-[0.22em] text-[#1E3754]/45 font-mono mb-12 sm:mb-16"
          >
            Founder
          </motion.p>

          {/* Symmetrical Two-Column Editorial Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-[58rem] mx-auto text-left">
            <motion.p
              variants={bodyParagraphVariants}
              className="text-[0.96rem] sm:text-[1.02rem] font-light leading-[1.8] text-[#1E3754]/75 whitespace-pre-line"
            >
              Revathi has been part of Singularis Wealth since 2012 and has played a critical role in setting up operations for the firm over the years. Revathi’s current responsibilities include monitoring client’s portfolios and providing tailored financial solutions to help them achieve their financial goals.
            </motion.p>
            <motion.p
              variants={bodyParagraphVariants}
              className="text-[0.96rem] sm:text-[1.02rem] font-light leading-[1.8] text-[#1E3754]/75 whitespace-pre-line"
            >
              Revathi’s academic credentials include Associate Financial Planner from the Financial Planning Standards Board of India, Behavioural Finance course from Duke University, Investment advisor level one and level two qualifications from the National Institute of Securities Markets. She also holds a Three Majors Bachelor’s degree from Bangalore University (BSc -Statistics, Mathematics and Computer Science). Before joining at Singularis Wealth, worked with TATA Consultancy Services for a year.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* ── PROFILE 2: ARAVIND THONDAN ── */}
      {/* Section 3: Header (Dark Blue - #1E3754) */}
      <motion.section
        className="relative bg-[#1E3754] pt-32 pb-44 sm:pt-40 sm:pb-52 lg:pt-48 lg:pb-64 text-center px-6"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Horizontal Divider at the bottom of the section */}
        <div className="absolute bottom-0 left-0 right-0 border-b border-black z-10" />

        {/* Center portrait image overlapping both sections */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-[240px] sm:w-[320px] lg:w-[360px] aspect-[3/4]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cinematicImageVariants}
            className="w-full h-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)] border border-black/10 bg-[#1E3754]"
          >
            <img
              src={about1}
              alt="Aravind Thondan"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Section 4: Description (White) */}
      <motion.section
        className="bg-white pt-[160px] sm:pt-[220px] lg:pt-[300px] pb-24 sm:pb-32 lg:pb-40 text-center px-6 sm:px-12 lg:px-16"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-[84rem]">
          <motion.h2
            variants={headingLineVariants}
            custom={0}
            className="text-[#1E3754] text-[2.2rem] sm:text-[3.2rem] font-light tracking-[-0.04em] mb-1.5"
          >
            Aravind Thondan
          </motion.h2>
          <motion.p
            variants={headingLineVariants}
            custom={1}
            className="text-[0.66rem] sm:text-[0.72rem] uppercase tracking-[0.22em] text-[#1E3754]/45 font-mono mb-12 sm:mb-16"
          >
            Co-Founder
          </motion.p>

          {/* Symmetrical Two-Column Editorial Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-[58rem] mx-auto text-left">
            <div className="space-y-6">
              <motion.p
                variants={bodyParagraphVariants}
                className="text-[0.96rem] sm:text-[1.02rem] font-light leading-[1.8] text-[#1E3754]/75"
              >
                Aravind Thondan founded Singularis Wealth in 2011 with a clear purpose: to use wealth creation as a means to help people fulfill their life dreams. With over 18 years of experience in investment services, he has built Singularis on the principles of simplicity, compounding, and goal-focused investing.
              </motion.p>
              <motion.p
                variants={bodyParagraphVariants}
                className="text-[0.96rem] sm:text-[1.02rem] font-light leading-[1.8] text-[#1E3754]/75"
              >
                He believes that staying true to one’s values and putting people first builds enduring trust—with clients, within the team, and across partnerships. At Singularis, this has led to a strong culture of research, transparency, and long-term thinking.
              </motion.p>
              <motion.p
                variants={bodyParagraphVariants}
                className="text-[0.96rem] sm:text-[1.02rem] font-light leading-[1.8] text-[#1E3754]/75"
              >
                A passionate advocate for financial literacy, Aravind regularly conducts awareness sessions across corporates, educational institutions, and community forums. He also hosts insightful conversations with fund managers and industry experts on the YouTube channel “Compounding Happiness”, where he shares actionable investment insights with a wider audience.
              </motion.p>
            </div>
            <div className="space-y-6">
              <motion.p
                variants={bodyParagraphVariants}
                className="text-[0.96rem] sm:text-[1.02rem] font-light leading-[1.8] text-[#1E3754]/75"
              >
                He has held leadership roles such as Past Chair of CII Young Indians (Yi) Bengaluru Chapter and Past President of the Garden City University Alumni Association. In 2022, he represented India at the G20 Young Entrepreneurs Alliance (G20 YEA) Summit in Hamburg, Germany.
              </motion.p>
              <motion.p
                variants={bodyParagraphVariants}
                className="text-[0.96rem] sm:text-[1.02rem] font-light leading-[1.8] text-[#1E3754]/75"
              >
                Aravind has completed specialized programs like The Global Financial Crisis from Yale University and Global Trends for Business and Society from the University of Pennsylvania, adding global depth to his investment philosophy.
              </motion.p>
              <motion.p
                variants={bodyParagraphVariants}
                className="text-[0.96rem] sm:text-[1.02rem] font-light leading-[1.8] text-[#1E3754]/75"
              >
                Before starting Singularis, Aravind worked with leading investment firms such as Hexagon Capital and Alchemy Capital, where he developed strong expertise in portfolio management and client advisory.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default AboutUsPage;