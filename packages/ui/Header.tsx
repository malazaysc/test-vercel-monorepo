import Link from "next/link";

// const VERCEL_URL: String = "https://test-vercel-monorepo-web.vercel.app";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { VERCEL_URL, VERCEL_ENV, VERCEL_GIT_COMMIT_REF  } = publicRuntimeConfig;

// In preview deployments, the URL will be something like this:
// https://test-vercel-monorepo-web-git-feature-test-preview-malazaysc.vercel.app/
// https://test-vercel-monorepo-web-git-${VERCEL_GIT_COMMIT_REF}-malazaysc.vercel.app/

// In production deployments, the URL will be: https://test-vercel-monorepo-web.vercel.app
const productionURL = 'https://test-vercel-monorepo-web.vercel.app';

const previewURL = `https://test-vercel-monorepo-web-git-${VERCEL_GIT_COMMIT_REF}-malazaysc.vercel.app`;

const BASE_URL = VERCEL_ENV === 'production' ? productionURL : previewURL;

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href={`${BASE_URL}`} className="header-link">
          Web
        </Link>
        <Link href={`${BASE_URL}/docs`} className="header-link">
          Docs
        </Link>
        <p>VERCEL_ENV: {VERCEL_ENV}</p>
        <p>VERCEL_URL: {BASE_URL}</p>
      </div>
    </header>
  );
};
