export interface IProduct {
  title: string;
  image: string;
  initialPrice: number;
  discountPrice: number;
  freeShipping: boolean;
  openBox: boolean;
  manufacturer: string;
  ratio: number;
  id: string;
}

export interface AllProducts {
  products: IProduct[];
}