/* A QUE BASE DE DATOS APUNTA?
    CONFIGURAR LAS VARIABLES DE ENTORNO, PARA QUE NO EXPLOTE LA APLICACIÓN 
* */
// import { Client } from 'pg'
const {Client} = require("pg");

const obtenerCategorias = async () => {

    //DECIRLE A QUE BDD ME TENGO QUE CONECTAR 


    const client = new Client({
        // user:"postgres",
        // host:"localhost",
        // database:"postgres",
        // password:"20Ep*rE20",
        // port:5432,
        user:"postgres",
        host:"192.168.2.209",
        database:"EpreSeguridadPublica2021",
        password:"20Ep*rE20",
        port: 5432
    })
    await client.connect();

    const res = await client.query("SELECT * FROM public.t_anomalias ORDER BY t_anomaliasid ASC ");

    debugger;
    const result = res.rows;  

    await client.end();

    return result;
}

//NECESITAMOS SABER A QUE SESRVIDOR NOS VAMOS A CONECTAR 
/**
 * HOST: 192.168.2.209
 * DATABASE: EpreSeguridadPublica2021
 * USER: postgres
 * PASSWORD: 20Ep*rE20
 * PORT:5432
 */




obtenerCategorias().then((result) => {
    console.log(result);
})



