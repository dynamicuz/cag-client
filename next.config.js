/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ["impact.dynamicsoft.uz", "impactapi.dynamicsoft.uz"],

      // remotePatterns: [
      //    {
      //       protocol: "http",
      //       hostname: "159.223.22.139",
      //       port: "2033",
      //       pathname: "/file/",
      //    },
      // ],
   },
   reactStrictMode: false,
};

module.exports = nextConfig


