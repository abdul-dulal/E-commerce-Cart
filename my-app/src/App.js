import { Route, Routes } from "react-router-dom";
import "./App.css";

import Shop from "./Components/Shop/Shop";
import Order from "./Components/orders/Order";
import Inventory from "./Components/inventory/Inventory";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Singup from "./Components/Signup/Singup";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </div>
  );
}

export default App;
