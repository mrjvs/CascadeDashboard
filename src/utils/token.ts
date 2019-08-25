import crypto from 'crypto';
import jwt from 'jsonwebtoken';

// configuration
import config from '../config';
const { tokenSecret, tokenAlgorithm, tokenExpiry } = config.token;

export function getToken(userID: string): string {
    const token = jwt.sign(() => {
        return { sub: userID };
    }, tokenSecret, {
        algorithm: tokenAlgorithm,
        expiresIn: tokenExpiry,
    });
    return token;
}

export function isTokenValid(token: string): boolean {
    try {
        jwt.verify(token, tokenSecret);
        return true;
    } catch (err) {
        return false;
    }
}
