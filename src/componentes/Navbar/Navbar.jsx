import CartWidget from '../cartWidget/CartWidget';
import ListNavbar from "../ListNavbar/ListNavbar"

import './navStyle.css';

import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
  const [fix, setfix] = useState(false)
  function setFixed(){
    if(window.scrollY >= 2){
      setfix(true)
    }else{
      setfix(false)
    }
  }

window.addEventListener("scroll", setFixed)
  return (
    <div className='contentNav'>
      <nav className={fix ? 'nav fixed':'nav'}>
     <Link to={"/"}>
     <img src="https://res.cloudinary.com/dcm170r29/image/upload/v1676387375/Sin_t%C3%ADtulo-2_ahabch.gif" alt="" />
     </Link>
        <ul>
          <NavLink  to="/" >
            <ListNavbar title="Todos Los Productos"/> 
          </NavLink>

          <NavLink to="/category/hambur" >  
            <ListNavbar title="Hamburguesas de Carne"/>
          </NavLink>

          <NavLink to="/category/veggie" > 
            <ListNavbar title="Hmaburguesas Veggie"/>
          </NavLink>
        </ul>
        <CartWidget />
      </nav>
      <img src="https://res.cloudinary.com/dcm170r29/image/upload/v1675871336/logo_vrnkr8.gif" alt="La Comanda" />
      <div className='svg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#b8b8b8" fillOpacity="1"
                    d="M0,192L12,186.7C24,181,48,171,72,186.7C96,203,120,245,144,261.3C168,277,192,267,216,240C240,213,264,171,288,165.3C312,160,336,192,360,176C384,160,408,96,432,85.3C456,75,480,117,504,160C528,203,552,245,576,224C600,203,624,117,648,69.3C672,21,696,11,720,37.3C744,64,768,128,792,170.7C816,213,840,235,864,202.7C888,171,912,85,936,48C960,11,984,21,1008,42.7C1032,64,1056,96,1080,112C1104,128,1128,128,1152,133.3C1176,139,1200,149,1224,160C1248,171,1272,181,1296,208C1320,235,1344,277,1368,261.3C1392,245,1416,171,1428,133.3L1440,96L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z">
            </path>
          </svg>
      </div>
    </div>
  )
}

export default Navbar