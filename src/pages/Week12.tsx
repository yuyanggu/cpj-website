import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { AnimatedImage } from "../components/AnimatedImage";
import imgImage14 from "figma:asset/a3958cc63810221b8879ab5967bed9d2456d3d35.png";
import imgBreathFlow1 from "figma:asset/fbb5c70f4207b88bb85abcf940191279eb7df5c3.png";
import imgHrImg31 from "figma:asset/a62b42f5d95c7ae540e8a690e91f8495fc4fe9bb.png";
import imgHrFlow1 from "figma:asset/9cd08a3eeea38aab42da4983fca6d2cf5d032239.png";
import imgImage15 from "figma:asset/e462d98168d45f37c7926f824b2426a50bd1d3d5.png";
import img848630Af86A442899637B34Da5C7Cd241105C1 from "figma:asset/6b05f9762ddb2da40de6e1922d4e3228d0c90e73.png";
import imgImage16 from "figma:asset/f14c5128d116841a24101ab866081a44204625bd.png";
import imgImage17 from "figma:asset/c8515218a692724c05bef4eea49e38bfadc5c770.png";
import imgHrImg11 from "figma:asset/580e0782f7f1086a91e9e3cdcb401322b4303265.png";
import imgScreenshot20251129At42756Pm1 from "figma:asset/cca0042ee1a4a72ad0acc57c9821a2c5c3815af8.png";
import imgScreenshot20251129At42738Pm1 from "figma:asset/d4156d6caa10b4299d4a1b6c98fba6e55588fe50.png";

function Bio() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bio">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start pb-[40px] pl-[6px] pr-[40px] pt-[30px] relative w-full">
          <div className="font-sans font-normal leading-[2] max-w-[420px] relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
            <p className="leading-[2] mb-0">Week 12</p>
            <p>refining breath and heart rate prototypes</p>
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
    <div className="bg-[#7a7a7a] relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[709px]">
        <AnimatedImage
          src={imgImage14}
          alt=""
          containerClassName="aspect-[2850/1774] relative shrink-0 w-full"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgBreathFlow1}
        alt=""
        containerClassName="aspect-[1293/844] relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] min-w-full relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[min-content]">{`Conceptual weakness `}</h2>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px] whitespace-pre-wrap">
            {`I returned to the breath prototype with lessons from the movement work. "Breath Ring"  invites mindful, controlled breathing, the experiment makes invisible physiology visible, creating an immediate biofeedback loop that directs attention to the breath itself. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            The visuals now uses WebGL shaders with gradient effects that pulse with breath intensity, making it feel more organic than the earlier particle waves.
          </p>
          <Image />
          <Image1 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            Technical bits:
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`The breath detection uses an envelope system borrowed from audio synthesis with state tracking ("idle", "attack", "hold", "release") that creates smooth visual transitions rather than direct sensor mapping. The updateFromBreath() function applies smoothing (BREATH_SMOOTHING = 0.05) because raw microphone data is noisy. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            The envelope adds expressiveness through dynamic timing: dynamicAttack = 800 - (breathIntensity * 400) makes louder breaths trigger faster attacks, while dynamicRelease scales with both peak loudness and duration.
          </p>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">I also used dynamic parameter adjustment in the animate() function modifies u_softness, u_intensity, u_smoke, and u_scale based on breath characteristics. The interpolation between color palettes (lerpColorArrays) shifts from default to soft colors as the envelope increases. Whether users actually perceive these nuances or whether they read as generic pulsing remains to be tested.</p>
        </div>
      </div>
    </section>
  );
}

function Image2() {
  return (
    <div className="bg-[#7a7a7a] relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[709px]">
        <AnimatedImage
          src={imgHrImg31}
          alt=""
          containerClassName="aspect-[4096/3072] relative shrink-0 w-full"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[#7a7a7a] relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[709px]">
        <AnimatedImage
          src={imgHrFlow1}
          alt=""
          containerClassName="aspect-[1293/844] relative shrink-0 w-full"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-[#7a7a7a] relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[709px]">
        <AnimatedImage
          src={imgImage15}
          alt=""
          containerClassName="aspect-[3584/1594] relative shrink-0 w-full"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Image5() {
  return (
    <div className="bg-[#7a7a7a] h-[531.75px] relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <div className="content-stretch flex flex-col h-[531.75px] items-start overflow-clip relative rounded-[inherit] w-[709px]">
        <AnimatedImage
          src={img848630Af86A442899637B34Da5C7Cd241105C1}
          alt=""
          containerClassName="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Image6() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgImage16}
        alt=""
        containerClassName="aspect-[3566/2148] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image7() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgImage17}
        alt=""
        containerClassName="aspect-[2898/2156] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image8() {
  return (
    <div className="bg-[#7a7a7a] relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[709px]">
        <AnimatedImage
          src={imgHrImg11}
          alt=""
          containerClassName="aspect-[4096/3072] relative shrink-0 w-full"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Image9() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251129At42756Pm1}
        alt=""
        containerClassName="aspect-[3384/2078] relative shrink-0 w-full"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
      />
    </div>
  );
}

function Image10() {
  return (
    <div className="bg-[#7a7a7a] content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 w-[709px]" data-name="Image">
      <AnimatedImage
        src={imgScreenshot20251129At42738Pm1}
        alt=""
        containerClassName="aspect-[3384/2078] relative shrink-0 w-full"
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
          <h2 className="block font-sans font-semibold leading-[1.3] relative shrink-0 text-[13px] text-white tracking-[-0.065px] w-[706px]">Experiment 6</h2>
          <Image2 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            {`The next prototype uses heart rate as input. "Pulse Check" aims translates heartbeat using a KY-039 sensor into light: a finger placed on the sensor feeds pulse data through Arduino to a Three.js shader visualization, rendering the body's rhythm as glowing, breathing form. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            The experiment slows interaction to physiological time, making invisible circulation visible. By requiring sustained touch and stillness, it creates contemplative space between body and screen.
          </p>
          <Image3 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              {`Building the GLSL shader: `}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {`I built the visual first on Shadertoy before porting to Three.js. Shadertoy's live editor provides immediate visual feedback: change a value, see the result instantly. `}
            </p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">The pulsing orb uses volumetric rendering through raymarching. The mainImage() function runs a loop that steps through 3D space, accumulating color based on distance to surfaces. The p vector represents the current position in 3D space: vec3 p = vec3((fragCoord.xy * 2. - r.xy) / r.y * d, d - 7.), mapping 2D pixels to 3D rays.</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">The key technique is the glow accumulator. Instead of rendering solid surfaces, the shader accumulates glow at each step: glow += vec4(1.2, 0.6, 0.4, 1.) * glowIntensity. Distance to the sphere surface determines glow intensity using exp(-abs(sphereDist) * 0.5). Closer distances create stronger glow, building volumetric depth.</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p className="leading-[2] mb-0">Working with GLSL was new but really exciting it taught me to think in parallel computation. Every pixel runs this code simultaneously, meaning no shared state between pixels. You calculate everything from mathematical functions rather than iterating through arrays. The tanh(o * o / 1e5) at the end compresses accumulated color into displayable range, preventing overexposure while maintaining glow.</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>Once the visual worked, I wrapped it in Three.js uniforms to connect it to live heart rate data. The separation let me focus on aesthetics before dealing with sensor integration.</p>
          </div>
          <Image4 />
          <Image5 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">
              Working with agentic coding IDEs:
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {`For this prototype, as it required both Arduino and Shader to work natively in the browser, I tested Claude Code in Cursor and Google's Antigravity IDE with Gemini 3 Pro. These agentic environments work significantly better for complex interactive works than asking for code fixes in ChatGPT natively because they understand full project context. `}
            </p>
            <p className="leading-[2] mb-0">
              <br aria-hidden="true" />
              {`Claude Code also excelled at explaining shader code. When volumetric glow wasn't rendering correctly, the agent walked through the raymarching loop line by line, showing how sphereDist calculations affected the glow accumulator. `}
            </p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>{`The key learning: agentic IDEs maintain state across the entire codebase, making connections between Arduino serial parsing, shader uniforms, and visual output that isolated code snippets can't. They propose holistic solutions rather than single-file modifications.`}</p>
          </div>
          <Image6 />
          <Image7 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">{`When I asked Antigravity to "smooth out the animation, ensure shader performance," it analyzed the entire heart_rate.js file, identified jarring direct uniform updates, and proposed linear interpolation with pixel ratio capping. The agent understood I needed both visual smoothness and technical optimization.`}</p>
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            Visual and animation refinements:
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`The technical challenge was signal processing. The optical sensor was not super accurate so I had to set a three-beat validation (beatCount >= 3) before updating the display. `}
          </p>
          <Image8 />
          <div className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">
            <p className="leading-[2] mb-0">{`When no signal is detected for 3.5 seconds, the system sets targetPulseAmp = 0.0 to stop pulsing and targetGlow = 0.0 to dim the orb, visually indicating no finger contact. `}</p>
            <p className="leading-[2] mb-0">&nbsp;</p>
            <p>The shader uses phase accumulators that increment based on smoothed BPM rather than fixed time, so the visual directly reflects actual heart rate variability and clearly shows whether the sensor detects a pulse.</p>
          </div>
          <Image9 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">Pulse detected — the orb glows bright and pulses in sync with the user's heart BPM.</p>
          <Image10 />
          <p className="font-sans font-normal leading-[2] max-w-[720px] relative shrink-0 text-base text-white tracking-[-0.15px] w-[705px]">No pulse detected — the orb dims and stops pulsing, indicating no finger contact and no BPM.</p>
        </div>
      </div>
    </section>
  );
}

function CompanyAndTime() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Company and time">
      <Link
        to="/week/13"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="Navigate to Week 13"
        className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-sans font-normal leading-[2] relative shrink-0 text-[#ababab] text-base tracking-[-0.15px] underline w-full"
      >
        Week 13 ↗
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

export function Week12() {
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
