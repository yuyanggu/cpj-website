import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage5 from "figma:asset/5c7886954cdfa689701dc24503f67bdd3e6b5905.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[1.45] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 5</p>
            <p>scoping down on research scope and goals</p>
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] tracking-[-0.065px] w-[min-content]">Where the draft stands</h2>
          <ul className="block font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-[15px] tracking-[-0.15px] w-[705px]">
            <li className="mb-0 ms-[22.5px] whitespace-pre-wrap">
              <span className="leading-[1.4]">
                {`The RPO  positions the project as "The Body as an Interface for Therapeutic Dialogue with LLMs" and motivates the work through the limits of text-only chat and disembodiment.`}
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
            </li>
            <li className="mb-0 ms-[22.5px]">
              <span className="leading-[1.4]">
                It draws on Dourish to argue that embodied interaction allows people to act through tools rather than manage them, and uses Chemero to frame why LLMs are not embodied.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
            </li>
            <li className="ms-[22.5px]">
              <span className="leading-[1.4]">Objectives and methods focus on handwriting rhythm and pressure, and bodily cues such as posture and facial expression, developed through Research through Design.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Image() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[531px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[705px]" data-name="Image">
      <AnimatedImage
        src={imgImage5}
        alt=""
        containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function AboutMeSection1() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Reframing "Therapeutic" and Finding Focus</h2>
          <Image />
          <p className="font-sans font-normal leading-[1.4] max-w-[720px] relative shrink-0 text-[15px] text-white tracking-[-0.15px] w-[705px]">This week has been quite revealing. I've been reviewing the draft of my dissertation and discussing feedback with Andreas, and I'm beginning to realise that some of the language and framing I've been using especially around "therapy" and "therapeutic dialogue" might actually be limiting my project rather than helping it.</p>
          <div className="font-sans font-normal leading-[1.4] max-w-[720px] relative shrink-0 text-[15px] text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`Andreas mentioned this too, that framing the research as "therapeutic" could cause problems later when I'm writing up or evaluating it. He encouraged me to be more concrete about what I actually mean by therapeutic. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">I think what I truly care about is reflection – the moments where people can slow down, connect with their bodies, and express something honestly through interaction. That doesn't have to be therapy. It can be reflective, restorative, or simply humanising.</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>So maybe the right move is to shift away from "therapy" and towards embodied reflection or affective interaction. I'm interested in how the body – our movements, gestures, pace – can become a medium for dialogue with AI. That's still about care and presence, but without the clinical overtones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMeSection2() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative text-white w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] tracking-[-0.065px] w-[min-content]">Clarifying My Focus</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-[15px] tracking-[-0.15px] w-[705px]">
            <p className="leading-[1.4] mb-0">
              Another big realisation from this week is that my research still feels too broad. Right now, I'm juggling too many overlapping ideas: embodiment, therapy, handwriting, AI dialogue, reflection. Andreas asked me to define three clear pillars of my research – to give the project more focus and to guide my next steps.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p className="leading-[1.4] mb-0">
              After some thought, I see my three pillars emerging as:
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <ol className="list-decimal mb-0" start={1}>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[1.4]">
                  Embodied Input – exploring how physical actions like handwriting, touch, or movement can communicate mood or intention to an AI system.
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[1.4]">
                  Ambient or Sensory Feedback – investigating how the system can respond non-verbally, using visuals, motion, or subtle cues rather than only text.
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="ms-[22.5px]">
                <span className="leading-[1.4]">
                  Reflective Support – designing the interaction to feel supportive and grounding, but explicitly not clinical or therapeutic.
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
            </ol>
            <p className="leading-[1.4]">Thinking in pillars helps me organise my chaos. It also reminds me that I don't have to solve everything technically. My goal is to provoke questions about embodiment, not to deliver a perfect product.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyAndTime() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Company and time">
      <Link
        to="/week/6"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Visit Week 6 page"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[1.4] relative shrink-0 text-[#ababab] text-[15px] tracking-[-0.15px] underline w-full"
      >
        Week 6 ↗
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

export function Week5() {
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