import axios from './axios';

export const getAllCategories = () => {
  return axios.get('/get_all_cats');
};

export const getCategoryProperties = (catId: number) => {
  return axios.get(`/properties?cat=${catId}`);
};

export const getOptionsChild = (optionId: number) => {
  return axios.get(`get-options-child/${optionId}`);
};
