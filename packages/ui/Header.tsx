import Link from "next/link";

// const VERCEL_URL: String = "https://test-vercel-monorepo-web.vercel.app";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { VERCEL_URL } = publicRuntimeConfig;

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href={`${VERCEL_URL}`} className="header-link">
          Web
        </Link>
        <Link href={`${VERCEL_URL}/docs`} className="header-link">
          Docs
        </Link>
      </div>
    </header>
  );
};
