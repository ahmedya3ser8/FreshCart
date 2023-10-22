import Hero from "../components/hero/Hero";
import PopularCategories from "../components/popualrCategories/PopularCategories";
import Products from "../components/products/Products";

function Home() {
  return (
    <>
      <Hero />
      <PopularCategories />
      <Products />
    </>
  )
}

export default Home;