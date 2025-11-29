import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage8 from "figma:asset/c4aba7daea7c67d9624433df457e652325bf93cd.png";
import imgImage12 from "figma:asset/18c1ba88b25b104cfbffbded98be06fb1a5aedb3.png";
import imgImage10 from "figma:asset/c85e8dbf8ccf05a2c7d55dafa4274139fc94d20f.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 9</p>
            <p>first breath prototype</p>
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
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[705px]" data-name="Image">
      <AnimatedImage
        src={imgImage8}
        alt=""
        containerClassName="aspect-[1312/816] relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">{`Finding Inspiration `}</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`I saw an audio-reactive installation where an artist used a handheld Arduino microphone to control projected visuals with breath. What struck me wasn't the technical novelty but the immediacy of the exchange: the artist's exhale directly shaped the digital form. There was something intimate about it that text input never achieves.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p>{`This became the entry point for prototyping. Could a machine tune into the body's tempo? Could breath rhythm create space for reflection rather than just trigger effects?`}</p>
          </div>
          <Image />
        </div>
      </div>
    </section>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0" data-name="Image">
      <AnimatedImage
        src={imgImage12}
        alt=""
        containerClassName="h-[308px] relative shrink-0 w-[267px]"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[706px]" data-name="Image">
      <AnimatedImage
        src={imgImage10}
        alt=""
        containerClassName="h-[392px] relative shrink-0 w-[706px]"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0">
      <Image1 />
      <Image2 />
    </div>
  );
}

function AboutMeSection1() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">Experiment 4</h2>
          <Frame2 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`Following a similar setup as the inspiration, I connected a KY-038 microphone sensor to Arduino and built a p5.js sketch to visualize the input. `}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              The logic runs in the draw() loop: microphone input gets smoothed and compared against a learned baseline to filter background noise. When an exhale crosses the threshold, wavAmp triggers a wave that fades gradually, creating a tidal rhythm. Particle movement uses Perlin noise for fluid, organic motion. Each exhale pushes the current forward while draw() adjusts particle density and trail length so stronger breaths generate fuller waves.
            </p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>{`Creating this prototype I tried by best to work with Höök's principles of subtle guidance (soft movements that invite rather than demand attention), intimate correspondence (timing synced to exhale rhythm), and space for reflection (stillness in pauses between breaths).`}</p>
          </div>
          <a className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] underline w-[705px] whitespace-pre-wrap" href="https://editor.p5js.org/yuyanggu/sketches/LhLoTmriG" target="_blank" rel="noopener noreferrer">{`See prototype  ↗`}</a>
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-[706px]">Feedback and reflection</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[662px]">
            <p className="leading-[2] mb-0">The output works technically but looks generic and lacked that oomph. Flowing particles and wave is a very common aesthetic in creative computing. Andreas called this out and pointed me toward technical conferences with art tracks: SIGGRAPH, Lumen Prize, Ars Electronica, Core77 Awards.</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>
              {`Andreas' feedback was right, and the problem goes deeper than aesthetics. I defaulted to the first visual language that came to mind without questioning whether it serves the work. If I'm claiming embodied input creates qualitatively different interaction, the output needs to show that difference. `}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              He also pushed back on limiting myself to one sensor. Using only the microphone is good for focus but expanding to accelerometer, light sensors, or other inputs could produce unexpected findings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMeSection3() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative text-white w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-[706px]">Thinking about how the LLM can come in</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[662px]">
            <p className="leading-[2] mb-0">{`In the consult we also discussed the LLM's potential role not just as a text generator but as an interpretive layer, one that listens to the rhythm of the user's breath and adjusts its tone, pacing, and messaging accordingly. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>The idea is to move from simple data response to relational interaction: a system that senses, interprets, and reflects. In this way, the LLM becomes a bridge between the physiological and the linguistic, creating a more embodied form of digital dialogue. This aligns directly with the research aim of designing mindful, body-led interactions rather than purely cognitive ones.</p>
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
        to="/week/10"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Navigate to Week 10"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 10 ↗
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

export function Week9() {
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
