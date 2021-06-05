"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var _authJwt = require("../middlewares/authJwt");

var router = (0, _express.Router)();
router.post('/', [_authJwt.verifyToken, _authJwt.isModerador], _products.createProducts);
router.get('/', _products.getProduct);
router.get('/:productId', _products.getProductById);
router.put('/:productId', [_authJwt.verifyToken, _authJwt.isAdmin], _products.updateProductById);
router["delete"]('/:productId', [_authJwt.verifyToken, _authJwt.isAdmin], _products.deleteProductById);
var _default = router;
exports["default"] = _default;