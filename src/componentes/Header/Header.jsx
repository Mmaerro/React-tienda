import './header.css';
import imagen from '../../assets/img/logo.gif'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className="header-container"
      >
        <Navbar />
        <img src={imagen} alt="" />
    </div>
  )
}

export default Header