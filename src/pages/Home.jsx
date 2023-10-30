import Hero from "../components/hero/Hero";
import PopularCategories from "../components/popularCategories/PopularCategories";
import Products from "../components/products/Products";

function Home() {
  return (
    <main>
      <Hero />
      <PopularCategories />
      <Products />
    </main>
  )
}

export default Home;