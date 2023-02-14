import './cart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
  return (
    <div className='cart'>
      <a href=" " ><AiOutlineShoppingCart /> <span>5</span></a>
    </div>
  )
}

export default CartWidget