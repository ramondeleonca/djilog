import ByteBuffer from "bytebuffer";
import DJILogRecordBase from "./record-base";

export default class RCGPS extends DJILogRecordBase {
  constructor(buffer: ByteBuffer, index: number, key?: number[]) {
    super(buffer, index, key);
  }
  
  getLatitude() {
    return this.readInt(7, 4);
  }
  
  getLongitude() {
    return this.readInt(11, 4);
  }
  
  getXSpeed() {
    return this.readInt(15, 4) / 1000;
  }
  
  getYSpeed() {
    return this.readInt(19, 4) / 1000;
  }
  
  getGpsNum() {
    return this.readShort(23, 1);
  }
  
  getGpsStatus() {
    return this.readShort(28, 2) == 1;
  }
}
