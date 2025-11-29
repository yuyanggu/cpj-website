import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgScreenshot20251128At113229Pm1 from "figma:asset/9fd90dde554b794ada43fa5e8d88c78169ac2edd.png";
import imgScreenshot20251128At113330Pm1 from "figma:asset/12ef6303f73612981a913c2b0a48b85156ea2455.png";
import imgScreenshot20251129At120038Am1 from "figma:asset/bca916519359fca4f0fbcde426c49aa95ea0deea.png";
import videoBodySimple from "../assets/body-simple.mp4";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 10</p>
            <p>building a movement and body based prototype</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="basis-0 grow max-w-[368px] min-h-px min-w-px shrink-0 sticky top-0" data-name="Contact Info">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start max-w-inherit pl-0 pr-[10px] py-0 relative w-full">
          <Bio />
        </div>
      </div>
    </div>
  );
}

function AboutMeSection() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative text-white w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-full">Expanding beyond breath</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`After the breath prototype feedback, Andreas pushed me to think about how the whole body can come into the interaction, not just isolated physiological signals. He pointed out that somaesthetics links directly to performance art and dance. While that's not my direction, it's a useful place to look for inspiration. He recommended MoveNet for pose detection as a practical starting point.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p>{`This reframes the problem. I'd been thinking about somatic input as discrete data points (breath rate, heart rate, gesture) when the body actually communicates through integrated movement, posture, and spatial presence.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Image() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[115.242px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[206px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251128At113229Pm1}
        alt=""
        containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        className="absolute h-[105.49%] left-[-6.68%] max-w-none top-[-5.49%] w-[112.12%]"
      />
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 bg-[#7a7a7a] content-stretch flex flex-col grow h-full items-start min-h-px min-w-px overflow-clip relative rounded-[2px] shrink-0" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251128At113330Pm1}
        alt=""
        containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[276px] items-start relative shrink-0 w-[709px]">
      <Image />
      <Image1 />
    </div>
  );
}

function AboutMeSection1() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">Body, Movement, Language: Bill T. Jones Collaboration</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <span>{`I found `}</span>
            <a className="[text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://experiments.withgoogle.com/billtjonesai" target="_blank" rel="noopener noreferrer">
              <span className="[text-underline-position:from-font] decoration-solid leading-[2] text-base">{`Google's collaboration with choreographer Bill T. Jones`}</span>
            </a>
            <span>
              {`, where they used pose detection to explore how movement translates into visual and linguistic output. What's interesting was that the team creating this were not trying to quantify movement into metrics. Instead they're treating movement as having inherent meaning that the system responds to. A slow, grounded stance produces different output than quick, elevated gestures. `}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              Even though the technologist creating this experiment started with complex prototypes using all 17 PoseNet keypoints and elaborate visuals, but through working with the dancers they systematically stripped everything down until only what was needed remained. The final experiment uses a single body point to trail spoken words across the screen, foregrounding the human and story while technology becomes invisible means.
            </span>
          </p>
          <Frame2 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">This maps directly onto my breath prototype problem, where I was treating technical capability (capturing breath data) as the achievement when what matters is what that data helps convey. The work shows that reducing complexity often strengthens meaning through fewer points, simpler visuals, and focus on what the person expresses rather than what the system detects.</p>
        </div>
      </div>
    </section>
  );
}

function Image2() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[369px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251129At120038Am1}
        alt=""
        containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function AboutMeSection2() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">Open source sketches as learning tool</h2>
          <Image2 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              <span>{`The project open sourced a `}</span>
              <a className="[text-underline-position:from-font] cursor-pointer decoration-solid font-sans font-normal tracking-[-0.15px] underline" href="https://github.com/googlecreativelab/posenet-sketchbook" target="_blank" rel="noopener noreferrer">
                <span className="[text-underline-position:from-font] decoration-solid leading-[2] text-base">{`PoseNet sketchbook `}</span>
              </a>
              with all the starter experiments they built during development. This gives me practical code to learn from and reveals useful technical details: PoseNet recognizes pedestrian human positions better than unusual forms like extreme dance poses. Some points (nose) are more consistent than others (elbows, wrists). Multi-pose mode works best when multiple people are expected, otherwise it tries to interpret everyone as one person. The model has no depth sense, but you can calculate scale using distance between consistent points like eyes.
            </p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>{`For movement tracking specifically: MoveNet could capture whole body engagement, letting users stand, shift weight, gesture rather than sit still with sensors. But adding full body tracking to breath and heart rate risks complexity without purpose. The question isn't whether I can combine modalities but whether combining them helps convey something that single modalities cannot.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Image3() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[2px] shrink-0" data-name="Image">
      <div className="relative shrink-0 w-[709px]" data-name="body-simple 1">
        <video autoPlay muted className="w-full h-auto max-w-none object-contain rounded-[2px]" controlsList="nodownload" loop playsInline>
          <source src={videoBodySimple} />
        </video>
      </div>
    </div>
  );
}

function AboutMeSection3() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">Experiment 5</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">Using the open-sourced PoseNet sketchbook as foundation, I built a movement-based sketch that generates particles from body motion. The setup uses MoveNet for pose detection (ml5.js implementation) tracking all body keypoints in real-time.</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">{`The goal was to test whether movement tracking feels more naturally embodied than isolated breath sensing, and whether visual response to movement quality creates the contemplative space I'm looking for.`}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>The system generates particles proportional to movement speed. Faster movement creates more particles with higher velocity, slower movement produces fewer, gentler traces. Each particle has soft physics with damping and drift, creating fluid trails that fade gradually.</p>
          </div>
          <Image3 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            {`Simple user test & feedback: `}
            <br aria-hidden="true" />
            {`After testing the sketch with 3 people it revealed mixed results. The particle trails create a sense of the body leaving traces in digital space, which feels closer to embodied presence than the breath visualization. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`But the system still reads as responsive graphics rather than completing a somatic loop. The particles happen on screen while my body remains in physical space. There's no feedback that engages the body itself, just visual confirmation that movement was detected.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`The particles are more visually interesting than generic wave forms, but they don't solve the fundamental issue of embodied response.`}
          </p>
          <a className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] underline w-[705px] whitespace-pre-wrap" href="https://editor.p5js.org/yuyanggu/sketches/7t1OkX_fB" target="_blank" rel="noopener noreferrer">{`See prototype  ↗`}</a>
        </div>
      </div>
    </section>
  );
}

function CompanyAndTime() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Company and time">
      <Link
        to="/week/11"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Navigate to Week 11"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 11 ↗
      </Link>
    </div>
  );
}

function TitleSection() {
  return (
    <section className="basis-0 box-border content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-[220px] p-0 relative shrink-0" data-name="Title section">
      <CompanyAndTime />
    </section>
  );
}

function Job() {
  return (
    <section aria-label="Work experience entry 1" className="basis-0 box-border content-start flex flex-wrap gap-[30px] grow items-start min-h-px min-w-px pb-0 pt-[20px] px-0 relative shrink-0" data-name="Job 4">
      <TitleSection />
    </section>
  );
}

function Footer() {
  return (
    <footer className="box-border content-stretch flex items-end justify-between px-0 py-[20px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Job />
    </footer>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start justify-center pl-[20px] pr-0 py-0 relative w-full">
          <AboutMeSection />
          <AboutMeSection1 />
          <AboutMeSection2 />
          <AboutMeSection3 />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <main className="box-border content-stretch flex gap-[20px] items-start max-w-[1440px] p-0 relative shrink-0 w-full" tabIndex={-1}>
      <ContactInfo />
      <Frame1 />
    </main>
  );
}

export function Week10() {
  return (
    <div className="bg-black relative size-full" data-name="Desktop">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[10px] pt-[20px] px-[30px] relative size-full">
          <Header paddingBottom="pb-[56px]" />
          <Frame />
        </div>
      </div>
    </div>
  );
}
