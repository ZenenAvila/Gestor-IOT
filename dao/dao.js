const { pool } = require("../db/conection");

const mostrar = async () => {
  try {
    const iot = await pool.query(`select * from "IOT" order by "Id" asc;`);
    return iot.rows;
  } catch (error) {
    console.log(`error mostrar (dao): ${error}`);
  }
};

const mostrarElemento = async (nombre) => {
  try {
    const iot = await pool.query(`SELECT * FROM "IOT"
	where "Nombre" = '${nombre}' order by "Id" asc;`);
    return iot.rows;
  } catch (error) {
    console.log(`error mostrarElemento (dao): ${error}`);
  }
};

module.exports = { mostrar, mostrarElemento };
