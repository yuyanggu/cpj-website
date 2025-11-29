import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgScreenshot20250925At10646Pm1 from "figma:asset/0f2198faa6fbd139fb1e55702b95f1c6c2eda741.png";
import imgImage from "figma:asset/5bf8694e3bfb19aabce123ce53b3920f9b5b15c9.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 6</p>
            <p>jumping the gun</p>
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
        src={imgScreenshot20250925At10646Pm1}
        alt=""
        containerClassName="aspect-[1742/1694] relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Experiment 2</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0 text-base">
              p5.js notepad with real-time emotion prompts:
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {`I wanted to move from the static write-upload-respond flow from the Experiment 1 to something that felt alive. `}
            </p>
            <p className="leading-[2] mb-0 text-base">&nbsp;</p>
            <p className="leading-[2] text-base">
              <span>
                The sketch pairs a simple ruled notepad with a live camera panel. While I type, ml5.faceApi estimates an expression and the system surfaces a short prompt like "I sense some heaviness. Where does the heaviness live in your day". The aim was to experiment with bidirectionality: my body feeds the system, the system nudges me back.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
              <a className="[text-underline-position:from-font] cursor-pointer decoration-solid font-sans font-normal tracking-[-0.15px] underline" href="https://editor.p5js.org/yuyanggu/sketches/FSgQTnoCy" target="_blank" rel="noopener noreferrer">
                <span className="[text-underline-position:from-font] decoration-solid leading-[2] text-base">
                  Experiment 2 Sketch
                </span>
              </a>
            </p>
          </div>
          <Image />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`The making: `}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <ul className="leading-[2] mb-0">
              <li className="list-disc ms-[22.5px]">
                <p className="leading-[2] mb-0">Built a browser notepad in p5.js with word-wrapping, cursor, and soft line grid.</p>
              </li>
            </ul>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[2]">
                  Added a live webcam feed rendered as a black and white dot mosaic to keep the face abstract and less intrusive.
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[2]">
                  Used ml5.faceApi for landmarks and expression scores. No thresholds, just top score wins to keep it simple.
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="ms-[22.5px]">
                <p className="leading-[2] mb-0">Mapped seven expressions to two rotating prompts each. I wrote them in a reflective, non-clinical voice.</p>
              </li>
            </ul>
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] tracking-[-0.065px] w-[min-content]">The feedback</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`Andreas's feedback was blunt in a helpful way. He said the experience of writing in my sketch is not very exciting. He was not sure what I was trying to do beyond proving that I could map a face label to a line of copy. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>He recommended that I take a step back and do observational studies of typing. What does the typing experience look like for real people in their real setups. What are the rhythms, interruptions, and little bodily moves that actually happen. I needed to see that before I try to steer anything.</p>
          </div>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">What I Learnt:</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="whitespace-pre-wrap">{`The main thing I learnt is that I need to be more systematic. I mistook movement for method. Building fast is useful, but it should sit on a base of careful looking.  So the lesson for me this week is simple. Do less guessing. Do more looking. Be systematic about the looking. Then build instruments that help people notice what their writing is already telling them. That feels like honest work for this project, and it gives me a way to move forward without pretending I have a cure.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Image1() {
  return (
    <AnimatedImage
      src={imgImage}
      alt=""
      containerClassName="basis-0 grow min-h-px min-w-px relative rounded-[2px] shrink-0 w-[705px]"
      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2px] size-full"
    />
  );
}

function AboutMeSection2() {
  return (
    <section className="h-[998px] relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] h-[998px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">My next steps</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">Be more systematic in my making. Shift from guessing emotion to observing how people actually type. Use findings to question whether chatbox typing is a good medium for reflective dialogue with LLMs.</p>
          <Image1 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0 whitespace-pre-wrap">{`Monkeytype come up as a strong inspiration for my next experiment, I love its simple stripped down design, that captures rich data and I want to build something in that spirit, a clean typing field, high contrast, short texts, and steady pacing cues. Under the surface I will log patterns that speak to effort and flow, not just words per minute.  `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">
              Signals to capture
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">Inter key intervals, pause lengths, burst lengths, backspace streaks.</p>
              </li>
              <li className="ms-[22.5px]">
                <span className="leading-[2]">
                  Start and stop cycles, line breaks, cursor jumps.
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
            </ul>
            <p className="leading-[2] mb-0">Context capture</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[22.5px]">
                <p className="leading-[2] mb-0">A quick photo of the typing setup taken by the participant: device, surface, posture, lighting, background clutter.</p>
              </li>
              <li className="ms-[22.5px]">
                <p className="leading-[2] mb-0">Top down video recording of the typing</p>
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
        to="/week/7"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Visit Week 7 page"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 7 ↗
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

export function Week6() {
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