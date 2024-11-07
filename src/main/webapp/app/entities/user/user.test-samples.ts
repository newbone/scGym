import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 17663,
  login: 'PQ',
};

export const sampleWithPartialData: IUser = {
  id: 11797,
  login: 'UjICM',
};

export const sampleWithFullData: IUser = {
  id: 27472,
  login: 'VS0VQ',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
