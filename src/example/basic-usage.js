"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const ast_types_1 = require("ast-types");
var fooId = ast_types_1.builders.identifier("foo");
var ifFoo = ast_types_1.builders.ifStatement(fooId, ast_types_1.builders.blockStatement([
    ast_types_1.builders.expressionStatement(ast_types_1.builders.callExpression(fooId, []))
]));
assert_1.default.ok(ast_types_1.namedTypes.IfStatement.check(ifFoo));
assert_1.default.ok(ast_types_1.namedTypes.Statement.check(ifFoo));
assert_1.default.ok(ast_types_1.namedTypes.Node.check(ifFoo));
assert_1.default.ok(ast_types_1.namedTypes.BlockStatement.check(ifFoo.consequent));
// assert.strictEqual(
//   ifFoo.consequent.body[0].expression.arguments.length,
//   0,
// );
assert_1.default.strictEqual(ifFoo.test, fooId);
assert_1.default.ok(ast_types_1.namedTypes.Expression.check(ifFoo.test));
assert_1.default.ok(ast_types_1.namedTypes.Identifier.check(ifFoo.test));
assert_1.default.ok(!ast_types_1.namedTypes.Statement.check(ifFoo.test));
