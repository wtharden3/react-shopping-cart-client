import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
import Cart from './Cart/Cart';
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//styles
import { Wrapper, StyledButton } from './App.style';
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
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const {data, isLoading, error} = useQuery<CartItemType[], Error>('products', getProducts);
  
  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((accumlator: number, item) => {
      return accumlator + item.amount;
    }, 0)
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(previous => {
      //1. is the item already added into the cart
      const isItemInCart = previous.find(item => item.id === clickedItem.id)
      if (isItemInCart){
      // update item in specfic item
        return previous.map(item => 
          item.id === clickedItem.id 
          ? {...item, amount: item.amount + 1} 
          : item
        );
      }
      // 2. First time the item is added
      return [...previous, { ...clickedItem, amount: 1}]
    })
  }; //null means return value is empty

  const handleRemoveFromCart = () => null;

  if(isLoading) return <LinearProgress />;
  if(error) return <div>Something went wrong...</div>;
  return (
    <Wrapper className="App">
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart} 
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
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
