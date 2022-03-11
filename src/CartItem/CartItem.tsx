import { Button } from '@material-ui/core';
//Styles
import { Wrapper } from './CartItem.styles';
//Types
import { CartItemType } from '../App';

// type Props = {
//   item: CartItemType
// }

const CartItem:React.FC = () => {
  return(
    <Wrapper>
      Cart Item
    </Wrapper>
  )
}

export default CartItem;