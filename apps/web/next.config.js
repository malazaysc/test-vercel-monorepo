const DOCS_BASE_URL = 'https://test-vercel-monorepo-docs.vercel.app'

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
        destination: `https://test-vercel-monorepo-web.vercel.app/:path*`,
      },
    ];
  },
  publicRuntimeConfig: {
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF,
    isPreview: process.env.VERCEL_ENV === 'preview',
    gitBranch: process.env.VERCEL_GIT_COMMIT_REF,
    VERCEL_URL: process.env.VERCEL_ENV === 'preview'
    ? `https://test-vercel-monorepo-${gitBranch}-malazaysc.vercel.app`
    : 'https://test-vercel-monorepo-web.vercel.app',
    //https://test-vercel-monorepo-web-git-feature-test-preview-malazaysc.vercel.app/
    // VERCEL_URL: process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
  },
};
