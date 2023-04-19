module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  basePath: '/docs',
  publicRuntimeConfig: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
};
