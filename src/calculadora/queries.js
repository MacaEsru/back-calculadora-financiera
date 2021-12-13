//const getCosto = "SELECT * FROM costo";
//const getCostoById = "SELECT * FROM costo WHERE idproducto = $1";
const addCostoProducto = "INSERT INTO costo (margen, precioventa, costoideal) VALUES ($1, $2, $3)"
const addNuevoPrecioProducto = "INSERT INTO precio (costoproducto, margen, iva, nuevoprecio, precioiva) VALUES ($1, $2, $3, $4, $5)"
const addMargenProducto = "INSERT INTO margen (costoproducto, precioventa, utilidad, margen) VALUES ($1, $2, $3, $4)"

module.exports = {
    //getCosto,
    //getCostoById,
    addCostoProducto,
    addNuevoPrecioProducto,
    addMargenProducto,
};