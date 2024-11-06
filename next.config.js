/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => ({
    beforeFiles: [
      {
        source: "/:match*",
        destination: "https://uxabhii.webflow.io/:match*"
      }
    ],
    afterFiles: [
      {
        source: "/:match*",
        destination: "https://uxabhii.webflow.io/:match*"
      }
    ]
  })
};

module.exports = nextConfig;
