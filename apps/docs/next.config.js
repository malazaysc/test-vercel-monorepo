module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  basePath: '/docs',
  publicRuntimeConfig: {
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF,
  },
};
