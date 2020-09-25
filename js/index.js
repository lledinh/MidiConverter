"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VariableLengthQuantity_1 = require("./VariableLengthQuantity");
var number = VariableLengthQuantity_1.VariableLengthQuantity.decode(33607);
console.log(number);
number = VariableLengthQuantity_1.VariableLengthQuantity.decodeFromBytes([0x47, 0x83, 0x00, 0x00]);
console.log(number);
