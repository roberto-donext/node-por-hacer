const fs = require('fs');

let listadoPorHacer = []

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('No se puedo grabar', err);


    })
}


const cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (err) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {


    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDb()
    return porHacer


}

const getListado = () => {
    cargarDb()
    return listadoPorHacer
}


const actualizar = (actualizar, completado = true) => {
    cargarDb()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === actualizar)
    if (index >= 0) {

        listadoPorHacer[index].completado = completado
        guardarDb();
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {

    cargarDb()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    console.log(index);
    if (index >= 0) {

        listadoPorHacer.splice(index, 1)
        guardarDb()
        return true

    } else {
        return false
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}