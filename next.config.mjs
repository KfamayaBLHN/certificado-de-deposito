/** @type {import('next').NextConfig} */



let _assetPrefix = '/';
let _basePath = '';
let _publicBasePath = '';//es el path para las imagenes

// staging
// if ( process.env.NODE_ENV !== 'development' ) {
//   _assetPrefix = '/proyectos/blcr/banca-personal/prestamo-vivienda/v1.0.7/';
//  _basePath = '/proyectos/blcr/banca-personal/prestamo-vivienda/v1.0.7';
//   _publicBasePath = '/proyectos/blcr/banca-personal/prestamo-vivienda/v1.0.7';//es el path para las imagenes
// }

if ( process.env.NODE_ENV !== 'development' ) {
  _assetPrefix = '/blh/banca-personal/cuenta-ahorro-avanza/v1.0.7/';
  _basePath = '/blh/banca-personal/cuenta-ahorro-avanza/v1.0.7';
  _publicBasePath = '/blh/banca-personal/cuenta-ahorro-avanza/v1.0.7';//es el path para las imagenes
}


//https://d3n7h3rthjsgyh.cloudfront.net/blcr/banca-personal/prestamo-vivienda-v1/formulario-solicitud-v1.html

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  basePath: _basePath,
  trailingSlash: false,
  assetPrefix: _assetPrefix,
  publicRuntimeConfig: {
    basePath: _publicBasePath,
  }
}


export default nextConfig;
