module.exports = app => {
    const cotizaciones = require("../controllers/cotizacion.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", cotizaciones.create);
  
    // Retrieve all Tutorials
    router.get("/", cotizaciones.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", cotizaciones.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", cotizaciones.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", cotizaciones.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", cotizaciones.delete);
  
    // Delete all Tutorials
    router.delete("/", cotizaciones.deleteAll);
  
    app.use('/api/cotizaciones', router);
  };