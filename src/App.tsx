import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//styles
import { Wrapper } from './App.style';
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number; //to keep track of amount in our cart
}

const getProducts = async (): Promise<CartItemType> => { //declaring here because we don't have to get this on each render
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  return (
    <div className="App">
      Hello, World
    </div>
  );
}

export default App;
