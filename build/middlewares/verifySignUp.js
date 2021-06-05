"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRolesExisted = exports.checkDuplicateUsernameOrEmail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _User = _interopRequireDefault(require("../models/User"));

var checkDuplicateUsernameOrEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var user, email;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findOne({
              username: req.body.username
            });

          case 2:
            user = _context.sent;

            if (!user) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'The user already exists'
            }));

          case 5:
            _context.next = 7;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 7:
            email = _context.sent;

            if (!email) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'The email already exists'
            }));

          case 10:
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkDuplicateUsernameOrEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkDuplicateUsernameOrEmail = checkDuplicateUsernameOrEmail;

var checkRolesExisted = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var rolsFound, rolsName, i;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Role["default"].find();

          case 2:
            rolsFound = _context2.sent;
            rolsName = rolsFound.map(function (role) {
              return role.name;
            });

            if (!req.body.roles) {
              _context2.next = 12;
              break;
            }

            i = 0;

          case 6:
            if (!(i < req.body.roles.length)) {
              _context2.next = 12;
              break;
            }

            if (rolsName.includes(req.body.roles[i])) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Role ".concat(req.body.roles[i], " does not exists")
            }));

          case 9:
            i++;
            _context2.next = 6;
            break;

          case 12:
            next();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function checkRolesExisted(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.checkRolesExisted = checkRolesExisted;