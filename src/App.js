import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Products from "./views/Products/Products";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="mainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
