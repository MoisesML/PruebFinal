"use strict";

var swaggerAutogen = require('swagger-autogen')(); // import swaggerAutogen from 'swagger-autogen'


var doc = {
  info: {
    title: "Express con Swagger Auto",
    description: "Segundo metodo"
  },
  host: "localhost:4000",
  tags: [{
    name: "Moises",
    description: "Developer FullStack - Junior"
  }]
};
var outputFile = './src/swagger-output.json';
var endpointsFiles = ['./src/app.js', './src/routes/auth.routes.js', './src/routes/products.routes.js', './src/routes/user.routes.js'];
swaggerAutogen(outputFile, endpointsFiles, doc);