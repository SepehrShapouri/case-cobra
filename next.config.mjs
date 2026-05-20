/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      typescript:{
        ignoreBuildErrors:true
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
            pathname: "/f/**",
          },
          {
            protocol: "https",
            hostname: "*.ufs.sh",
            pathname: "/f/**",
          },
        ],
      },
      experimental:{
        serverComponentsExternalPackages:['@node-rs/argon2']
      }
};

export default nextConfig;
