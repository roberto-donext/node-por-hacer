//hacer app por yargs que requiera app crear -d "pasear perro" o sea una lista de tareas
//otro comando seria app -listar  para devolver todas las tareas
//otro comando app actualizar -d "pasear perro" -c true para marcar tareas como hechas

const argv = require('./config/yargs').argv;

const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)
        break;
    case 'listar':

        let listado = porHacer.getListado();
        console.log(`listado ${listado}`)

        for (let tarea of listado) {
            console.log("==================".green);
            console.log(tarea.descripcion);
            console.log("Estado : ", tarea.completado);
            console.log("==================".green);
        }


        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('comando no conocido');
        break;
}