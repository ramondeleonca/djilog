import ByteBuffer from "bytebuffer";

export default class DJILogRecordBase {
    tmpBuffer = new ByteBuffer(32, true);
    buffer: ByteBuffer;
    index: number;
    key: number[];
    length?: number;

    constructor(buffer: ByteBuffer, index = 0, key = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]) {
        this.buffer = buffer;
        this.index = index;
        this.key = key;
    }

    clearCopyAndDecode(offset: number, length: number) {
        this.tmpBuffer.fill(0, 0, this.tmpBuffer.buffer.length);
        this.buffer.copyTo(this.tmpBuffer, 0, this.index + offset, this.index + offset + length);
        for (let i = 0; i < length; i++) {
            let decodedByte = this.tmpBuffer.readUint8(i) ^ this.key[(offset + i) % 8];
            this.tmpBuffer.writeUint8(decodedByte, i);
        }
        return this.tmpBuffer.clone();
    }

    readDouble(offset: number, length: number) {
        return this.clearCopyAndDecode(offset, length).readDouble(0);
    }

    readFloat(offset: number, length: number) {
        return this.clearCopyAndDecode(offset, length).readFloat(0);
    }

    readByte(offset: number) {
        return this.clearCopyAndDecode(offset, 1).readUint8(0);
    }

    readInt(offset: number, length: number) {
        return this.clearCopyAndDecode(offset, length).readInt32(0);
    }

    readShort(offset: number, length: number) {
        return this.clearCopyAndDecode(offset, length).readInt16(0);
    }

    readLong(offset: number, length: number) {
        return this.clearCopyAndDecode(offset, length).readLong(0);
    }

    readString(offset: number, length: number) {
        return this.clearCopyAndDecode(offset, length).toString("utf8").slice(0, length);
    }

    getLength() {
        return this.buffer.buffer.length;
    }
}