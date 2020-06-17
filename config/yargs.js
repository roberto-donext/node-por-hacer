const argv = require('yargs')
    .command('crear', 'Descripción de la tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualizar el estado completado de una tarea'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Borrar una tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}