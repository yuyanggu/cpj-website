import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage6 from "figma:asset/755dde0a19dc371c8b893b8004c040bd94216d8a.png";
import imgFrame39655811 from "figma:asset/b180e0a8c17382798f4f452a99be6f42c15915ac.png";
import imgImage1 from "figma:asset/63c9ad37ce5ebfcc446b7d191e9825437cc8266c.png";
import imgImage2 from "figma:asset/da1d970fb224a877a6e9e44ca6bc949fd18882b0.png";
import imgImage3 from "figma:asset/cfa8ecad39db04ce28e06c66eabff76054fd02c7.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 1</p>
            <p>what do i care about and want to do</p>
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
    <div className="bg-[#7a7a7a] h-[487px] overflow-clip relative rounded-[2px] shrink-0 w-[708px]" data-name="Image">
      <AnimatedImage 
        src={imgImage6}
        alt=""
        containerClassName="absolute h-[498px] left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[722px]"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] h-[478px] overflow-clip relative rounded-[2px] shrink-0 w-[708px]" data-name="Image">
      <AnimatedImage
        src={imgFrame39655811}
        alt=""
        containerClassName="absolute bottom-0 left-[-4px] right-[-5px] top-0 overflow-hidden"
        className="absolute h-full left-[-0.14%] max-w-none top-0 w-[100.16%]"
      />
    </div>
  );
}

function Images() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Images">
      <Image />
      <Image1 />
    </div>
  );
}

function AboutMeSection() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Positioning, Intent, and Early References</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">Returning back to school has made me reflect my role as a designer. As a product designer who build has long designed for the web and mobile and works alongside engineers. I'm drawn to products in health and care because they force a balance between utility and softness. My strength is translating messy human signals into clear interaction rules without flattening the person behind them.</p>
          <Images />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">Drawing from Past Work: Working on UX design projects like Care360 and Terrascope shaped how I think about design that supports real human work. Care360 was about helping medical social workers manage patient care, while Terrascope focused on making environmental data usable for companies. Both projects taught me how design can simplify complexity and create calm in systems that often feel overwhelming.</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>At the same time, they made me realise how much of my work has been tied to interface heavy, structure and efficiency. For my grad project, I want to step away from that. I'm curious about designing something slower, more personal, and less about output. I want to explore interactions that feel lived and sensory, where technology responds to how we are, not just what we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Image2() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[206px]" data-name="Image">
      <AnimatedImage
        src={imgImage1}
        alt=""
        containerClassName="h-[116px] relative shrink-0 w-[206px]"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[238px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[423px]" data-name="Image">
      <AnimatedImage
        src={imgImage2}
        alt=""
        containerClassName="h-[238px] relative shrink-0 w-[423px]"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[724px]">
      <Image2 />
      <Image3 />
    </div>
  );
}

function Images1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Images">
      <Frame2 />
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[708px]" data-name="Image">
      <AnimatedImage
        src={imgImage3}
        alt=""
        containerClassName="aspect-[2736/1734] relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">LLMs and the Shifting Shape of Interaction</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0 text-base">
              LLM and AI seem to be everywhere right now. Every week there's a new tool, a new controversy, and another wave of opinions about what it all means. It's easy to get caught between excitement and fatigue, but what's kept my interest is the quieter question behind it all — what kind of relationships do we actually want to have with these systems?
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p className="leading-[2] text-base">
              <span>{`What struck me recently was `}</span>
              <a className="[text-underline-position:from-font] cursor-pointer decoration-solid font-sans font-normal tracking-[-0.15px] underline" href="https://www.youtube.com/watch?v=FDNkDBNR7AM" target="_blank" rel="noopener noreferrer">
                <span className="[text-underline-position:from-font] decoration-solid leading-[2] text-base">
                  Anthropic's "Keep Thinking" campaign
                </span>
              </a>
              <span>{` for Claude. It framed the model not as a quick-answer machine, but as a thinking partner. something that supports curiosity rather than replacing it. That felt different from the usual tech narrative about speed and efficiency. It made me wonder if design could play a role in shaping AI interactions that help people slow down, question, and reflect, rather than just consume or produce faster.`}</span>
            </p>
          </div>
          <Images1 />
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Machines of Loving Grace</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              <span>{`Around the same time, I came across `}</span>
              <a className="[text-underline-position:from-font] cursor-pointer decoration-solid font-sans font-normal tracking-[-0.15px] underline" href="https://www.darioamodei.com/essay/machines-of-loving-grace" target="_blank" rel="noopener noreferrer">
                <span className="[text-underline-position:from-font] decoration-solid leading-[2] text-base">
                  Dario Amodei's essay "Machines of Loving Grace"
                </span>
              </a>
              , which builds on the book of the same name. The core idea that stayed with me is that our relationship with AI doesn't have to be adversarial or exploitative. We can design systems that align with human values and nurture qualities like empathy, care, and collaboration. As a designer, that framing feels both hopeful and grounding.
            </p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="whitespace-pre-wrap">{`It made me think about how much of my role is not just to make interactions smooth, but to make them meaningful. Maybe LLMs aren't just new tools to command, but new mediums for reflection and connection. If we approach them thoughtfully  with the same care we bring to human-centered design they could help create digital experiences that feel more alive, attentive, and good for us.`}</p>
          </div>
          <Image4 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              <span>{`This `}</span>
              <a className="[text-underline-position:from-font] cursor-pointer decoration-solid font-sans font-normal tracking-[-0.15px] underline" href="https://www.youtube.com/watch?v=nZloANdc_zY" target="_blank" rel="noopener noreferrer">
                <span className="[text-underline-position:from-font] decoration-solid leading-[2] text-base">
                  video
                </span>
              </a>
              <span>{` by AI For Humans offered a clear and grounded breakdown of Amodei's essay "Machines of Loving Grace." It explained how AI could potentially accelerate progress across entire disciplines compressing 50 to 100 years of research in fields like biology, neuroscience, economic development, and climate change into just 5 to 10 years.`}</span>
            </p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>I think what really stood out was responsibility that comes with such rapid growth and power of AI. As a designer, it made me think about how we might guide this acceleration toward outcomes that genuinely serve people designing not only for capability, but for care and understanding.</p>
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
        to="/week/2"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Visit Week 2 page"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 2 ↗
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
    <section aria-label="Work experience entry 1" className="basis-0 box-border content-center flex flex-wrap gap-[30px] grow items-center min-h-px min-w-px pb-0 pt-[20px] px-0 relative shrink-0" data-name="Job 4">
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

export function Week1() {
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