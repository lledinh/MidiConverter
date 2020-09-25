export class FileByteInputStream implements ByteInputStream {
    private readonly file: File;

    constructor(file: File) {
        this.file = file;
    }

    private getBlob() {
        return new Blob([this.file]);
    }

    readBytes(): number[] {
        let reader = new FileReader();
        let bytes: Uint8Array = new Uint8Array(1);
        reader.readAsArrayBuffer(this.getBlob());
        reader.onload = function() {
            let arrayBuffer = reader.result as ArrayBuffer;
            bytes = new Uint8Array(arrayBuffer);
        }

        let bytesToNumbers = [];

        for (let i = 0; i < bytes.length; i++) {
            bytesToNumbers[i] = bytes[i];
        }

        return bytesToNumbers;
    }
}