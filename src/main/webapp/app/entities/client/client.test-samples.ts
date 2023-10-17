import { IClient, NewClient } from './client.model';

export const sampleWithRequiredData: IClient = {
  id: 20439,
  name: 'Électronique Électrique',
};

export const sampleWithPartialData: IClient = {
  id: 16301,
  name: 'sunt alors',
  age: 'arrière',
};

export const sampleWithFullData: IClient = {
  id: 22642,
  name: 'Folk Guinée Tuvalu',
  age: 'Élégant',
};

export const sampleWithNewData: NewClient = {
  name: 'facture',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
