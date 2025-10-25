/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = 'rogeriofontes.inf.br'
// Se for publicar em https://SEU-USUARIO.github.io/REPO,
// troque "/REPO" abaixo pelo nome do seu repositório.
// Se for publicar em https://SEU-USUARIO.github.io (repo especial),
// deixe basePath como ''.
const basePath = isProd ? '/REPO' : ''

const nextConfig = {
  experimental: { typedRoutes: true },
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true, // ajuda com GitHub Pages
  images: { unoptimized: true }
}
export default nextConfig;
