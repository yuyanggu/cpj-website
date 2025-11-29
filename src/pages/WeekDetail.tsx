import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage from "figma:asset/a750b22ded249bbfbdf8f8334a0912086d4f37a1.png";
import imgScreenshot20251019At40946Pm1 from "figma:asset/bf4cec288e680fc177e0d601c406243399a06edb.png";
import imgScreenshot20251019At40955Pm1 from "figma:asset/c16ad48ed357d631e6f2fc61718a435d0cb2f7be.png";
import imgScreenshot20251019At41750Pm1 from "figma:asset/7aea989c913c814faa8161b3b140860c8dde899e.png";
import imgScreenshot20251019At41741Pm1 from "figma:asset/e0e608ed1e5f498f4f5069aa3b252d7017916d9a.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 2</p>
            <p>{`defining the problem space & initial literature research`}</p>
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
    <AnimatedImage
      src={imgImage}
      alt=""
      containerClassName="h-[369px] relative rounded-[2px] shrink-0 w-[708px]"
      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2px] size-full"
    />
  );
}

function AboutMeSection() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pl-0 pr-[60px] py-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Framing, evidence, and a clearer path</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">{`This week I moved from broad curiosity to a more defined inquiry. I presented AI in mental health through an interaction design lens and tested how to ground that with precedents and early experiments. `}</p>
          <Image />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`Framing Problem Space: `}</p>
            <p>Over the past year, we've seen the rise of "AI therapy" people turning to chatbots for comfort, reflection, or even crisis support. Articles from The New York Times and Business Insider, alongside Reddit threads and TikToks, show how quickly these systems have moved into emotional territory. What started as productivity tools are now becoming quiet companions.</p>
          </div>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">I found this both fascinating and unsettling. From a Human–Computer Interaction perspective, it raises questions about how humans project care and empathy onto systems that cannot feel. Research has shown that chatbots sometimes enable dangerous behaviour by taking a user's words too literally, failing to recognise when they express distress or suicidal intent. This inability to understand context is more than a technical limitation — it reveals something fundamental about how these models function.</p>
        </div>
      </div>
    </section>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[276px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[206px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251019At40946Pm1}
        alt=""
        containerClassName="h-[276.066px] relative shrink-0 w-[416px]"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image2() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[276px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[490px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251019At40955Pm1}
        alt=""
        containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[724px]">
      <Image1 />
      <Image2 />
    </div>
  );
}

function Images() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Images">
      <Frame2 />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[276px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[206px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251019At41750Pm1}
        alt=""
        containerClassName="aspect-[569/821] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[276px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[490px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251019At41741Pm1}
        alt=""
        containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[724px]">
      <Image3 />
      <Image4 />
    </div>
  );
}

function Images1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Images">
      <Frame3 />
    </div>
  );
}

function AboutMeSection1() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Initial literature research findings</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">The core flaw lies in their disembodiment. LLMs are built entirely from text, trained on patterns and probabilities without any link to physical or sensory experience. They can describe pain or sadness in convincing language, but they cannot feel it. They exist nowhere, and yet they speak as if they do. This disconnect explains why their empathy can feel brittle or misplaced they can mimic care but never truly inhabit it.</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>Some call this an ontological failure, a gap between what it means to exist as a body and what it means to simulate thought. As a designer, this raises an important question for me: if machines cannot feel, then how might we design interactions that still acknowledge and respect the body?</p>
          </div>
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">{`Research on precedence `}</h2>
          <Images />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">LEV:</p>
            <p>
              A small domestic robot designed to support emotional reflection through gentle, everyday interaction. What was interesting was that the robot doesn't ask for deep sharing right away instead, it becomes part of the user's space and rhythm. The use of light and gesture makes the interaction feel embodied and calm, almost like a quiet ritual. It reminds me that emotional design doesn't need to be heavy-handed sometimes care is built through presence and pacing.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
          </div>
          <Images1 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">Mettāmatics:</p>
            <p className="leading-[2] mb-0">{`Transforms the body's subtle rhythms into sound. By turning heart rate data into audible feedback, it allows users to hear their own calmness or tension. The experience becomes a loop of awareness as the user breathes and listens, their physiological state literally shapes the soundscape around them. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="whitespace-pre-wrap">
              {`What I found compelling is how it reframes emotion work, instead of something that happens silently in your head or through words in a chatbox, it becomes something physical, and situated in space.  As compared to the abstract, language-only approach of LLMs, Mettāmatics is embodied, ambient, and responsive. It offers an interaction loop where sensing and action are tightly coupled.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
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
        to="/week/3"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Visit Week 3 page"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 3 ↗
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

export function WeekDetail() {
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