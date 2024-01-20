/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    NEXT_PUBLIC_BASE_URL_DRMEET: process.env.NEXT_PUBLIC_BASE_URL_DRMEET,
    NEXT_PUBLIC_BASE_URL_PARSIZTEB: process.env.NEXT_PUBLIC_BASE_URL_PARSIZTEB,
    NEXT_PUBLIC_GOOGLE_MAP_API: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  },
};
