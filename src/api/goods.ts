import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods => goods.slice(0, 5)); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};

export const getGreenGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'green')); // get only green
};

export const getBlueGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'blue')); // get only blue
};
