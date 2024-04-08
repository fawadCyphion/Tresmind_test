/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['shorturl.at', 'example.com'], // Add 'example.com' with the actual domain of your image
  }  
};
export default nextConfig;
