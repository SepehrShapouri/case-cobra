/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      typescript:{
        ignoreBuildErrors:true
      },
      images:{domains:['utfs.io']},
      experimental:{
        serverComponentsExternalPackages:['@node-rs/argon2']
      }
};

export default nextConfig;
