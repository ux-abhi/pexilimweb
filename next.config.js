/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => ({
    beforeFiles: [
      {
        source: "/:match*",
        destination: "https://ux-abhi.framer.website/:match*"
      }
    ],
    afterFiles: [
      {
        source: "/:match*",
        destination: "https://ux-abhi.framer.website/:match*"
      }
    ]
  })
};

module.exports = nextConfig;
