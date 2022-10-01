import api from './index';

export const fetchPokeman = (mon: string) => {
  return api.get(`pokemon/${mon}`);
};
