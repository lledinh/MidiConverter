export class VariableLengthQuantity {
    public static decodeFromBytes(vlqBytes: number[]): number {
        return (vlqBytes[0] & 0x7f) + ((vlqBytes[1] & 0x7f) << 7) + ((vlqBytes[2] & 0x7f) << 14) + ((vlqBytes[3] & 0x7f) << 21);
    }

    public static decode(vlqNumber: number): number {
        // Get each bytes separately
        let vlqBytes: number[] = [
            (vlqNumber & 0x000000FF),
            ((vlqNumber & 0x0000FF00) >> 8),
            ((vlqNumber & 0x00FF0000) >> 16),
            ((vlqNumber & 0xFF000000) >> 24),
        ];

        return VariableLengthQuantity.decodeFromBytes(vlqBytes);
    }

    public static encode(number: number): number {
        let bytes: number[] = [
            (number & 0x7F),
            (number >> 7) & 0x7F,
            (number >> 14) & 0x7F,
            (number >> 21) & 0x7F,
        ];

        let vlqBytes: number[] = [];

        for (let i = 0; i < bytes.length; i++) {
            if (i == 0) {
                vlqBytes[i] = (bytes[i] & 0x7F);
            }
            else {
                if (bytes[i] > 0) {
                    vlqBytes[i] = (bytes[i] | 0x80);
                }
                else {
                    vlqBytes[i] = 0;
                }
            }
        }

        return vlqBytes[0] + (vlqBytes[1] << 8) + (vlqBytes[2] << 16) + (vlqBytes[3] << 24);
    }
}