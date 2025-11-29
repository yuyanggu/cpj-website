import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgScreenshot20251019At60145Pm1 from "figma:asset/a87ccd0ad8b2b8389a355dfa4798cf2fe3170eb7.png";
import imgImg77721 from "figma:asset/4313f3d041848f65614da6b9d216283291e093a7.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 3</p>
            <p>mapping my ideas</p>
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

function Image() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[339px] items-start overflow-clip px-0 py-[22px] relative rounded-[2px] shrink-0 w-[501px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251019At60145Pm1}
        alt=""
        containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
      />
    </div>
  );
}

function AboutMeSection() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pl-0 pr-[60px] py-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Critical journal seminar with Shu Min</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">This week was about making my process visible. I used the critical journal seminar to clarify how I will think in public, then mapped the problem space with classmates to see where energy and evidence align. My aim was to move from broad curiosity to a testable direction without locking the project too early.</p>
          <Image />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">What I learned:</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">The journal is not a scrapbook. It is a thinking tool that links reading, making, and reflection.</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Good entries show cause and effect. What I read, what I made, what changed in my view.</p>
              </li>
              <li className="ms-[22.5px]">
                <p className="leading-[2] mb-0">Evidence needs structure. Quotes, observations, and small studies should be tagged so I can compare across time.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] h-[531px] overflow-clip relative rounded-[2px] shrink-0 w-[712px]" data-name="Image">
      <div className="absolute aspect-[750.667/563] bottom-[-17px] flex items-center justify-center left-[calc(50%+0.5px)] top-[-15px] translate-x-[-50%]">
        <div className="flex-none h-[750.667px] rotate-[270deg] w-[563px]">
          <AnimatedImage
            src={imgImg77721}
            alt=""
            containerClassName="relative size-full"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          />
        </div>
      </div>
    </div>
  );
}

function AboutMeSection1() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Mindmap and class critique w Andreas</h2>
          <Image1 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              What I mapped
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Central prompt: design interventions for communicating with AI in safer, more meaningful ways.</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Why: reduce harm, support self awareness, avoid dependency, address stigma.</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Who and when: students and young adults after stressful events and during everyday reflection.</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">How: start with interaction patterns on common devices. Consider embodied cues like typing cadence, posture, breath.</p>
              </li>
              <li className="ms-[22.5px]">
                <p className="leading-[2] mb-0">Forms: self reflection tools and a repeatable toolkit rather than a one-off spectacle.</p>
              </li>
            </ul>
          </div>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px] whitespace-pre-wrap">{`After mapping my ideas it revealed ambition creep. I was trying to chase harm reduction, companionship, and mindfulness at once.  So I will need one locus I can measure. The strongest concept that resonated in the feedback and sharing was "using the body as an interface". But what does this mean for my research? How can I put it into practice I thought. So I did more research on existing project related to this topic.`}</p>
        </div>
      </div>
    </section>
  );
}

function CompanyAndTime() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Company and time">
      <Link
        to="/week/4"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Visit Week 4 page"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 4 ↗
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

export function Week3() {
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