import Details from './records/details';
import OSD from './records/osd';
import Deform from './records/deform';
import SmartBattery from './records/smart-battery';
import Gimbal from './records/gimbal';
import RC from './records/rc';
import Custom from './records/custom';
import RCGPS from './records/rc-gps';
import CenterBattery from './records/center-battery';
import Home from './records/home';
import Recover from './records/recover';
import AppMessage from './records/app-message';
import AppGPS from './records/app-gps';

export const RecordType = <const>{
    1: "OSD",
    2: "HOME",
    3: "GIMBAL",
    4: "RC",
    5: "CUSTOM",
    6: "DEFORM",
    7: "CENTER_BATTERY",
    8: "SMART_BATTERY",
    9: "APP_TIP",
    10: "APP_WARN",
    11: "RC_GPS",
    12: "RC_DEBUG",
    13: "RECOVER",
    14: "APP_GPS",
    15: "FIRMWARE",
    16: "OFDM_DEBUG",
    17: "VISION_GROUP",
    18: "VISION_WARN",
    19: "MC_PARAM",
    20: "APP_OPERATION",
    255: "END",
    254: "OTHER"
}