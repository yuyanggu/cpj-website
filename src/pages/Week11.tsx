import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage13 from "figma:asset/ee7af2e79839b51ff629729cf25ffac537bef68c.png";
import imgDiagram1 from "figma:asset/436e02170953b114cb070c6b6c760849a7f527d4.png";
import imgBodyImg31 from "figma:asset/f67e84969ef967914138f18a984b79103fdb12a4.png";
import imgBodyImg21 from "figma:asset/9077f5b7c5ab1e0317cce30749aab842da0c481f.png";
import imgBodyImg11 from "figma:asset/f8a5b36ea4e524d3bfb8561e62eab45f938f08f2.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 11</p>
            <p>adding LLM response to body and movement</p>
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-full">{`Conceptual weakness `}</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">{`Andreas pointed out that while the movement visualization looked cool, it was conceptually weak. The system captured movement but didn't complete any meaningful loop. His suggestion: bring the LLM into the experience. This pushed me to redesign the experiment as a reflective session where movement becomes input for AI-generated response.`}</p>
        </div>
      </div>
    </section>
  );
}

function Image() {
  return (
    <div className="bg-[#7a7a7a] relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[709px]">
        <AnimatedImage
          src={imgImage13}
          alt=""
          containerClassName="aspect-[1397/868] relative shrink-0 w-full"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function AboutMeSection1() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">{`Conceptual & visual improvements`}</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`I restructured the interaction into phases: 15-second movement recording, processing captured data, then displaying AI-generated reflection. During recording, the system tracks movement energy (total keypoint displacement) and spatial expansion (wrist distance). `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>{`These metrics get analyzed and sent to Gemini with a prompt describing movement qualities as "dynamic and energetic" or "gentle and contemplative." Gemini generates a short poetic reflection (2-3 sentences) that displays on the user's torso, creating a loop where body movement produces linguistic reflection that returns to the body visually.`}</p>
          </div>
          <Image />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">I also upgraded to WebGL shaders instead of p5.js drawing. Particles now render with layered glowing effects using distance fields, creating atmospheric trails. The shader handles up to 40 particles and 50 trail points with better performance, moving away from generic meditation app aesthetics toward something more distinctive.</p>
        </div>
      </div>
    </section>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgDiagram1}
        alt=""
        containerClassName="aspect-[2712/1770] relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">{`System flow & thinking `}</h2>
          <Image1 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`The flow creates a deliberate loop: webcam captures user moving for 15 seconds, MoveNet detects 17 body keypoints in real-time, WebGL shaders generate particles based on movement speed and direction, simultaneously Gemini interprets the accumulated movement data and generates a poetic response, finally that AI-generated text displays on the user's body when they're still. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>My thinking was to separate the visual feedback (particles) from the linguistic reflection (text) so the body experiences immediate response during movement, then receives considered interpretation after. This attempts to address the half-loop problem by having both real-time somatic feedback and delayed cognitive reflection.</p>
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] tracking-[-0.065px] w-[706px]">{`What worked & what doesn't`}</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`What Worked: The 15-second constraint creates ritual by forcing commitment rather than casual interaction. The shader-based particle trails have genuine presence, responding to movement intensity in ways that feel compelling. Displaying reflection on the torso spatially anchors the AI's response to the body rather than floating in UI, which feels conceptually right when it works.`}</p>
            <p className="leading-[2] mb-0">
              {`What Doesn't Work`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p>{`What Doesn't: Movement metrics seem reductive. "Energy level" and "spatial quality" lose what makes movement meaningful. A gesture held with tension reads identically to one released with ease if displacement matches. Text on torso doesn't solve embodied output since it still requires cognitive processing. I've inserted language generation but haven't completed the somatic loop.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Image2() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgBodyImg31}
        alt=""
        containerClassName="aspect-[4096/2731] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgBodyImg21}
        alt=""
        containerClassName="aspect-[4096/2731] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgBodyImg11}
        alt=""
        containerClassName="aspect-[4096/2731] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function AboutMeSection4() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">Setting up projection space</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            {`I wanted to test experiment and push it beyond a laptop screen. LASALLE sadly didn't have any projection space, so I "borrowed" a room in ADM. Setting up the projection transformed the experience completely. On a laptop, you're hunched over a screen watching yourself in a webcam. With projection, you stand in a darkened space with your movement creating large-scale visual response on the wall. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`The particles become environmental rather than interface elements. Your body casts shadows that interact with the projected light and particles, creating layered presence that a screen can't provide.`}
          </p>
          <Image2 />
          <Image3 />
          <Image4 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">{`The scale matters for embodied interaction. Small screen interaction keeps you cognitively engaged with the interface. Large projection lets you move more freely because you're not worried about staying in webcam frame or reading small text. The AI-generated reflection appearing large on the wall feels less like reading a screen and more like the space itself responding to your presence. This doesn't solve the embodied output problem, but it does change the quality of engagement from interface monitoring to spatial experience.`}</p>
        </div>
      </div>
    </section>
  );
}

function CompanyAndTime() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Company and time">
      <Link
        to="/week/12"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Navigate to Week 12"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 12 ↗
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
          <AboutMeSection4 />
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

export function Week11() {
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
