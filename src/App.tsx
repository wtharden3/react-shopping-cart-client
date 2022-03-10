import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
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

const getProducts = async (): Promise<CartItemType[]> => { //declaring here because we don't have to get this on each render
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[], Error>('products', getProducts);
  
  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null; //null means return value is empty

  const handleRemoveFromCart = () => null;

  if(isLoading) return <LinearProgress />;
  if(error) return <div>Something went wrong...</div>;
  return (
    <Wrapper className="App">
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddtoCart={handleAddToCart}/>  
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
