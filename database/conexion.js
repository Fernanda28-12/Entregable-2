const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mafe1999',
    database: 'hospital'
})

conexion.connect(function(error){
    if(error){
        console.log('ocurrio un error en la base de datos')
        return;
        
    } else {
        console.log('conexion exitosa')
    }
})

module.exports = {conexion}