import { Button } from '@material-ui/core';
//Types
import { CartItemType } from '../App';
//Styles
import { Wrapper } from './Items.styles';

type Props = {
  item: CartItemType;
  handleAddtoCart: (clickedItem: CartItemType) => void; //speaks to the parameter and will not return any value
}

const Item: React.FC<Props> = ({item, handleAddtoCart}) => { //React.FC FC == FunctionComponent
  return(
    <Wrapper>
      <img src={item.image} alt={item.title}/>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      <Button onClick={() => handleAddtoCart(item)}>Add To Cart</Button>
    </Wrapper>
  )
}

export default Item;