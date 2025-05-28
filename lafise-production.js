const path = require('path')
const replace = require('replace-in-file');


let _assetPrefix = './';

if ( process.env.NODE_ENV == 'production') {
 _assetPrefix = `/blh/banca-personal/certificado_deposito/v2.0.0/`;
}

const options = {
  files: [
    `C:/Users/kfamaya/Documents/frontend/landing_pages/certificado-de-deposito/out/_next/static/css/*.css`,
  ],
  from: /([/])imagenes/g,
  to: `${_assetPrefix}imagenes`,
};


const reemplazarPaths = function () {
  if ( process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'staging' || process.env.NODE_ENV == 'production' ) {
    replace(options, (error, results) => {
      if (error) {
        return console.error('Error occurred:', error);
      }
      if ( results[0].file ) {
        console.log('Archivo modificado', results[0].file);
      }
      // console.log('Modified files:', results.join(', '), results);
    });
  }
}
reemplazarPaths();