import crypto from "crypto";

// configuration
import { signature as configSignature } from "../config.json";
const { signatureSecret, signatureTimeframe, signatureAlgorithm } = configSignature;

export function getTimedSecret(time: number = new Date().getTime()): {secret: string, time: number} {
    const hash: string = crypto.createHmac(signatureAlgorithm, signatureSecret )
        .update(time.toString())
        .digest("hex");
    return {
        secret: hash,
        time
    };
}

export function getSignature(userID: string, timedSecret: any = getTimedSecret()): {
    signature: string,
    timeframe: number,
    creation: number,
    userID: string
} {
    const finalSignature: string = crypto.createHmac(signatureAlgorithm, timedSecret.secret)
        .update(userID)
        .digest("hex");
    return {
        signature: finalSignature,
        timeframe: signatureTimeframe,
        creation: timedSecret.time,
        userID
    };
}

export function isSignatureValid(signature: string, creationDate: number, userID: string): boolean {
    if (creationDate + signatureTimeframe <= new Date().getTime()) {
        return false;
    }
    return signature === getSignature(userID, getTimedSecret(creationDate)).signature;
}
