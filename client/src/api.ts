import axios from "axios";

// returns servers with title and member count.
export function getServers(): string {
    // TODO: get graphql server to make this.
    return 'oof, didnt code this yet';
}

// returns all server data from id.
export function getServerData(id: number): object {
    // TODO: get graphql server to make this.
    return {id};
}

// returns if autheticated and user if authenticated.
export function isAuthenticated(): boolean {
    // TODO: make auth system with tokens and discord.
    return false;
}

export async function isTokenValid(token: any): Promise<any> {
    const result = await axios.post('//api.cascadebot.org/istokenvalid', {
        creation: token.creation,
        userID: token.userID,
        signature: token.signature,
    },{
        withCredentials: true,
    });

    return result;
}

export async function getToken(): Promise<any> {
    const result = await axios.get('//api.cascadebot.org/gettoken', {
        withCredentials: true
    });
    return result;
}

export const auth: any = {
    isAuthenticated,
    getToken,
    isTokenValid,
};

export const cascade: any = {
    getServers,
    getServerData,
};
