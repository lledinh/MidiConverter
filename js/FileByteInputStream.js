"use strict";
var FileByteInputStream = /** @class */ (function () {
    function FileByteInputStream(file) {
        this.file = file;
    }
    FileByteInputStream.prototype.getBlob = function () {
        return new Blob([this.file]);
    };
    FileByteInputStream.prototype.readBytes = function () {
        var reader = new FileReader();
        var bytes = new Uint8Array(1);
        reader.readAsArrayBuffer(this.getBlob());
        reader.onload = function () {
            var arrayBuffer = reader.result;
            bytes = new Uint8Array(arrayBuffer);
        };
        var bytesToNumbers = [];
        for (var i = 0; i < bytes.length; i++) {
            bytesToNumbers[i] = bytes[i];
        }
        return bytesToNumbers;
    };
    return FileByteInputStream;
}());
