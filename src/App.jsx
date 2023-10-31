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
import Login from "./pages/Login";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="home" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="products" element={<Products />}/>
          <Route path="categories" element={<Categories />}/>
          <Route path="brands" element={<Brands />}/>
          <Route path="wishlist" element={<Wishlist />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="cart/checkout" element={<Checkout />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;