import CartWidget from '../cartWidget/CartWidget';
import './navStyle.css';
import ListNavbar from "../ListNavbar/ListNavbar"
import imagen from '../../assets/img/logo.gif'



const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <ListNavbar title="Hamburguesas"/>
          <ListNavbar title="Milanesas"/>
          <ListNavbar title="Pizzas"/>
          <ListNavbar title="Promociones"/>
            
        </ul>
        <CartWidget />
      </nav>
      <img src={imagen} alt="" />
    </div>
  )
}

export default Navbar