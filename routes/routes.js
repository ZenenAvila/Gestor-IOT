const { request, response } = require("./app");
const router = require("express").Router();
const IOT = require("../dao/dao");

router.get("/mostrar", async (request, response) => {
  try {
    const iot = await IOT.mostrar();
    console.log(iot);
    response.json(iot);
  } catch (error) {
    console.log(`error mostrar(routers): ${error}`);
  }
});

router.get("/mostrarElemento/:nombre", async (request, response) => {
  try {
    console.log(request.params.nombre);
    let iot = await IOT.mostrarElemento(request.params.nombre);
    response.json(iot);
  } catch (error) {
    console.log(`error mostrarElemento(router: ${error}`);
  }
});

module.exports = router;
