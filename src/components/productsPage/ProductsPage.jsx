import {AiOutlineHeart, AiFillStar} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function ProductsPage() {
  const [search, setSearch] = useState('');
  const products = useSelector(state => state.products.productsData);

  return (
    <div className="products pt-20 py-16 min-h-[calc(100vh-80px)]">
      <div className="container">
        <div className="product-input mb-8">
          <input type="text" placeholder="Search..." id="product-search" onChange={(e) => setSearch(e.target.value) } className="p-[10px] h-[40px] rounded-[10px] bg-[#eee] border-[1px] border-solid border-[#ccc] outline-none w-[80%] block m-auto"/>
        </div>
        <div className="products-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {products.filter(item => search.toLowerCase() === '' ? item : item.category.toLowerCase().indexOf(search) !== -1).map(product => (
            <div className="product-content p-[20px] border-2 border-solid border-[#ccc] relative" key={product.id}>
              <AiOutlineHeart className='absolute right-1 top-2 text-[#0aad0a] text-[22px] cursor-pointer'/>
              <div className="product-img mt-2">
                <img src={product.imgUrl} alt={product.category} className='w-full object-cover' />
              </div>
              <div className="product-text mb-[5px]">
                <h4 className='text-[#0aad0a]'>{product.category}</h4>
                <h5 className='text-[13px] text-[#777]'>{product.text}</h5>
              </div>
              <div className="product-info flex justify-between items-center mb-[10px]">
                <span className='text-[#777]'>{`${product.price} EGP`}</span>
                <span className='text-[#777] flex items-center'>
                  <AiFillStar className='text-[#ffc908] text-[22px]' />
                  {product.rate}
                </span>
              </div>
              <button className='bg-[#0aad0a] block w-full p-[8px] text-white'>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage;