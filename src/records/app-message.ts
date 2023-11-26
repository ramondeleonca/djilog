import ByteBuffer from "bytebuffer";
import DJILogRecordBase from "./record-base";

export default class AppMessage extends DJILogRecordBase {
  constructor(buffer: ByteBuffer, index: number, length: number, key: number[]) {
    super(buffer, index, key);
    this.length = length;
  }

  getMessage() {
    return this.readString(0, this.length);
  }
}