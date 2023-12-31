import DJILogRecordBase from "./record-base";

export const DRONE_TYPE = <const>{
  0: "Unknown",
  1: "Inspire",
  2: "P3S",
  3: "P3X",
  4: "P3C",
  5: "OpenFrame",
  6: "ACEONE",
  7: "WKM",
  8: "NAZA",
  9: "A2",
  10: "A3",
  11: "P4",
  13: "Mavic",
  14: "PM820",
  15: "P34K",
  16: "wm220",
  17: "Orange2",
  18: "Pomato",
  20: "N3",
  23: "PM820PRO",
  100: "None",
  255: "NoFlyc",
};

export const FLYC_STATE = <const>{
  0: "MANUAL",
  1: "ATTI",
  2: "ATTI_COURSE_LOCK",
  3: "ATTI_HOVER",
  4: "HOVER",
  5: "GSP_BLAKE",
  6: "GPS_ATTI",
  7: "GPS_COURSE_LOCK",
  8: "GPS_HOME_LOCK",
  9: "GPS_HOT_POINT",
  10: "ASSISTED_TAKEOFF",
  11: "AUTO_TAKEOFF",
  12: "AUTO_LANDING",
  13: "ATTI_LANDING",
  14: "GPS_WAYPOINT",
  15: "GO_HOME",
  16: "CLICK_GO",
  17: "JOYSTICK",
  18: "GPS_ATTI_WRISTBAND",
  19: "CINEMATIC",
  23: "ATTI_LIMITED",
  24: "DRAW",
  25: "GPS_FOLLOW_ME",
  26: "ACTIVE_TRACK",
  27: "TAP_FLY",
  28: "PANO",
  29: "FARMING",
  30: "FPV",
  31: "GPS_SPORT",
  32: "GPS_NOVICE",
  33: "CONFIRM_LANDING",
  35: "TERRAIN_FOLLOW",
  36: "PALM_CONTROL",
  37: "QUICK_SHOT",
  38: "TRIPOD",
  39: "TRACK_SPOTLIGHT",
  41: "MOTORS_JUST_STARTED",
  43: "GPS_GENTLE",
  255: "UNKNOWN"
};

export const GOHOME_STATUS = <const>{
  0: "STANDBY",
  1: "PREASCENDING",
  2: "ALIGN",
  3: "ASCENDING",
  4: "CRUISE",
  5: "BRAKING",
  6: "BYPASSING",
  7: "OTHER"
};

export const BATTERY_TYPE = <const>{
  0: "UNKNOWN",
  1: "NONSMART",
  2: "SMART"
};

export const MOTOR_START_FAILED_CAUSE = <const>{
  0: "None",
  1: "CompassError",
  2: "AssistantProtected",
  3: "DeviceLocked",
  4: "DistanceLimit",
  5: "IMUNeedCalibration",
  6: "IMUSNError",
  7: "IMUWarning",
  8: "CompassCalibrating",
  9: "AttiError",
  10: "NoviceProtected",
  11: "BatteryCellError",
  12: "BatteryCommuniteError",
  13: "SeriouLowVoltage",
  14: "SeriouLowPower",
  15: "LowVoltage",
  16: "TempureVolLow",
  17: "SmartLowToLand",
  18: "BatteryNotReady",
  19: "SimulatorMode",
  20: "PackMode",
  21: "AttitudeAbNormal",
  22: "UnActive",
  23: "FlyForbiddenError",
  24: "BiasError",
  25: "EscError",
  26: "ImuInitError",
  27: "SystemUpgrade",
  28: "SimulatorStarted",
  29: "ImuingError",
  30: "AttiAngleOver",
  31: "GyroscopeError",
  32: "AcceletorError",
  33: "CompassFailed",
  34: "BarometerError",
  35: "BarometerNegative",
  36: "CompassBig",
  37: "GyroscopeBiasBig",
  38: "AcceletorBiasBig",
  39: "CompassNoiseBig",
  40: "BarometerNoiseBig",
  41: "InvalidSn",
  44: "FLASH_OPERATING",
  45: "GPS_DISCONNECT",
  47: "SDCardException",
  61: "IMUNoconnection",
  62: "RCCalibration",
  63: "RCCalibrationException",
  64: "RCCalibrationUnfinished",
  65: "RCCalibrationException2",
  66: "RCCalibrationException3",
  67: "AircraftTypeMismatch",
  68: "FoundUnfinishedModule",
  70: "CYRO_ABNORMAL",
  71: "BARO_ABNORMAL",
  72: "COMPASS_ABNORMAL",
  73: "GPS_ABNORMAL",
  74: "NS_ABNORMAL",
  75: "TOPOLOGY_ABNORMAL",
  76: "RC_NEED_CALI",
  77: "INVALID_FLOAT",
  78: "M600_BAT_TOO_LITTLE",
  79: "M600_BAT_AUTH_ERR",
  80: "M600_BAT_COMM_ERR",
  81: "M600_BAT_DIF_VOLT_LARGE_1",
  82: "M600_BAT_DIF_VOLT_LARGE_2",
  83: "INVALID_VERSION",
  84: "GimbalGyroError",
  85: "GimbalPitchNoData",
  86: "GimbalRollNoData",
  87: "GimbalYawNoData",
  88: "GimbalFirmIsUpdata",
  89: "GimbalDisorder",
  // 84: "GIMBAL_GYRO_ABNORMAL",
  // 85: "GIMBAL_ESC_PITCH_NON_DATA",
  // 86: "GIMBAL_ESC_ROLL_NON_DATA",
  // 87: "GIMBAL_ESC_YAW_NON_DATA",
  // 88: "GIMBAL_FIRM_IS_UPDATING",
  // 89: "GIMBAL_DISORDER",
  90: "GIMBAL_PITCH_SHOCK",
  91: "GIMBAL_ROLL_SHOCK",
  92: "GIMBAL_YAW_SHOCK",
  // 90: "GimbalPitchShock",
  // 91: "GimbalRollShock",
  // 92: "GimbalYawShock",
  93: "IMUcCalibrationFinished",
  101: "BatVersionError",
  102: "RTK_BAD_SIGNAL",
  103: "RTK_DEVIATION_ERROR",
  112: "ESC_CALIBRATING",
  113: "GPS_SIGN_INVALID",
  114: "GIMBAL_IS_CALIBRATING",
  115: "LOCK_BY_APP",
  116: "START_FLY_HEIGHT_ERROR",
  117: "ESC_VERSION_NOT_MATCH",
  118: "IMU_ORI_NOT_MATCH",
  119: "STOP_BY_APP",
  120: "COMPASS_IMU_ORI_NOT_MATCH",
  256: "OTHER"
};

export const FLIGHT_ACTION = <const>{
  0: "NONE",
  1: "WARNING_POWER_GOHOME",
  2: "WARNING_POWER_LANDING",
  3: "SMART_POWER_GOHOME",
  4: "SMART_POWER_LANDING",
  5: "LOW_VOLTAGE_LANDING",
  6: "LOW_VOLTAGE_GOHOME",
  7: "SERIOUS_LOW_VOLTAGE_LANDING",
  8: "RC_ONEKEY_GOHOME",
  9: "RC_ASSISTANT_TAKEOFF",
  10: "RC_AUTO_TAKEOFF",
  11: "RC_AUTO_LANDING",
  12: "APP_AUTO_GOHOME",
  13: "APP_AUTO_LANDING",
  14: "APP_AUTO_TAKEOFF",
  15: "OUTOF_CONTROL_GOHOME",
  16: "API_AUTO_TAKEOFF",
  17: "API_AUTO_LANDING",
  18: "API_AUTO_GOHOME",
  19: "AVOID_GROUND_LANDING",
  20: "AIRPORT_AVOID_LANDING",
  21: "TOO_CLOSE_GOHOME_LANDING",
  22: "TOO_FAR_GOHOME_LANDING",
  23: "APP_WP_MISSION",
  24: "WP_AUTO_TAKEOFF",
  25: "GOHOME_AVOID",
  26: "GOHOME_FINISH",
  27: "VERT_LOW_LIMIT_LANDING",
  28: "BATTERY_FORCE_LANDING",
  29: "MC_PROTECT_GOHOME"
}

export const NON_GPS_CAUSE = <const>{
  0: "ALREADY",
  1: "FORBIN",
  2: "GPSNUM_NONENOUGH",
  3: "GPS_HDOP_LARGE",
  4: "GPS_POSITION_NONMATCH",
  5: "SPEED_ERROR_LARGE",
  6: "YAW_ERROR_LARGE",
  7: "COMPASS_ERROR_LARGE",
  8: "UNKNOWN"
};

export const IMU_INITFAIL_REASON = <const>{
  0: "MONITOR_ERROR",
  1: "COLLECTING_DATA",
  2: "GYRO_DEAD",
  3: "ACCE_DEAD",
  4: "COMPASS_DEAD",
  5: "BAROMETER_DEAD",
  6: "BAROMETER_NEGATIVE",
  7: "COMPASS_MOD_TOO_LARGE",
  8: "GYRO_BIAS_TOO_LARGE",
  9: "ACCE_BIAS_TOO_LARGE",
  10: "COMPASS_NOISE_TOO_LARGE",
  11: "BAROMETER_NOISE_TOO_LARGE",
  12: "WAITING_MC_STATIONARY",
  13: "ACCE_MOVE_TOO_LARGE",
  14: "MC_HEADER_MOVED",
  15: "MC_VIBRATED",
  16: "NONE"
};

export const MOTOR_FAIL_REASON = <const>{
  94: "TAKEOFF_EXCEPTION",
  95: "ESC_STALL_NEAR_GROUND",
  96: "ESC_UNBALANCE_ON_GRD",
  97: "ESC_PART_EMPTY_ON_GRD",
  98: "ENGINE_START_FAILED",
  99: "AUTO_TAKEOFF_LANCH_FAILED",
  100: "ROLL_OVER_ON_GRD",
  128: "OTHER"
}

export const SDK_CONTROL_DEVICE = <const>{
  0: "RC",
  1: "APP",
  2: "ONBOARD_DEVICE",
  3: "CAMERA",
  128: "OTHER"
};

export default class OSD extends DJILogRecordBase {
  constructor(buffer: ByteBuffer, index: number, key?: number[]) {
    super(buffer, index, key);
  }

  getLongitude() {
    return (this.readDouble(0, 8) * 180) / Math.PI;
  }
  
  getLatitude() {
    return (this.readDouble(8, 8) * 180) / Math.PI;
  }
  
  getHeight() {
    return this.readShort(16, 2) / 10;
  }
  
  getXSpeed() {
    return this.readShort(18, 2);
  }
  
  getYSpeed() {
    return this.readShort(20, 2);
  }
  
  getZSpeed() {
    return this.readShort(22, 2);
  }
  
  getPitch() {
    return this.readShort(24, 2);
  }
  
  getRoll() {
    return this.readShort(26, 2);
  }
  
  getYaw() {
    return this.readShort(28, 2);
  }
  
  getRcState() {
    return (this.readShort(30, 1) & 128) == 0;
  }
  
  getFlycState() {
    return FLYC_STATE[this.readShort(30, 1) & -129];
  }
  
  getAppCommand() {
    return this.readShort(31, 1);
  }
  
  canIOCWork() {
    return (this.readInt(32, 4) & 1) == 1;
  }
  
  groundOrSky() {
    return this.readInt(32, 4) >> 1 & 3;
  }
  
  isMotorUp() {
    return (this.readInt(32, 4) >> 3 & 1) == 1
  }
  
  isSwaveWork() {
    return (this.readInt(32, 4) & 16) != 0;
  }
  
  getGohomeStatus() {
    return GOHOME_STATUS[this.readInt(32, 4) >> 5 & 7];
  }
  
  isImuPreheated() {
    return (this.readInt(32, 4) & 4096) != 0;
  }
  
  isVisionUsed() {
    return (this.readInt(32, 4) & 256) != 0;
  }
  
  getVoltageWarning() {
    return (this.readInt(32, 4) & 1536) >>> 9;
  }
  
  getModeChannel() {
    return (this.readInt(32, 4) & 24576) >>> 13;
  }
  
  getCompassError() {
    return (this.readInt(32, 4) & 65536) != 0;
  }
  
  getWaveError() {
    return (this.readInt(32, 4) & 131072) != 0;
  }
  
  getGpsLevel() {
    return this.readInt(32, 4) >>> 18 & 15;
  }
  
  getBatteryType() {
    if (this.getDroneType() == "Unknown" || this.getDroneType() == "None") {
      return "SMART";
    }
    return BATTERY_TYPE[this.readInt(32, 4) >>> 22 & 3];
  }
  
  isAcceletorOverRange() {
    return (this.readInt(32, 4) >>> 24 & 1) != 0;
  }
  
  isVibrating() {
    return (this.readInt(32, 4) >>> 25 & 1) != 0;
  }
  
  isBarometerDeadInAir() {
    return (this.readInt(32, 4) >>> 26 & 1) != 0;
  }
  
  isMotorBlocked() {
    return (this.readInt(32, 4) >>> 27 & 1) != 0;
  }
  
  isNotEnoughForce() {
    return (this.readInt(32, 4) >>> 28 & 1) != 0;
  }
  
  isPropellerCatapult() {
    return (this.readInt(32, 4) >>> 29 & 1) != 0;
  }
  
  isGoHomeHeightModified() {
    return (this.readInt(32, 4) >>> 30 & 1) != 0;
  }
  
  isOutOfLimit() {
    return (this.readInt(32, 4) >>> 31 & 1) != 0;
  }
  
  getGpsNum() {
    return this.readShort(36, 1);
  }
  
  getFlightAction() {
    return FLIGHT_ACTION[this.readShort(37, 1)];
  }
  
  getMotorFailedCause() {
    const s2 = this.readShort(38, 1);
    if (s2 >> 7 == 0) {
      return "NONE";
    }
    return MOTOR_START_FAILED_CAUSE[this.readShort(38, 1) & 127];
  }
  
  getNonGpsCause() {
    return NON_GPS_CAUSE[this.readInt(39, 1) & 15];
  }
  
  getWaypointLimitMode() {
    return (this.readInt(39, 1) & 16) == 16;
  }
  
  getBattery() {
    return this.readInt(40, 1);
  }
  
  getSwaveHeight() {
    return this.readShort(41, 1);
  }
  
  getFlyTime() {
    return this.readInt(42, 2) / 10;
  }
  
  getMotorRevolution() {
    return this.readShort(44, 1);
  }
  
  getFlycVersion() {
    return this.readInt(47, 1);
  }
  
  getDroneType() {
    return DRONE_TYPE[this.readInt(48, 1)];
  }
  
  getIMUinitFailReason() {
    return IMU_INITFAIL_REASON[this.readInt(49, 1)];
  }
  
  isImuInitError() {
    const reason = this.getIMUinitFailReason();
    return reason != "None" && reason != "ColletingData" && reason != "MonitorError";
  }
  
  getMotorFailReason() {
    return MOTOR_FAIL_REASON[this.readInt(50, 1)];
  }
  
  getSDKCtrlDevice() {
    return SDK_CONTROL_DEVICE[this.readInt(52, 1)];
  }
}
