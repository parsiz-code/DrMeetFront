/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    drmeetGoogleMapApi: "AIzaSyBYoQjVWFUjTjeqqdvTPwDVrNc7t9qP46Y",
    drmeetBaseApi: "http://devapi.drmeet.ir/api/",
    parsizTebBaseApi: "http://api.parsizteb.ir/api/",
  },
};
