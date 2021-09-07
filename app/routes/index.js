"use strict";

module.exports = (app) => {
    require("./cliente.route")(app)
    require("./cotizacion.route")(app)
    require("./pedido.route")(app)
    require("./producto.route")(app)
}