import crearArchivo from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';

console.clear();







crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));


