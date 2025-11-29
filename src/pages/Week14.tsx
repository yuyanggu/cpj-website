import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgMoodImg3 from "figma:asset/f0e1f1c51702e7d0b024b675f74caa580e69a631.png";
import imgHrImg21 from "figma:asset/0f91f0e3fa4dea0aec602f83c353134d7c51522c.png";
import imgBodyImg11 from "figma:asset/f8a5b36ea4e524d3bfb8561e62eab45f938f08f2.png";
import imgBreath31 from "figma:asset/a6a65327a96e27865b0a6140b56a736ea8f846c5.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 14</p>
            <p>research question refinement and next steps</p>
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
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[299px] items-center justify-center overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgMoodImg3}
        alt=""
        containerClassName="aspect-[4096/2731] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[299px] items-center justify-end overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgHrImg21}
        alt=""
        containerClassName="aspect-[4096/3072] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[299px] items-center justify-center overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgBodyImg11}
        alt=""
        containerClassName="aspect-[4096/2731] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[299px] items-center justify-center overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgBreath31}
        alt=""
        containerClassName="aspect-[4096/2731] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Image />
      <Image1 />
      <Image2 />
      <Image3 />
    </div>
  );
}

function AboutMeSection() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">What the prototypes revealed</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">{`This semester focused on exploring technologies (Arduino sensors, MediaPipe, MoveNet) and developing visual languages through WebGL shaders. I built prototypes testing different somatic modalities, but only the body movement experiment actually integrated an LLM into the workflow. The others proved I could capture embodied input and create responsive visualizations, but they didn't address the core research question about AI interaction.`}</p>
          <Frame2 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`The prototypes did establish some genuine successes. The breath ring created immediate, clear feedback loops that people found naturally engaging. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">{`The 15-second movement ritual with projection successfully transformed the experience from interface monitoring to spatial engagement. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>The shader-based visuals moved beyond generic meditation app aesthetics toward distinctive visual language. The temporal constraints (timed sessions, envelope-based responses) created actual ritual rather than casual interaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMeSection1() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative text-white w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-[706px]">Evolution of the research question</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`The initial proposal asked whether embodied input creates "more meaningful and reflective interactions" with LLMs. This framing assumed the problem was input modality: if we move beyond text to somatic signals, interaction quality would improve. The prototypes suggest this assumption was too simple.`}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">{`The actual question emerging from the work is more specific: When AI systems interpret embodied input, what gets lost in translation between lived somatic experience and computational representation? `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">
              {`This semester was necessary groundwork: learning sensor integration, shader programming, real-time data processing, ML model implementation. These technical capabilities enable the research and produced some genuinely strong results. `}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {`More importantly, the exploration established which modalities have potential. Breath stands out as the strongest candidate: it's universal, connects to emotional states, operates at the threshold of conscious awareness, and creates clear feedback loops. `}
            </p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>Movement works well at projection scale but becomes complicated with multiple simultaneous tracking points. But heart rate and facial expressions both potentially might suffer from involuntary detection making the interaction feel more like surveillance than engagement.</p>
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-[706px]">{`What's working and what needs development`}</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              Strong foundations established:
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Technical capability to capture and process multiple somatic modalities reliably</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Visual language that feels distinctive rather than generic</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Understanding of which modalities (breath especially) have genuine potential</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Evidence that temporal structure and ritual framing create different engagement</p>
              </li>
              <li className="ms-[22.5px]">
                <p className="leading-[2] mb-0">Proof that projection scale transforms interaction quality</p>
              </li>
            </ul>
          </div>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`Gaps requiring next semester's focus:`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Limited integration of AI into the somatic loop (only one prototype included LLM)</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Unclear whether embodied input actually changes reflection quality or just adds novelty</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">No longitudinal data showing whether effects sustain beyond initial interaction</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Lack of comparative evidence that embodied approach outperforms standard text</p>
              </li>
              <li className="ms-[22.5px]">
                <p className="leading-[2] mb-0">Uncertain whether completing the somatic loop creates meaning or just closes technical circuit</p>
              </li>
            </ul>
          </div>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`Next semester needs to move from "can I build this?" (answered: yes, with caveats about which modalities work best) to "does this actually change AI interaction quality?" (unanswered). `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>That requires focused context, measurable outcomes, and willingness to accept findings that might demonstrate limitations alongside possibilities. The strong technical foundation and successful elements from this semester provide solid ground to build more rigorous evaluation.</p>
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
        to="/week/15"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Navigate to Week 15"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 15 ↗
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

export function Week14() {
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
