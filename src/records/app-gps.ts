import DJILogRecordBase from "./record-base";

export default class AppGps extends DJILogRecordBase {
  constructor(buffer: ByteBuffer, index = 0, key = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]) {
    super(buffer, index, key);
  }

  getLongitude() {
    return this.readDouble(0, 8);
  }
  
  getLatitude() {
    return this.readDouble(8, 8);
  }
  
  getAccuracy() {
    return this.readFloat(16, 4);
  }
}