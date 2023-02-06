import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar/NavBar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer prop='Hola Bienvenido' />
    </div>
  );
}

export default App;
