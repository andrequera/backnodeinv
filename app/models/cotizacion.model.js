module.exports = (sequelize, Sequelize) => {
    const Cotizacion = sequelize.define("cotizacion", {
      producto: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      paletas: {
        type: Sequelize.INTEGER
      },
      botellas: {
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      }
    });
  
    return Cotizacion;
  };