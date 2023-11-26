export default class Image {
    public image: ByteBuffer;
    public offset: number;

    constructor(buffer: ByteBuffer, offset: number) {
        this.image = buffer;
        this.offset = offset;
    }
}