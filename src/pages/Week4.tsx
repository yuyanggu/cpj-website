import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage4 from "figma:asset/7ede91542f91157d2118ac0fc3b0841614d9273c.png";
import imgImage from "figma:asset/73b247930e50e5ff7e11d9a4a9241b2083424896.png";
import imgImage1 from "figma:asset/0db832905a368236aaa97a5b0eafcccb5d5c24cc.png";
import imgImage2 from "figma:asset/13611327df2d8ea6f92d9630ef6534365becd17a.png";
import videoExpRecording from "../assets/exp-recording.mov";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 4</p>
            <p>building and reflecting</p>
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
    <div className="h-[473px] relative rounded-[2px] shrink-0 w-[712px]" data-name="Image">
      <video autoPlay muted className="absolute max-w-none object-cover rounded-[2px] size-full" controlsList="nodownload" loop playsInline>
        <source src={videoExpRecording} />
      </video>
    </div>
  );
}

function AboutMeSection() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Experiment 1</h2>
          <Image />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`Using handwriting as a input `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">{`This experiment explored the idea of using the body, specifically handwriting as an interface for therapeutic interaction with an LLM. The aim was to move away from typing, which often feels mechanical, towards something more embodied and expressive. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>Writing by hand tends to carry emotional nuances through movement, pressure, and rhythm, elements that digital typing often flattens.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col h-[390px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[705px]" data-name="Image">
      <AnimatedImage
        src={imgImage4}
        alt=""
        containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image2() {
  return (
    <AnimatedImage
      src={imgImage}
      alt=""
      containerClassName="h-[477px] relative rounded-[2px] shrink-0 w-[712px]"
      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2px] size-full"
    />
  );
}

function Image3() {
  return (
    <AnimatedImage
      src={imgImage1}
      alt=""
      containerClassName="h-[477px] relative rounded-[2px] shrink-0 w-[712px]"
      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2px] size-full"
    />
  );
}

function Image4() {
  return (
    <AnimatedImage
      src={imgImage2}
      alt=""
      containerClassName="h-[477px] relative rounded-[2px] shrink-0 w-[712px]"
      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2px] size-full"
    />
  );
}

function AboutMeSection1() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">The building process</h2>
          <Image1 />
          <Image2 />
          <Image3 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              I vibe coded the web app using V0, a minimal web framework, to create a small writing application.
              <br aria-hidden="true" />
              {` The core elements included:`}
            </p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">A 3-minute timer to timebox the user's writing session, encouraging free-flow, stream-of-consciousness reflection.</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">An upload function that allowed users to photograph their handwritten text.</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Tesseract OCR for extracting text from the uploaded image.</p>
              </li>
              <li className="ms-[22.5px]">
                <p className="leading-[2] mb-0">A server route that sent the extracted text to OpenAI's API, which generated a short reflective or supportive response.</p>
              </li>
            </ul>
          </div>
          <Image4 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              Problems faced:
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p className="leading-[2] mb-0">{`Technically, this process was more frustrating than expected. Tesseract OCR performed very poorly on most handwriting samples, often producing unreadable text. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>I also attempted to have OpenAI interpret the image directly, but the API wasn't able to reliably perform OCR. Much of my time went into debugging these limitations, which slowed down exploration of the conceptual and experiential side. This revealed how quickly the technical can dominate, pulling focus away from design intent.</p>
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] tracking-[-0.065px] w-[min-content]">Feedback</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`From a conceptual standpoint, Andreas's feedback made me realise that while handwriting does involve the body, the current experience feels static and disjointed. There's a physical act (writing), but it's isolated from the interaction loop. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>The LLM only receives the end product, not the process. If the body is to be meaningfully involved as an interface, then movement, rhythm, or gesture could become part of the dialogue itself. Perhaps the system could sense writing speed, pressure, or pauses as emotional cues, not just text.</p>
          </div>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            Write → Take photo → Upload → Get response.
            <br aria-hidden="true" />
            {` There was no real sense of dialogue or immediacy.`}
          </p>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">Reflecting on feedback:</p>
            <p className="leading-[2] mb-0">
              <br aria-hidden="true" />
              Ultimately, this experiment served as a good reminder: in speculative design, technical feasibility should not restrict conceptual exploration. The prototype, despite its technical flaws, clarified that the core value lies in designing interfaces that help users reconnect with their physical selves in digital reflection practices.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p className="leading-[2] mb-0">Questions I have to ask in the future:</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">What would it mean for the LLM to respond during the act of writing?</p>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Could the interface sense rhythm, pauses, or gesture as emotional signals?</p>
              </li>
              <li className="ms-[22.5px]">
                <p className="leading-[2] mb-0">How might the experience feel if the system responded through sound, haptics, or visual motion instead of text?</p>
              </li>
            </ul>
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
        to="/week/5"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Visit Week 5 page"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 5 ↗
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

export function Week4() {
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