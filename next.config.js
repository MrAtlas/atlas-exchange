/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  images: {
    domains: [`assets.coingecko.com`, `storage.googleapis.com`, 'randomuser.me', "coin-images.coingecko.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "randomuser.me", // Add this block for randomuser.me
        port: "",
        pathname: "/**", // Accept all paths
      },
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com", // Add this block
        port: "",
        pathname: "/**", // Accept all paths from coin-images.coingecko.com
      },
    ],
  },
};

module.exports = nextConfig;
