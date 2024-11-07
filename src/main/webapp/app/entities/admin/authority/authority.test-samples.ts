import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '58c4f05d-a6eb-4004-8e15-8abb97d29e07',
};

export const sampleWithPartialData: IAuthority = {
  name: '3bf0e1c0-1e5b-452d-a7ea-2815889bd105',
};

export const sampleWithFullData: IAuthority = {
  name: 'fcf3f706-617c-4712-b673-7dfc99678d02',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
