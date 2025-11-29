import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgMoodImg3 from "figma:asset/f4da29f3864637dfae1809731325d6247f86ae6a.png";
import imgMoodFlow1 from "figma:asset/9445952b1a04acb3c5c8d767557d38492c9d1be7.png";
import imgScreenshot20251129At52807Pm1 from "figma:asset/844a3a0e2fb14916cf68bf961ef72c8d4056a768.png";
import imgScreenshot20251129At52745Pm1 from "figma:asset/a5a4c4641b5b1db112b490901aed1a9e2f984439.png";
import imgScreenshot20251129At52703Pm1 from "figma:asset/9b8dfaf85fcfea8ad4800724c33a599bc6059f94.png";
import imgMoodImg4 from "figma:asset/f0e1f1c51702e7d0b024b675f74caa580e69a631.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 13</p>
            <p>experimenting with mood detection using facial expression</p>
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
        src={imgMoodImg3}
        alt=""
        containerClassName="aspect-[4096/2731] relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Experiment 7</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`After testing body movement, breath (voluntary control) and heart rate (involuntary physiological state), I wanted to explore facial expressions as a 4th modality. Expressions sit between these: partly voluntary (you can force a smile) but mostly involuntary (microexpressions happen automatically). `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>{`They're also inherently communicative in ways that breath and pulse aren't. Your face signals emotional state to others constantly, so making this legible to AI feels more aligned with existing body language than internal physiological data.`}</p>
          </div>
          <Image />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">{`MediaPipe Face Landmarker provides facial blendshapes (smile intensity, brow position, jaw openness) that can map to emotional categories. The experiment translates expressions into shifting color palettes through WebGL shaders, creating what I'm calling a "digital mood ring" that accumulates emotional signals over time.`}</p>
        </div>
      </div>
    </section>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgMoodFlow1}
        alt=""
        containerClassName="aspect-[1293/844] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#7a7a7a] h-[276px] relative rounded-[2px] shrink-0 w-[247px]" data-name="Image">
      <div className="content-stretch flex flex-col h-[276px] items-center justify-center overflow-clip relative rounded-[inherit] w-[247px]">
        <AnimatedImage
          src={imgScreenshot20251129At52807Pm1}
          alt=""
          containerClassName="h-[276px] relative shrink-0 w-[448px]"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[#7a7a7a] h-[276px] relative rounded-[2px] shrink-0 w-[446px]" data-name="Image">
      <div className="content-stretch flex flex-col h-[276px] items-start overflow-clip relative rounded-[inherit] w-[446px]">
        <AnimatedImage
          src={imgScreenshot20251129At52745Pm1}
          alt=""
          containerClassName="aspect-[3530/2174] basis-0 grow min-h-px min-w-px relative shrink-0"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[709px]">
      <Image2 />
      <Image3 />
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-[#7a7a7a] h-[436.648px] relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <div className="content-stretch flex flex-col h-[436.648px] items-start overflow-clip relative rounded-[inherit] w-[709px]">
        <AnimatedImage
          src={imgScreenshot20251129At52703Pm1}
          alt=""
          containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame2 />
      <Image4 />
    </div>
  );
}

function Image5() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgMoodImg4}
        alt=""
        containerClassName="aspect-[4096/2731] relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">{`Implementation & performance`}</h2>
          <Image1 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">{`The code uses MediaPipe's Face Landmarker to detect 52 facial blendshapes. I calculate emotion scores by combining relevant blendshapes: happy = (smileLeft + smileRight) / 2 - 0.3 * (frownLeft + frownRight) / 2. Each emotion maps to a color palette that the shader transitions between using color interpolation at 8% per frame.`}</p>
          <Frame3 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`I reused the same WebGL shader from the breath prototype but reconfigured for mood visualization. Instead of responding to breath amplitude, it transitions between five mood-specific color palettes (neutral: cool blues, happy: warm yellows/oranges, surprised: purples, angry: reds, sad: deep blues). `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>{`The shader's smoke and glow parameters create ambient atmosphere that shifts gradually as emotional state changes, making the environment itself feel responsive rather than displaying discrete mood indicators.`}</p>
          </div>
          <Image5 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">For this prototype also required quite a bit of performance tweaking as MediaPipe runs at 10fps, HUD updates at 5fps, while color transitions maintain 60fps for smooth visuals. The system adapts if FPS drops below 30, further reducing detection frequency.</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>The camera feed displays in a circular viewport while the shader renders fullscreen behind it, separating input (your face) from output (environmental color).</p>
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-[706px]">What this reveals</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`Facial expression detection is less contemplative and more performative than breath or heart rate. You become aware of managing your expression to see color changes, which contradicts mindful reflection. A forced smile triggers "happy" colors even when you're not happy, exposing how expressions can be masks rather than authentic signals.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p>
              {`The "mood ring" concept works better as metaphor than implementation. Real mood develops over minutes, but the system responds to momentary expressions in seconds. `}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              The color shifts become reactive rather than reflective, creating an expressive toy rather than mindfulness tool. The technical capability I feel is solid, but the conceptual gap between detecting expressions and understanding emotional state feels more pronounced than with breath or heart rate because expressions are inherently communicative acts that require interpretation beyond pattern recognition.
            </p>
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
        to="/week/14"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Navigate to Week 14"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 14 ↗
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

export function Week13() {
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
