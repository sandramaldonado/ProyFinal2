
export interface PlanComposition {
  planCompositionCode?: string;
  planTradeName?: string;
  groupTradeName?: string;
  numberOfEntities?:string;
  tariff?: number;
  tariffCurrency?: string;
  currencyCode?:string;
  consumptionForm?:string;
  planList?: any[]



}
/*
{
  "planCompositionCode": "TIPEXTVM",
  "planTradeName": "SOMOS 3PLAY 70 Bs",
  "groupTradeName": "TRIPLE PLAY",
  "numberOfEntities": 3,
  "tariff": 70.0,
  "tariffCurrency": "BS",
  "currencyCode": "BOB",
  "consumptionForm": "POSTPAGO",
  "planList": [
      {
          "planCode": "PINPOS",
          "componentCode": "AS_INPOS",
          "componentTradeName": "INTERNET",
          "componentOffer": "VIVA WIFI POSTPAGO 20 Bs.",
          "consumptionEntityType": "IFIXED",
          "componentType": "ACCESSSERV",
          "componentCategoryId": 31330,
          "categoryData": {
              "componentCategoryId": 31330,
              "componentCategory": "CATEGORY_CA_INPOS",
              "componentCategoryDesc": "CA_INPOS",
              "tariff": "0",
              "tariffCurrency": "BS",
              "currencyCode": "BOB"
          }
      },
      {
          "planCode": "PMEXP",
          "componentCode": "AS_MEXP",
          "componentTradeName": "MOVIL",
          "componentOffer": "EXPLORA MOVIL +",
          "consumptionEntityType": "MOVIL",
          "componentType": "ACCESSSERV",
          "componentCategoryId": 30850,
          "categoryData": {
              "componentCategoryId": 30850,
              "componentCategory": "CATEGORY_CA_MEXP",
              "componentCategoryDesc": "CA_MEXP",
              "tariff": "0",
              "tariffCurrency": "BS",
              "currencyCode": "BOB"
          }
      },
      {
          "planCode": "PTVM",
          "componentCode": "AS_TVM",
          "componentTradeName": "ENTRETENIMIENTO",
          "componentOffer": "SOMOS TV 20 Bs",
          "consumptionEntityType": "TV",
          "componentType": "ACCESSSERV",
          "componentCategoryId": 31730,
          "categoryData": {
              "componentCategoryId": 31730,
              "componentCategory": "CATEGORY_CA_TVM",
              "componentCategoryDesc": "CA_TVM",
              "tariff": "0",
              "tariffCurrency": "BS",
              "currencyCode": "BOB"
          }
      }
  ]
},
*/
