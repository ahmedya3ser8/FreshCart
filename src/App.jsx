import { Route, Routes } from "react-router-dom";
import Layout from "./basic/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Brands from "./pages/Brands";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="register" element={<Register />}/>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="products" element={<Products />}/>
          <Route path="categories" element={<Categories />}/>
          <Route path="brands" element={<Brands />}/>
          <Route path="wishlist" element={<Wishlist />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="checkout" element={<Checkout />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;