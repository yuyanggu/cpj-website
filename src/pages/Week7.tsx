import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage5 from "figma:asset/d3de4df6acf818f23e2aeb7c3887ab681943c847.png";
import imgImage from "figma:asset/5bf8694e3bfb19aabce123ce53b3920f9b5b15c9.png";
import imgScreenshot20251026At54427Pm1 from "figma:asset/6b4b0d2c56afe0307c6a47e1cca31bd862feaded.png";
import imgImage1 from "figma:asset/cc5f57e1eadb457cd41dd48767b12adbb1b210e1.png";
import videoTypingVid1 from "../assets/typing-vid-1.mp4";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 7</p>
            <p>finding focus in research and making</p>
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
        src={imgImage5}
        alt=""
        containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">{`Reframing "Therapeutic" to "Mindful Interactions"`}</h2>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`I have made a conscious decision to shift from "Therapeutic Experience" to "Mindful Interactions." This change is rooted in feedback provided by Andreas and the ethical considerations surrounding AI and mental well-being.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              Why the change?
            </p>
            <p>
              <br aria-hidden="true" />
              {`Focus on Process over Outcome: "Mindful Interactions" emphasises the process of engagement. It foregrounds awareness, presence, and intentionality in the interaction, both from the user and from the system's design.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {`Avoiding Clinical Implication: The term "therapeutic" can carry a clinical weight, implying diagnosis, intervention, or professional psychological support. I want my research to explicitly not to offer therapy or advice. The LLM is a mirror, not a therapist.`}
            </p>
          </div>
          <Image />
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] tracking-[-0.065px] w-[min-content]">Somaesthetics in design</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px]">{`This conceptual shift from "therapeutic" to "mindful" has led me to my third key reading and a new theoretical pillar for the research: Somaesthetics.`}</p>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-[24px] tracking-[-0.24px] w-[705px]">
            <span>
              "Somaesthetics can help design become more effective and pleasurable to the end-user not only by taking into account of bodily feelings appropriate to the product but also personalizing them based on the computation of an individual's preferences, habits, and performances"
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
            <a className="[text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.interaction-design.org/literature/author/richard-shusterman" target="_blank" rel="noopener noreferrer">
              <span className="[text-underline-position:from-font] decoration-solid leading-[2] text-[24px]">
                Richard Shusterman
              </span>
            </a>
          </p>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base tracking-[-0.15px] w-[705px] whitespace-pre-wrap">{`This framework gives my exploration a strong critical and academic foundation, connecting my  experiments directly to a larger philosophical conversation about the body and technology.`}</p>
        </div>
      </div>
    </section>
  );
}

function Image1() {
  return (
    <div className="h-[395px] relative rounded-[2px] shrink-0 w-[712px]" data-name="Image">
      <video autoPlay muted className="absolute max-w-none object-cover rounded-[2px] size-full" controlsList="nodownload" loop playsInline>
        <source src={videoTypingVid1} />
      </video>
    </div>
  );
}

function AboutMeSection2() {
  return (
    <section className="relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Experiment 3</h2>
          <Image1 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px] whitespace-pre-wrap">{`The experiment aims to analyse keyboard typing patterns by comparing the mechanical act of copying text with the reflective act of free-writing, aiming to reveal the expressive data hidden in the process.  The goal is to demonstrate that how we type can be as meaningful as what we type, exposing the limitations of using consciously constructed text as the sole mode of input for meaningful interactions.`}</p>
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">Two-Phase Structure:</p>
            <ol className="list-decimal mb-0" start="1">
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[2]">
                  {`Phase 1 (Poem): This is the baseline. Copying a fixed text isn't about memory; it's about capturing the user's unique mechanical signature while they aren't thinking about what to say.`}
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="ms-[22.5px]">
                <span className="leading-[2]">
                  {`Phase 2 (Journal): This is the expression. The prompt is open-ended, and all error-checking is disabled. This captures the user's natural phrasing, with the session only ending when they decide by pressing Enter.`}
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
            </ol>
            <ul>
              <li className="list-disc ms-[22.5px]">
                <span className="leading-[2]">
                  {`Data Capture: I don't just log the final text. I log every interaction at a millisecond level—keyEvents, inter-key intervals (ikis), and backspaces. This raw data is then translated into heuristics like burstiness and avg long pause to quantify the manner of expression.`}
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Image2() {
  return (
    <div className="content-stretch flex flex-col h-[407px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[705px]" data-name="Image">
      <AnimatedImage
        src={imgImage}
        alt=""
        containerClassName="h-[407px] w-[705px]"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2px] size-full"
      />
      <AnimatedImage
        src={imgScreenshot20251026At54427Pm1}
        alt=""
        containerClassName="h-[442px] relative shrink-0 w-[705px]"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image3() {
  return (
    <AnimatedImage
      src={imgImage1}
      alt=""
      containerClassName="h-[461px] relative rounded-[2px] shrink-0 w-[705px]"
      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2px] size-full"
    />
  );
}

function AboutMeSection3() {
  return (
    <section className=" relative shrink-0 w-full" data-name="About me section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px]  items-start pb-[60px] pl-0 pr-[60px] pt-[30px] relative w-full">
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">Building Experiment 3</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">Working with GPT-5 as a co-pilot</p>
          <Image2 />
          <Image3 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`How I worked with GPT-5: `}</p>
            <p className="leading-[2] mb-0">
              I used GPT-5 to help me push the sketch forward when I was stuck or impatient. It was great at getting me moving. Small prompts turned into working pieces of code quickly, and it often spotted little edge cases that I would have missed. Those wins reminded me that momentum matters.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <p className="leading-[2] mb-0">When it went wrong:</p>
            <p className="leading-[2] mb-0">
              GPT 5 excelled at boilerplate but struggled with my core design intent, especially where it clashed with standard engineering principles, refining my code sometimes causes my code to be overengineered.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
            <ol className="list-decimal mb-0" start="1">
              <li className="mb-0 ms-[22.5px]">
                <span className="leading-[2]">
                  {`Violating KISS & YAGNI: My development style for a sketch is to keep it simple. For smooth scrolling, I used a basic current += (reach - current) * 0.1. When I asked the AI for help refining it, it repeatedly tried to refactor the entire render loop into a more complex, "correct" animation manager. `}
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                  {`This was a classic violation of YAGNI (You Ain't Gonna Need It). It over-engineered a simple request because it couldn't grasp the "good enough" simplicity that p5.js affords.`}
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
              <li className="ms-[22.5px]">
                <span className="leading-[2]">
                  {`Ignoring State and Context: The AI's lack of a stable "mental model" was the biggest hurdle. When I asked it to implement a simple window.addEventListener to prevent the browser from navigating on 'Backspace', its solution also "swallowed" the 'Enter' key. This was a critical failure. It failed to understand that in my journalTyping phase, 'Enter' wasn't just another key; it was the single most important state trigger, the action that concluded the entire reflective session.`}
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
            </ol>
            <p className="leading-[2] mb-0">What I will try next:</p>
            <p className="leading-[2] mb-0">Use a code-aware IDE like Cursor so the AI can see the whole file and call sites. Better shared context should reduce over-engineering and protect the names and roles I rely on.</p>
            <p className="leading-[2]">&nbsp;</p>
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
        to="/week/8"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Navigate to Week 8"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 8 ↗
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

export function Week7() {
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