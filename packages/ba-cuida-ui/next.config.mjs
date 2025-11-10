/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables `next export`
  trailingSlash: true, // generates /about/index.html (safer on Pages)
  images: { unoptimized: true }, // next/image works on static export
}

export default nextConfig
