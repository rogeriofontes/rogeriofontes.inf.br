/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

export default {
  output: 'export',
  basePath: isProd ? '/rogeriofontes.inf.br' : '',  // << só basePath
  trailingSlash: true,
  images: { unoptimized: true } // apenas se você usar <Image />
}
