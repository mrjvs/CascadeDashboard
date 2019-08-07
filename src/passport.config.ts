import passport from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';

// configuration
import config from './config';
const { clientID, clientSecret, callbackUrl } = config.discordApplication;

// passport configuration
export default function () {
    passport.use(new DiscordStrategy({
        clientID,
        clientSecret,
        callbackURL: callbackUrl,
        scope: [
            'identify', // all user info except for email
        ],
    },  (access: string,
        refresh: string,
        profile: DiscordStrategy.Profile,
        callback: (error: any, user?: any) => void) =>
        // we dont save accounts other than session cookies
        // so this just returns the profile
        callback(null, profile),
    ));

    // again, we dont save users so serialisation is a simple string conversion
    passport.serializeUser((user: any, done) => {
        done(null, JSON.stringify(user));
    });

    passport.deserializeUser((obj: string, done) => {
        done(null, JSON.parse(obj));
    });
}
