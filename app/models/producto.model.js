module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto", {
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      paleta: {
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      }
      
    });
  
    return Producto;
  };
