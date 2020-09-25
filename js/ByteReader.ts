class ByteReader {
    private bytes: number[];
    private cursor: number;


    constructor(bytes: number[]) {
        this.bytes = bytes;
        this.cursor = 0;
    }

    get getBytes(): number[] {
        return this.bytes;
    }

    set setBytes(value: number[]) {
        this.bytes = value;
    }

    get getCursor(): number {
        return this.cursor;
    }

    set setCursor(value: number) {
        this.cursor = value;
    }
}