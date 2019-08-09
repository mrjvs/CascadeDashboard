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
        host: string;
    };
    connectionString: string;
}