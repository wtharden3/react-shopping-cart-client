import { Button } from '@material-ui/core';
//Styles
import { Wrapper } from './CartItem.styles';
//Types
import { CartItemType } from '../App';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void; //void means it returns nothing
  removeFromCart: (id: number) => void; 
}

const CartItem:React.FC<Props> = ({item, addToCart, removeFromCart}) => {
  return(
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className='info'>
          <p>Price: ${item.amount}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className='buttons'>
          <Button 
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default CartItem;