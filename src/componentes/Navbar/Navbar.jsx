import CartWidget from '../cartWidget/CartWidget';
import './navStyle.css';
import ListNavbar from "../ListNavbar/ListNavbar"


const Navbar = () => {
  return (
    <nav>
      <ul>
        <ListNavbar title="Hamburguesas"/>
        <ListNavbar title="Milanesas"/>
        <ListNavbar title="Pizzas"/>
        <ListNavbar title="Promociones"/>
          
      </ul>
      <CartWidget />
    </nav>
  )
}

export default Navbar