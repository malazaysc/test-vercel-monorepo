const GIT_BRANCH = process.env.VERCEL_GIT_COMMIT_REF?.replace('/', '-') || 'local_branch';
const IS_PREVIEW = process.env.VERCEL_ENV === 'preview';

const DOCS_BASE_URL = IS_PREVIEW ? `https://test-vercel-monorepo-docs-git-${GIT_BRANCH}-malazaysc.vercel.app` : 'https://test-vercel-monorepo-docs.vercel.app';
const WEB_BASE_URL = IS_PREVIEW ? `https://test-vercel-monorepo-web-git-${GIT_BRANCH}-malazaysc.vercel.app` : 'https://test-vercel-monorepo-web.vercel.app';

// const DOCS_BASE_URL = 'https://test-vercel-monorepo-docs.vercel.app'

// const productionURL = 'https://test-vercel-monorepo-web.vercel.app';

// const previewURL = `https://test-vercel-monorepo-web-git-${gitBranch}-malazaysc.vercel.app`;

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${DOCS_BASE_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_BASE_URL}/docs/:path*`,
      },
      {
        source: "/:path*",
        destination: `${WEB_BASE_URL}/:path*`,
      },
    ];
  },
  publicRuntimeConfig: {
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF,
  },
};
