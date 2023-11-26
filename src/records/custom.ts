import ByteBuffer from "bytebuffer";
import DJILogRecordBase from "./record-base";

export default class Custom extends DJILogRecordBase {
    constructor(buffer: ByteBuffer, index: number, key?: number[]) {
        super(buffer, index, key);
    }

    getDistance() {
        return this.readFloat(6,4);
    };
    
    getHSpeed() {
        return this.readFloat(2,4);
    };
    
    getDateTime() {
        return new Date(parseInt(this.readLong(10, 8).toString())).toISOString();
    };
}