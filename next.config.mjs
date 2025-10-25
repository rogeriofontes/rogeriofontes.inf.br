/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// Se for publicar em https://SEU-USUARIO.github.io/REPO,
// troque "/REPO" abaixo pelo nome do seu repositório.
// Se for publicar em https://SEU-USUARIO.github.io (repo especial),
// deixe basePath como ''.
const basePath = isProd ? '/REPO' : ''

const nextConfig = {
  experimental: { typedRoutes: true },
  output: 'export',
  basePath,           // importante para GitHub Pages (project site)
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true, // ajuda com GitHub Pages
  images: { unoptimized: true }
}
export default nextConfig;
