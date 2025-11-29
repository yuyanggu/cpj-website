import { Link } from "react-router-dom";

function Name() {
  return (
    <Link to="/" className="no-underline" onClick={() => window.scrollTo(0, 0)}>
      <div className="content-stretch flex flex-col items-start leading-[1.3] relative shrink-0 text-[20px] text-nowrap tracking-[-0.4px] w-[373px] whitespace-pre" data-name="Name">
        <p className="font-sans font-semibold relative shrink-0 text-white">creative process journal</p>
        <p className="font-sans font-normal relative shrink-0 text-[#ababab]">gu yuyang</p>
      </div>
    </Link>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex font-sans font-semibold gap-[32px] items-center leading-[1.3] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px] whitespace-pre" data-name="Nav">
      <Link to="/" onClick={() => window.scrollTo(0, 0)} aria-label="Navigate to the overview page" className="block cursor-pointer relative shrink-0 no-underline text-white hover:text-[#ababab] transition-colors">
        overview
      </Link>
      <a href="https://yy-catalouge-of-making.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Navigate to catalogue of making" className="block cursor-pointer relative shrink-0 no-underline text-white hover:text-[#ababab] transition-colors">
        catalogue of making
      </a>
      <p aria-label="Navigate to the repo page" className="relative shrink-0 cursor-pointer hover:text-[#ababab] transition-colors">
        repo
      </p>
      <p aria-label="Navigate to the about page" className="relative shrink-0 cursor-pointer hover:text-[#ababab] transition-colors">
        about
      </p>
    </div>
  );
}

export function Header({ paddingBottom = "pb-[160px]" }: { paddingBottom?: string }) {
  return (
    <header className={`box-border content-stretch flex items-start justify-between max-w-[1440px] ${paddingBottom} pt-0 px-0 relative shrink-0 w-full`} data-name="Header">
      <Name />
      <Nav />
    </header>
  );
}
