const { Router } = require("express");
const controller = require("./controller"); 

const router = Router();

//router.get("/", controller.getCosto);
router.post("/costo", controller.addCostoProducto);
router.post("/nuevoprecio", controller.addNuevoPrecioProducto);
router.post("/margen", controller.addMargenProducto);
//router.get("/:id", controller.getCostoById);

module.exports = router;