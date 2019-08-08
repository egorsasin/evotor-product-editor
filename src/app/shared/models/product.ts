import { EvoStore } from "../../evo-stores/models/evo-store";

export enum ProductTypes {
  NORMAL = "Товар",
  ALCOHOL_NOT_MARKED = "Пиво и слабый алкоголь",
  ALCOHOL_MARKED = "Крепкий алкоголь",
  SERVICE = "Услуга"
}

export interface Product {
  uuid: string;
  code: string;
  barCodes: string[];
  alcoCodes: string[];
  name: string;
  price: number;
  quantity: number;
  costPrice: number;
  measureName: string;
  tax: string;
  allowToSell: boolean;
  description: string;
  articleNumber: string;
  parentUuid: string;
  group: boolean;
  type: ProductTypes;
  alcoholByVolume: number;
  alcoholProductKindCode: number;
  tareVolume: number;

  store: EvoStore;
  parent: Product;
  expanded: boolean;
}
