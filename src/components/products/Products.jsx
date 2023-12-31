import { useSelector, useDispatch } from 'react-redux';
import {AiOutlineHeart, AiFillStar} from 'react-icons/ai';
import { addToCart } from '../../rtk/slices/cartSlice';
import { addToWishlist } from '../../rtk/slices/wishlistSlice';

function Products() {
  const products = useSelector(state => state.products.productsData);
  const dispatch = useDispatch();

  return (
    <section className="py-12">
      <div className="container">
        <div className="products-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {products.map(product => (
            <div className="product-content p-[20px] border-2 border-solid border-[#ccc] relative" key={product.id}>
              <button onClick={() => dispatch(addToWishlist(product))}>
                <AiOutlineHeart className='absolute right-1 top-2 text-[#0aad0a] text-[22px] cursor-pointer'/>
              </button>
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
              <button className='bg-[#0aad0a] block w-full p-[8px] text-white' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products;