import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
// const argv = require('yargs').argv;

const argv = yargs(hideBin(process.argv))
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Crear tabla hasta el numero enviado'
                })
                .check((argv, options) => {
                    if( isNaN(argv.b) || isNaN(argv.h)) {
                        throw 'La base y el hasta tienen que ser numeros'
                    }
                    return true;
                }) 
                .argv;

// console.log(process.argv);
// console.log(argv);

export {
    argv
}