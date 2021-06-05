"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth.controller");

var _verifySignUp = require("../middlewares/verifySignUp");

var router = (0, _express.Router)();
router.post('/signup', [_verifySignUp.checkDuplicateUsernameOrEmail, _verifySignUp.checkRolesExisted], _auth.signUp);
router.post('/signin', _auth.signIn);
var _default = router;
exports["default"] = _default;