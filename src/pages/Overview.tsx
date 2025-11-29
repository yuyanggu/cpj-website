import { Link } from "react-router-dom";
import { Header } from "../components/Header";

function Bio() {
  return (
    <div className="h-[202px] relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] h-[202px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <p className="basis-0 font-sans font-normal grow leading-[2] max-w-[420px] min-h-px min-w-px relative shrink-0 text-base text-white tracking-[-0.15px] w-full">Prompted by the Body explores what happens when bodies, rather than keyboards, lead AI conversations. Current LLM interfaces reduce human expression to typed text, discarding rich somatic information embedded in how we think and feel.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            The project aims to explore through making how embodied interactions can make reflective AI engagement more accessible and grounded.</p>
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

function WeekEntry({ week, link, description }: { week: string; link?: string; description: string }) {
  return (
    <section aria-label={`Work experience entry ${week}`} className="box-border content-start flex flex-wrap gap-[30px] items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <section className="basis-0 box-border content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-[220px] p-0 relative shrink-0">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
          {link ? (
            <Link
              to={link}
              onClick={() => window.scrollTo(0, 0)}
              aria-label={`Visit ${week} page`}
              className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
            >
              {week} ↗
            </Link>
          ) : (
            <p className="font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] w-full">
              {week}
              <span className="font-sans leading-[2] text-base tracking-[-0.15px]"> ↗</span>
            </p>
          )}
        </div>
      </section>
      <div className="basis-0 font-sans font-[84] grow leading-[2] min-h-px min-w-px relative shrink-0 text-base text-white tracking-[-0.075px]">
        <p className="leading-[2]">{description}</p>
      </div>
    </section>
  );
}

function TextContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pl-0 pr-[20px] py-0 relative w-full">
          <WeekEntry week="Week 1" link="/week/1" description="what do i care about and want to do" />
          <WeekEntry week="Week 2" link="/week/2" description="defining the problem space & initial literature research" />
          <WeekEntry week="Week 3" link="/week/3" description="mapping my ideas" />
          <WeekEntry week="Week 4" link="/week/4" description="building and reflecting" />
          <WeekEntry week="Week 5" link="/week/5" description="scoping down on research scope and goals" />
          <WeekEntry week="Week 6" link="/week/6" description="jumping the gun" />
          <WeekEntry week="Week 7" link="/week/7" description="finding focus in research and making" />
          <WeekEntry week="Week 8" link="/week/8" description="reflecting on my rpo and breaking my leg" />
          <WeekEntry week="Week 9" link="/week/9" description="first breath prototype" />
          <WeekEntry week="Week 10" link="/week/10" description="building a movement and body based prototype" />
          <WeekEntry week="Week 11" link="/week/11" description="adding LLM response to body and movement" />
          <WeekEntry week="Week 12" link="/week/12" description="refining breath and heart rate prototypes" />
          <WeekEntry week="Week 13" link="/week/13" description="experimenting with mood detection using facial expression" />
          <WeekEntry week="Week 14" link="/week/14" description="research question refinement and next steps" />
          <WeekEntry week="Week 15" link="/week/15" description="reflecting on my role as a designer in the AI Age" />
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="Experience section">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-full">Weekly Progress (Sem 1)</h2>
      <TextContent />
    </div>
  );
}

function Footer() {
  return (
    <footer className="block h-[400px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#383838] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
    </footer>
  );
}

function CvInformation() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="CV Information">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pl-[20px] pr-0 py-0 relative w-full">
          <ExperienceSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <main className="box-border content-stretch flex gap-[20px] items-start max-w-[1440px] p-0 relative shrink-0 w-full" data-name="Content" tabIndex={-1}>
      <ContactInfo />
      <CvInformation />
    </main>
  );
}

export function Overview() {
  return (
    <div className="bg-black relative size-full" data-name="Desktop">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[10px] pt-[20px] px-[30px] relative size-full">
          <Header paddingBottom="pb-[56px]" />
          <Content />
        </div>
      </div>
    </div>
  );
}
