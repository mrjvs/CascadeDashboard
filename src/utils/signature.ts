import crypto from 'crypto';

// configuration
import config from '../config';
const { signatureSecret, signatureTimeframe, signatureAlgorithm } = config.signature;

export function getSignature(userID: string, time: number = new Date().getTime()): {
    signature: string,
    expiry: number,
    userID: string,
} {
    const finalSignature: string = crypto.createHmac(signatureAlgorithm, signatureSecret)
        .update(time.toString())
        .update(userID)
        .digest('hex');
    return {
        signature: finalSignature,
        expiry: time + signatureTimeframe,
        userID,
    };
}

export function isSignatureValid(signature: string, expiry: number, userID: string): boolean {
    if (expiry <= new Date().getTime()) {
        return false;
    }
    return signature === getSignature(userID).signature;
}
