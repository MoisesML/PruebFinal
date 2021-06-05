"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoles = exports.createAdmin = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var createAdmin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var users, user, rolesFound, rolesAdmin;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User["default"].find({
              email: "admin@localhost"
            });

          case 3:
            users = _context.sent;
            user = users[0];
            _context.next = 7;
            return _Role["default"].find({
              name: {
                $in: ["admin", "moderator"]
              }
            });

          case 7:
            rolesFound = _context.sent;
            rolesAdmin = rolesFound.map(function (role) {
              return role._id;
            });

            if (user) {
              _context.next = 19;
              break;
            }

            _context.t0 = _User["default"];
            _context.next = 13;
            return _bcryptjs["default"].hash("admin", 10);

          case 13:
            _context.t1 = _context.sent;
            _context.t2 = rolesAdmin;
            _context.t3 = {
              username: "admin",
              email: "admin@localhost",
              password: _context.t1,
              roles: _context.t2
            };
            _context.next = 18;
            return _context.t0.create.call(_context.t0, _context.t3);

          case 18:
            console.log("Admin User Created!");

          case 19:
            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t4 = _context["catch"](0);
            console.log("Ocurrio un error createAdmin", _context.t4);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));

  return function createAdmin() {
    return _ref.apply(this, arguments);
  };
}();

exports.createAdmin = createAdmin;

var createRoles = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var count, values;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Role["default"].estimatedDocumentCount();

          case 3:
            count = _context2.sent;
            console.log(count);

            if (!(count > 0)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return");

          case 7:
            _context2.next = 9;
            return Promise.all([new _Role["default"]({
              name: "user"
            }).save(), new _Role["default"]({
              name: "moderator"
            }).save(), new _Role["default"]({
              name: "admin"
            }).save()]);

          case 9:
            values = _context2.sent;
            console.log(values);
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.error("Ocurrio un error createRoles", _context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function createRoles() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;