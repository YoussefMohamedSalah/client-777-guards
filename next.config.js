/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "777-guards.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.777-guards.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      }
    ],
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts",
);

module.exports = withNextIntl(nextConfig);
