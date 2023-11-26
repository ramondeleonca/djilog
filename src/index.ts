// Parser imports
import ByteBuffer from 'bytebuffer';

// Record types (classes)
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

// Encryption keys
import encryptionKeys from './encryption-keys';
import Image from './records/image';
import { RecordType } from './types';

export default class DJILog {
    private buffer: ByteBuffer;
    public records: [] = [];

    constructor(data: Buffer | ByteBuffer | string) {
        const buffer = data instanceof ByteBuffer ? data : ByteBuffer.wrap(data, "binary", true);
        this.buffer = buffer;
        this.records = this.parse();
    }

    public parse(data: Buffer | ByteBuffer | string) {
        let wrappedBuffer = data instanceof ByteBuffer ? data : ByteBuffer.wrap(data, "binary", true);
        let records = [];

        // first 3 header bytes show address, where Details section starts
        let detailsOffset = wrappedBuffer.readInt(0);
        detailsOffset += wrappedBuffer.readInt(1);
        detailsOffset += wrappedBuffer.readInt(2);

        // guess if frames are encrypted
        const isEncrypted = wrappedBuffer.readUint8(10) > 6;

        // packets start at offset 12
        let offset = 12;

        // parse records are located before Details section
        while (offset < (detailsOffset || wrappedBuffer.limit - 4)) {
            if (this.isFrame(wrappedBuffer, offset)) {
                offset = this.extractFrame(wrappedBuffer, offset, isEncrypted);
                continue;
            }

            if (this.isImage(wrappedBuffer, offset)) {
                const image = this.extractImage(wrappedBuffer, offset);
                offset = image.offset;
                records.push(image);
                continue;
            }
            offset++;
        }
    }

    private extractFrame(buffer: ByteBuffer, offset: number, isEncrypted: boolean) {
        // first byte of a packet is 'type'
        let tId = buffer.readUint8(offset++);
        let type = RecordType[tId];

        // second byte is packet length
        let length = buffer.readUint8(offset++);

        let key;
        let dataOffset = offset;
        let dataLength = length;

        // Get key if frame is encrypted
        if (isEncrypted) {
            let byteKey = buffer.readUint8(offset);
            key = encryptionKeys[((tId - 1) * 256) + byteKey];
            dataOffset++;
            dataLength -= 2;
        }

        let data = null;

        switch (type) {
            case "OSD":
                data = new OSD(buffer, dataOffset, key);
                break;
            case "DEFORM":
                data = new Deform(buffer, dataOffset, key);
                break;
            case "SMART_BATTERY":
                data = new SmartBattery(buffer, dataOffset, key);
                break;
            case "GIMBAL":
                data = new Gimbal(buffer, dataOffset, key);
                break;
            case "RC":
                data = new RC(buffer, dataOffset, key);
                break;
            case "CUSTOM":
                data = new Custom(buffer, dataOffset, key);
                break;
            case "RC_GPS":
                data = new RCGPS(buffer, dataOffset, key);
                break;
            case "CENTER_BATTERY":
                data = new CenterBattery(buffer, dataOffset, key);
                break;
            case "HOME":
                data = new Home(buffer, dataOffset, key);
                break;
            case "RECOVER":
                data = new Recover(buffer, dataOffset, key);
                break;
            case "APP_TIP":
            case "APP_WARN":
                data = new AppMessage(buffer, dataOffset, dataLength, key);
                break;
            case "APP_GPS":
                data = new AppGPS(buffer, dataOffset, key);
                break;
        }

        if (data !== null) {
            this.emit(type, data);
            this.lastMessages[type] = data;
        }

        return offset + length + 1;
    }

    private extractImage(buffer: ByteBuffer, offset: number): Image {
        for (let endOffset = offset; endOffset < buffer.limit; endOffset++) {
            // End JFIF marker 0xFF 0xD9
            if (buffer.readUint16(endOffset) == 55807) {
                return new Image(buffer.copy(offset, endOffset + 2), endOffset + 2);
            }
        }
    }

    private isFrame(buffer: ByteBuffer, offset: number) {
        var tId = buffer.readUint8(offset++);
        var length = buffer.readUint8(offset++);
        if (offset + length > buffer.limit - 1) {
            return false;
        }

        var end = buffer.readUint8(offset + length);
        return tId != 0 && end == 0xFF;
    }

    private isImage(buffer: ByteBuffer, offset: number) {
        var header = buffer.readUint32(offset);
        return header == 3774863615; // JFIF header 0xFF 0xD8 0xFF 0xE0
    }

    public static parse(data: Buffer | ByteBuffer | string) {
        return new DJILog(data);
    }
}