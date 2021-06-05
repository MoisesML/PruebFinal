"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _package = _interopRequireDefault(require("../package.json"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _initialSetup = require("./libs/initialSetup");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerOutput = _interopRequireDefault(require("./swagger-output.json"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

// Middleware de express
var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
(0, _initialSetup.createAdmin)();
app.set('pkg', _package["default"]); //Guardar en una variable pkg el contenido del package

app.set('port', process.env.PORT || 4000);
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('dev')); // sirve para mostrar las solicitudes que se hacen al servidor

app.use(_express["default"].json()); //Para que entienda los objetos json que llegan al servidor

app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use('/doc', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swaggerOutput["default"]));
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to my Products API',
    name: app.get('pkg').name,
    version: app.get('pkg').version,
    description: app.get('pkg').description,
    author: app.get('pkg').author
  });
});
app.use('/api/products', _products["default"]);
app.use('/api/users', _user["default"]);
app.use('/api/auth', _auth["default"]);
var _default = app;
exports["default"] = _default;