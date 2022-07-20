export class Autenticar{
    responseCode?: String;
    responseMessage?: String;
    data?: {
        token?: String;
        refreshToken?: String;
        userId?: number
    }
}