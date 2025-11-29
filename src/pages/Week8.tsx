import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage7 from "figma:asset/6a9e8c09aa60a69b503180ae671eab1543af50f6.png";
import img54E164A9Cfb64442A241C0A12Fc115Ab1 from "figma:asset/341e52d6f07e325b7ea9efbcc1ddd738003625e5.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 8</p>
            <p>reflecting on my rpo and breaking my leg</p>
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
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[531px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[705px]" data-name="Image">
      <AnimatedImage
        src={imgImage7}
        alt=""
        containerClassName="h-[530px] relative shrink-0 w-[708px]"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function AboutMeSection() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Reflecting on my RPO</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">Reading my RPO and feeding in to Claude I come to realise that the research scope is split between critiquing the existing old way (analysing typing speed and pauses as embodied input) and designing the new way (exploring novel somatic interfaces like breath or gesture). This seem ambitious and risks spending too much time proving a problem that is already well-established (e.g., work Doris may have covered), rather than focusing energy on the concrete design artifact needed for this grad project.</p>
          <Image />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`My proposal's original framing around digital therapy and mental health was too high-stakes and broad. Andreas's feedback emphasised the need for clarity and concrete examples "more meaningful and reflective interactions" fails both tests. What does "meaningful" actually measure? How would I know if the intervention works?`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              So I need a specific context that makes the stakes and evaluation criteria explicit, some of the requirements will be:
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Makes somatic modulation feel necessary rather than gimmicky</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">{`Provides measurable outcomes beyond subjective "meaningfulness"`}</p>
              </li>
              <li className="ms-[22.5px]">
                <p className="leading-[2] mb-0">Grounds the work in actual use rather than speculative scenarios</p>
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
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[531px] items-center justify-center overflow-clip relative rounded-[2px] shrink-0 w-[705px]" data-name="Image">
      <AnimatedImage
        src={img54E164A9Cfb64442A241C0A12Fc115Ab1}
        alt=""
        containerClassName="h-[940px] relative shrink-0 w-[705px]"
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">{`Fracturing my knee & missing formative feedback`}</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">This week I fractured my knee and missed the formative feedback session. The irony is obvious researching embodied interaction while suddenly unable to move freely but the actual experience was more instructive than ironic.</p>
          <Image1 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`With the injury, I had to miss the formative session, this was really shitty timing withoutthe structured critique session it was hard to finalise the research direction. Instead I'm working from secondhand notes, trying to reconstruct what questions would have emerged.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p>{`However it seems the bigger issue is that feedback reveals unconscious assumptions. Without that session, those assumptions stay embedded in the work. I won't discover these gaps until later when they're harder to address.`}</p>
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-[706px]">Reflecting on my injury</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[662px]">
            <p className="leading-[2] mb-0">
              {`The injury made me constantly aware of physical limits. Getting to my desk, adjusting my position, reaching for things all required careful thought. This showed me I'd been taking bodily capacity for granted while planning the prototypes.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p>{`I'm arguing that the body should be the interface while designing for an ideal, capable body. My planned prototypes assume users can sit still for breath tracking, hold steady finger contact for heart rate sensors, and maintain poses for movement detection. The fractured knee showed me how fast "embodied interaction" becomes frustration when your body can't do what the interface expects.`}</p>
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
        to="/week/9"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Navigate to Week 9"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 9 ↗
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

export function Week8() {
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
