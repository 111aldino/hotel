import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol:"https",
        hostname:"91xychrahhg6r1mi.public.blob.vercel-storage.com",
      }
    ]
  }
};

export default nextConfig;
