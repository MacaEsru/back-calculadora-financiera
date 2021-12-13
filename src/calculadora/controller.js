const pool = require("../../db");
const queries = require("./queries");



/* const getCosto = (req, res) => {
    pool.query(queries.getCosto, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};


const getCostoById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCostoById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}; */

const addCostoProducto = (req, res) => {
    const { margen, precioventa } = req.body;
    const margenAux = margen/100;
    let costoidealAux = precioventa*(1-margenAux);
    const costoideal = Math.round(costoidealAux*100)/100;

    pool.query(queries.addCostoProducto, [margenAux, precioventa, costoideal], (error, results) => {
        if(error) throw error;
    });
    res.json({
        status: 200,
        data: {
            costoideal: costoideal
        }
    });
};

const addNuevoPrecioProducto = (req, res) => {
    const { costoproducto, margen, iva} = req.body;

    const margenAux = margen/100;
    const ivaAux = iva/100;
    let nuevoprecioAux = costoproducto/(1-margenAux);
    let precioivaAux = nuevoprecioAux*(1+ivaAux);
    const nuevoprecio = Math.round(nuevoprecioAux*100)/100;
    const precioiva = Math.round(precioivaAux*100)/100;


    pool.query(queries.addNuevoPrecioProducto, [costoproducto, margenAux, ivaAux, nuevoprecio, precioiva], (error, results) => {
        if(error) throw error;
    });
    res.json({
        status: 200,
        data: {
            nuevoprecio: nuevoprecio,
            precioiva: precioiva
        }
    });
};


const addMargenProducto = (req, res) => {
    const { costoproducto, precioventa } = req.body;

    const utilidad = precioventa-costoproducto;
    const margen = utilidad/precioventa;
    const margenAux = Math.round(margen*100);

    pool.query(queries.addMargenProducto, [costoproducto, precioventa, utilidad, margenAux], (error, results) => {
        if(error) throw error;
    });
    res.json({
        status: 200,
        data: {
            utilidad: utilidad,
            margenAux: margenAux
        }
    });
};

module.exports = {
//    getCosto,
//    getCostoById,
    addCostoProducto,
    addNuevoPrecioProducto,
    addMargenProducto,
};
