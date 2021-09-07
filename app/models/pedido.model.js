module.exports = (sequelize, Sequelize) => {
    const Pedido = sequelize.define("pedido", {
      nombre_cliente: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      producto: {
        type: Sequelize.STRING
      },
      paleta: {
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      }
      
    });
  
    return Pedido;
  };
