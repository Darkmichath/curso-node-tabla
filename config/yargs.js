const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Indica la base de la multiplicacion'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                        describe: 'Muestra la tabla en la consola'
                    })
                    .option('h', {
                        alias:'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Indica el limite de la multiplicacion'
                    })
                    .check((argv, options) => {
                        if( isNaN(argv.b)) {
                            throw 'La base tiene que ser un numero'
                        }
                        return true
                    })
                    .argv;

module.exports = argv;