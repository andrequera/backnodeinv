const dbConfig = require("../../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clientes = require("./cliente.model.js")(sequelize, Sequelize);
db.cotizaciones = require("./cotizacion.model.js")(sequelize, Sequelize);
db.pedidos = require("./pedido.model.js")(sequelize, Sequelize);
db.productos = require("./producto.model.js")(sequelize, Sequelize);

db.clientes.hasMany(db.cotizaciones, { as: "cotizaciones" });
db.cotizaciones.belongsTo(db.clientes, {
  foreignKey: "clienteId",
  as: "cliente",
})

// Relacion muchos a muchos

db.pedidos.belongsToMany(db.productos, {
  through: "pedidos_productos",
  as: "productos",
  foreignKey: "pedido_id",
});
db.productos.belongsToMany(db.pedidos, {
  through: "pedidos_productos",
  as: "pedidos",
  foreignKey: "producto_id",
});




module.exports = db;