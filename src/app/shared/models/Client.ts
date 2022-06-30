export class Client{
  responseCode?: String;
  responseMessage?: String;
  data?: {
    transactionId?: String;
    data?: [
      {
        personId?: String;
        name?: String;
        middleName?: String;
        lastName1?: String;
        lastName2?: String;
        fullName?: String;
        email?: String;
        birthday?: String;
        documentCity?: String;
        documentCityDesc?: String;
        documentNumber?: String;
        documentType?: String;
        documentTypeDesc?: String;
        gender?: String;
        personTypeCode?: String;
        nit?: String;
        clientId?: String;
      }
    ]
  }
}