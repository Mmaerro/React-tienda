import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar/NavBar";
import Error from "./componentes/Error/error";
import ItemDetailContainer from "./componentes/itemDetailConteiner/ItemDetailContainer";
import Footer from "./componentes/Footer/Footer";
import Cart from "./componentes/Cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
