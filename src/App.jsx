import "./App.css";
import Product from "./Product.jsx";

function App() {
  
  return (
  <>
    <h2>Blockbuster Deals on Computer Accessories | Shop Now</h2>
    <Product title="Logitech MX Player" idx={0}/>
    <Product title="Apple Pencil (2nd Gen)" idx={1}/>
    <Product title="Zebronics" idx={2}/>
    <Product title="Petronics Toad" idx={3}/>
  </>
  );
}

export default App;
