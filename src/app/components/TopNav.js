import Link from "next/link";

const TopNav = () => {
  return (
    <div className="w-[992px] mx-auto flex items-center justify-center shadow shadow-slate-400 p-2 justify-content-between font-semibold py-5">
      <Link className="mx-3 hover:text-slate-700 transition-all" href="/">
        Home
      </Link>
      <Link className="mx-3 hover:text-slate-700 transition-all" href="/cookie">
        Get Cookie
      </Link>
      <Link
        className="mx-3 hover:text-slate-700 transition-all"
        href="/api/redirect"
      >
        Redirect
      </Link>
      <Link
        className="mx-3 hover:text-slate-700 transition-all"
        href="/headerMod"
      >
        Get Header
      </Link>
    </div>
  );
};

export default TopNav;
