const path = require('path')
const replace = require('replace-in-file');


let _assetPrefix = './';

if ( process.env.NODE_ENV == 'production') {
 _assetPrefix = `/blh/banca-personal/cuenta-ahorro-avanza/v1.0.7/`;
}

const options = {
  files: [
    `C:/Users/kfamaya/Documents/Projects-landings/cuenta_ahorro_avanza/cuenta_avanza_v1/out/_next/static/css/*.css`,
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