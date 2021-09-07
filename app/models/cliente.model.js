module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      nombre: {
        type: Sequelize.STRING
      },
      empresa: {
        type: Sequelize.STRING
      },
      empresa: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      }
    });
  
    return Cliente;
  };

  