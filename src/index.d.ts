interface ConfigType {
    port: number;
    sessionSecret: string;
    token: {
        tokenSecret: string;
        tokenExpiry: number;
        tokenAlgorithm: string;
    };
    discordApplication: {
        clientID: string;
        clientSecret: string;
        host: string;
    };
    connectionString: string;
}