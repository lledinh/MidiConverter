"use strict";
var ByteReader = /** @class */ (function () {
    function ByteReader(bytes) {
        this.bytes = bytes;
        this.cursor = 0;
    }
    Object.defineProperty(ByteReader.prototype, "getBytes", {
        get: function () {
            return this.bytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByteReader.prototype, "setBytes", {
        set: function (value) {
            this.bytes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByteReader.prototype, "getCursor", {
        get: function () {
            return this.cursor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByteReader.prototype, "setCursor", {
        set: function (value) {
            this.cursor = value;
        },
        enumerable: false,
        configurable: true
    });
    return ByteReader;
}());
