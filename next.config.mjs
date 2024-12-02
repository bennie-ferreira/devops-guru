import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'avatars.githubusercontent.com',
//                 port: '',
//                 pathname: '/u/**',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'raw.githubusercontent.com',
//                 port: '',
//                 pathname: '/bennie-ferreira/bennie-ferreira/**',
//             }
//         ],
//     }
// }

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

export default withNextra()