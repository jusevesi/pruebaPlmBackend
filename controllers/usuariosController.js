const {executeQuery} = require('../services/mysql.service');
const fs = require('fs');
const archivo = './db/data.json'


const obtenerUsuarios = async(req, res) => {
    const { id } = req.query;
    try{
        const response = await executeQuery(`SELECT * FROM usuarios WHERE idusuarios = ${id}`);
        res.status(200).json(response[0]);
    }catch(error){
        console.log(error);
    }
}

const agregarUsuarios = async(req, res) => {
    try {
        const {nombre, apellido, tipoId, documento, correo, celular, nacimiento} = req.body;
        const response = await executeQuery(`INSERT INTO usuarios (nombre, apellido, tipoId, documento, correo, celular, nacimiento) VALUES ('${nombre}', '${apellido}', '${tipoId}', '${documento}','${correo}', '${celular}', '${nacimiento}')`);
        res.status(201).json({message: 'created', id: response.insertId});
    } catch (error) {
        console.log(error);
    }
}

const actualizarUsuarios = async(req, res) => {
    try {
        const {nombre, apellido, tipoId, documento, correo, celular, nacimiento} = req.body;
        const response = await executeQuery(`UPDATE usuarios SET nombre = '${nombre}', apellido = '${apellido}', tipoId = '${tipoId}', documento = '${documento}',correo = '${correo}', celular = '${celular}', nacimiento = '${nacimiento}' WHERE (idusuarios = '${req.query.id}');`);
        res.status(200).json({message: 'updated', id: req.query.id});
    } catch (error) {
        console.log(error);
    }
}

const borrarUsuarios = async(req,res) => {
    try{
        const response = await executeQuery(`DELETE FROM usuarios WHERE (idusuarios = '${req.query.id}');`)
        if(response.affectedRows > 0){
            res.json({message: 'deleted'});
        }else{
            res.status(404).json({message: `No existe registro con id: ${req.params.id}`})
        }
    }catch(error){
        console.log(error);
    }
}


module.exports = {
    agregarUsuarios,
    obtenerUsuarios,
    actualizarUsuarios,
    borrarUsuarios
}