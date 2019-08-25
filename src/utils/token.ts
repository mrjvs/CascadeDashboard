import crypto from 'crypto';
import jwt from 'jsonwebtoken';

// configuration
import config from '../config';
const { tokenSecret, tokenAlgorithm, tokenExpiry } = config.token;

export function getToken(userID: string): {token: string, expiresIn: number} {
    const token = jwt.sign(JSON.stringify({
            sub: userID,
            exp: Math.floor(Date.now() / 1000) + tokenExpiry,
        }), tokenSecret, {
        algorithm: tokenAlgorithm,
    });
    return {
        token,
        expiresIn: tokenExpiry,
    };
}

export function isTokenValid(token: string): boolean {
    try {
        jwt.verify(token, tokenSecret);
        return true;
    } catch (err) {
        return false;
    }
}
