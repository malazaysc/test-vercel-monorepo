import Link from "next/link";

const VERCEL_URL : String = process.env.VERCEL_URL,

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href={`${VERCEL_URL}/web`} className="header-link">
          Web
        </Link>
        <Link href={`${VERCEL_URL}/docs`} className="header-link">
          Docs
        </Link>
      </div>
    </header>
  );
};
