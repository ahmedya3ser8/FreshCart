
function CategoryItem() {
  const cataData = [
    {imgUrl: '/images/popular-categories/music.jpeg', text: 'Music'},
    {imgUrl: '/images/popular-categories/men.jpeg', text: 'Men\'s Fashion'},
    {imgUrl: '/images/popular-categories/women.jpeg', text: 'Women\'s Fashion'},
    {imgUrl: '/images/popular-categories/supermarket.png', text: 'Supermarket'},
    {imgUrl: '/images/popular-categories/baby & toys.png', text: 'Baby & Toys'},
    {imgUrl: '/images/popular-categories/home.png', text: 'Home'},
    {imgUrl: '/images/popular-categories/books.png', text: 'Books'},
    {imgUrl: '/images/popular-categories/beuaty & health.png', text: 'Beuaty & Health'},
    {imgUrl: '/images/popular-categories/mobiles.png', text: 'Mobiles'},
    {imgUrl: '/images/popular-categories/electronics.png', text: 'Electronics'},
  ]
  return (
    <section>
      <div className="container">
        <div className="cata-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {cataData.map((cataegory, index) => (
            <div className="cata-content relative group" key={index}>
              <div className="overlay content-[''] absolute left-0 top-0 w-full h-full bg-[#0aad0a66] opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
              <img src={cataegory.imgUrl} alt="cata-img" className="w-full h-[300px] object-cover" />
              <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-[22px] text-white text-center opacity-0 cursor-pointer transition-all duration-300 group-hover:opacity-100">{cataegory.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryItem;