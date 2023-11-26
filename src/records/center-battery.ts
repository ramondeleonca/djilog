import ByteBuffer from "bytebuffer";
import DJILogRecordBase from "./record-base";

export const CONN_STATUS = <const>{
  0: "NORMAL",
  1: "INVALID",
  2: "EXCEPTION",
  100: "OTHER"
};

export default class CenterBattery extends DJILogRecordBase {
  constructor(buffer: ByteBuffer, index: number, key: number[]) {
    super(buffer, index, key);
  }

  getRelativeCapacity() {
    return this.readInt(0, 1);
  }

  getCurrentPV() {
    return this.readInt(1, 2);
  }

  getCurrentCapacity() {
    return this.readInt(3, 2);
  }

  getFullCapacity() {
    return this.readInt(5, 2);
  }

  getLife() {
    return this.readInt(7, 1);
  }

  getLoopNum() {
    return this.readInt(8, 2);
  }

  getErrorType() {
    return this.readInt(10, 4);
  }

  getCurrent() {
    return this.readInt(14, 2);
  }

  getPartVoltages() {
    var voltages = [];
    for (var i = 0; i < 6; i++) {
      voltages[i] = this.readInt(16 + (i * 2), 2);
    }
    return voltages;
  }

  getSerialNo() {
    return this.readInt(28, 2);
  }

  getProductDate() {
    var n2 = this.readInt(30, 2);
    return [
      ((n2 & 65024) >>> 9) + 1980,
      (n2 & 480) >>> 5,
      n2 & 31
    ];
  }

  getTemperature() {
    return this.readInt(32, 2);
  }

  getConnStatus() {
    return CONN_STATUS[this.readInt(34, 1)];
  }

  totalStudyCycle() {
    return this.readInt(35, 2);
  }

  lastStudyCycle() {
    return this.readInt(37, 2);
  }
}