"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
require("reflect-metadata");
var Types_1 = require("./Types");
var Application_1 = require("./src/Application");
var container = new inversify_1.Container();
container.bind(Types_1.default.Application).to(Application_1.default).inSingletonScope();
exports.default = container;
//# sourceMappingURL=inversity.config.js.map