import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage18 from "figma:asset/dbfcf7353089c23a08e9b04975b1a7daa8bfc14f.png";
import imgScreenshot20251115At112157Pm1 from "figma:asset/6004d8f428e260ac638bd95bf7e4e58c5062365d.png";
import imgScreenshot20251120At114948Pm1 from "figma:asset/bf1bf7956d5e6af0c48d4526f44c76094d70763a.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 15</p>
            <p>reflecting on my role as a designer in the AI Age</p>
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
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgImage18}
        alt=""
        containerClassName="aspect-[1058/557] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251115At112157Pm1}
        alt=""
        containerClassName="aspect-[1916/1172] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251120At114948Pm1}
        alt=""
        containerClassName="aspect-[3588/2156] relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Reflection on craft and technical understanding</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`This semester revealed how rapidly AI tools are changing what it means to be a designer. It seems every 2-3 weeks a new model or IDE is released, Trying to stay ahead I utilized different models and applications to help in the creation of my Catalogue of Making, where I first designed it in the screens Figma, then used Figma MCP to feed the design directly into Cursor and Antigravity. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">{`The results were surprisingly good baseline implementations. Antigravity especially excelled at frontend work, translating design specs into clean HTML, CSS, and JavaScript that matched the visual intent. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>{`But these tools give you a strong foundation, not a finished product. I still had to tweak layouts, refine interactions, optimize performance, and build out the nuanced details that separate functional from compelling. The AI gets you 70% there quickly, but the final 30% requires craft, taste, and technical judgment that can't be automated.`}</p>
          </div>
          <Image />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">Figma allows me to send my designs through MCP (Model Context Protocol—a system that connects external data sources to AI tools), giving the AI coding models direct access to design specifications for better context. In Figma, I had to design with clear variables, consistent styles, and organized components for the AI to interpret and translate the design accurately into code.</p>
            <p>&nbsp;</p>
          </div>
          <Image1 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">Cursor using Figma MCP to translate my designed screens into code, my role was also to scope implementation details like Tailwind CSS framework and structure in the prompt, while Cursor did the first cut of the build.</p>
          <Image2 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">Antigravity in agent mode implementing website improvements, planning tasks and inspecting results—works decently but not perfectly for complex build workflows.</p>
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-[706px]">Reflecting on role as a designer</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`As a Product Designer watching these technologies evolve, I believe the most critical skill and value I have to bring forward to stand out in this very saturated field is the aspects of strong craft and taste. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">{`I don't need to know exactly how to build everything from scratch, but I need deep technical understanding of frameworks, performance considerations, and design constraints. The future of product design seems to merge the UX/UI designer and frontend engineer roles. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">{`I am able to very quickly iterate in code rather than just mockups, making real-time decisions about interaction and visual refinement. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">{`But this also means I need to expand beyond frontend: understanding backends, database schemas, API design, and full tech stacks will be essential to make informed design decisions. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>{`The tools lower the barrier to implementation, but they also raise the bar for what designers need to understand about the systems they're shaping.`}</p>
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
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Back to Overview"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Back to Overview ↗
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

export function Week15() {
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
