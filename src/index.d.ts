interface ConfigType {
    port: number;
    sessionSecret: string;
    signature: {
        signatureSecret: string;
        signatureTimeframe: number;
        signatureAlgorithm: string;
    };
    discordApplication: {
        clientID: string;
        clientSecret: string;
        callbackUrl: string;
    };
    connectionString: string;
}