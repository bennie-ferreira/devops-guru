import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'
const repo = 'devops-guru' 
const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/bennie-ferreira/bennie-ferreira/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/bennie-ferreira/**',
      },
    ],
  },
}

const withNextra = nextra({
  latex: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

export default withNextra(nextConfig)
