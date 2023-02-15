import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar/NavBar";
import Error from './componentes/Error/error'
import ItemDetailContainer from "./componentes/itemDetailConteiner/ItemDetailContainer";
import Footer from "./componentes/Footer/Footer";

import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos"/>}/>
        <Route path="/category/:id" element={< ItemListContainer />}/>

        <Route path="/item/:id" element={ <ItemDetailContainer />}/>
      
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
