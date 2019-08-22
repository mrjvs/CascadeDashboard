interface ConfigType {
    port: number;
    sessionSecret: string;
    token: {
        tokenSecret: string;
        tokenTimeframe: number;
        tokenAlgorithm: string;
    };
    discordApplication: {
        clientID: string;
        clientSecret: string;
        host: string;
    };
    connectionString: string;
}