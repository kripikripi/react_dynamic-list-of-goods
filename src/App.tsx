import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        data-cy="all-button"
        onClick={() => goodsAPI.getAll().then(setGoods)}
      >
        Load all goods
      </button>
      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => goodsAPI.get5First().then(setGoods)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        data-cy="red-button"
        onClick={() => goodsAPI.getRedGoods().then(setGoods)}
      >
        Load red goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => goodsAPI.getGreenGoods().then(setGoods)}
      >
        Load green goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => goodsAPI.getBlueGoods().then(setGoods)}
      >
        Load blue goods
      </button>
      <GoodsList goods={visibleGoods} />
    </div>
  );
};
