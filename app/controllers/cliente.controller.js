const db = require("../models");
const Cliente = db.clientes;
const Cotizacion = db.cotizaciones;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    //   aca van las cositas de validacion
    // Validate request
    if (!(req.body.nombre || req.body.empresa || req.body.email || req.body.telefono)) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };


    // Create a Tutorial
    const cliente = {
        nombre: req.body.nombre,
        empresa: req.body.empresa,
        email: req.body.email,
        telefono: req.body.telefono
    };

    // Save Tutorial in the database
    Cliente.create(cliente)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};



// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    console.log('prueba')
    const nombre = req.query.nombre;
    // var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    Cliente.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Cliente.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Cliente.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    cliente.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Cliente.findAll({ where: { nombre: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

};