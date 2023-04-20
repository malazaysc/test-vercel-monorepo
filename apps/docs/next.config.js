module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  basePath: '/docs',
  publicRuntimeConfig: {
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF,
    isPreview: process.env.VERCEL_ENV === 'preview',
    gitBranch: process.env.VERCEL_GIT_COMMIT_REF,
    VERCEL_URL: process.env.VERCEL_ENV === 'preview'
    ? `https://test-vercel-monorepo-${process.env.VERCEL_GIT_COMMIT_REF}-malazaysc.vercel.app`
    : 'https://test-vercel-monorepo-web.vercel.app',
    //https://test-vercel-monorepo-web-git-feature-test-preview-malazaysc.vercel.app/
    // VERCEL_URL: process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
  },
};
