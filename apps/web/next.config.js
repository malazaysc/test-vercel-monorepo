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
};
