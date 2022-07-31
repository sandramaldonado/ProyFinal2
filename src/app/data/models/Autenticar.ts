export class Autenticar{
    responseCode?: string;
    responseMessage?: string;
    data?: {
        token?: string;
        refreshToken?: string;
        userId?: number
    }
}