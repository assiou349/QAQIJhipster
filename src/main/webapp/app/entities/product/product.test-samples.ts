import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 5300,
  name: 'tellement céans',
};

export const sampleWithPartialData: IProduct = {
  id: 29041,
  name: 'Poisson',
  amount: 15868,
};

export const sampleWithFullData: IProduct = {
  id: 7606,
  name: 'Directeur',
  description: 'proche',
  amount: 16053,
};

export const sampleWithNewData: NewProduct = {
  name: 'lâche fer cœruleum',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
