import ByteBuffer from "bytebuffer";
import DJILogRecordBase from "./record-base";

export const DEFORM_MODE = <const>{
  0: "PACK",
  1: "PROTECT",
  2: "NORMAL",
  3: "OTHER"
};

export const TRIPOD_STATUS = <const>{
  0: "UNKNOWN",
  1: "FOLD_COMPLETE",
  2: "FOLDING",
  3: "STRETCH_COMPLETE",
  4: "STRETCHING",
  5: "STOP_DEFORMATION"
};

export default class Deform extends DJILogRecordBase {
  constructor(buffer: ByteBuffer, index: number, key?: number[]) {
    super(buffer, index, key);
  }

  getDeformMode() {
    return DEFORM_MODE[(this.readInt(0, 1) & 48) >>> 4]
  }
  
  getDeformStatus() {
    return TRIPOD_STATUS[(this.readInt(0, 1) & 14) >>> 1];
  }
  
  isDeformProtected() {
    return (this.readInt(0, 1) & 1) != 0;
  }
}