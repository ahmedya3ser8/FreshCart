import { Route, Routes } from "react-router-dom";
import Layout from "./basic/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Brands from "./pages/Brands";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="products" element={<Products />}/>
          <Route path="categories" element={<Categories />}/>
          <Route path="brands" element={<Brands />}/>
          <Route path="wishlist" element={<Wishlist />}/>
          <Route path="cart" element={<Cart />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;