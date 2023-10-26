import brandsData from '../../db/brand.json';

function BrandsItems() {
  return (
    <section>
    <div className="container">
      <div className="cata-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {brandsData.map((brand, index) => (
          <div className="cata-content relative group" key={index}>
            <div className="overlay content-[''] absolute left-0 top-0 w-full h-full bg-[#0aad0a66] opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
            <img src={brand.imgUrl} alt="cata-img" className="w-full h-[300px]" />
            <h2 className="absolute left-[50%] top-[10px] translate-x-[-50%] w-full text-[25px] text-center opacity-0 cursor-pointer transition-all duration-300 group-hover:opacity-100">{brand.text}</h2>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default BrandsItems;