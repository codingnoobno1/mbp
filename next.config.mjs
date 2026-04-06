/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'logowik.com' },
      { protocol: 'https', hostname: 'th.bing.com' },
      { protocol: 'https', hostname: 'www.buildersmart.in' },
      { protocol: 'https', hostname: 'digest.myhq.in' },
      { protocol: 'https', hostname: 'www.synergytransformers.com' },
      { protocol: 'https', hostname: 'www.rasmech.com' },
      { protocol: 'https', hostname: 'savree-storage.s3.amazonaws.com' },
      { protocol: 'https', hostname: 'static.startuptalky.com' },
      { protocol: 'https', hostname: 'www.associated-furnaces.com' },
    ],
  },
};

export default nextConfig;
