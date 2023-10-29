import {AiFillDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { clearItemsFromWishlist, removeItemFromWishlist } from '../../rtk/slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { addToCart } from '../../rtk/slices/cartSlice';

function WishlistProducts() {
  const wishlist = useSelector(state => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  return (
    <section className='pt-[75px] pb-10'>
      <div className="container">
        <div className="wishlist-wrapper grid grid-cols-1">
          <h2 className='text-[25px] text-[#777] mb-2'>Shop Wishlist</h2>
          {wishlist.length > 0 ? (
            wishlist.map((product, index) => (
              <div className="wishlist-box bg-[#f0f3f2] p-[10px]" key={index}>
                <div className="flex justify-between items-center gap-0 md:gap-6 mb-[10px]">
                  <img src={product.imgUrl} alt="img-wishlist" className='w-[120px] object-cover' />
                  <div className="wishlist-body flex justify-between items-center flex-1 flex-row gap-5 px-[15px]">
                    <div className="left flex flex-col gap-[10px]">
                      <h4 className='text-[17px] text-[#777]'>{product.text}</h4>
                      <p className='text-[17px] text-[#0aad0a]'>Price:{` ${product.price} EGP`}</p>
                    </div>
                    <div className="right">
                      <button className='flex items-center gap-[5px] text-[#0aad0a] p-[8px] border-[1px] border-solid border-[#ccc] rounded-[10px]' onClick={() => dispatch(removeItemFromWishlist(product))}>
                        <AiFillDelete className='text-[22px]' />
                        remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] border-solid border-[#0aad0a]">
                  <button className='bg-[#0aad0a] block w-full p-[8px] text-white mb-5' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                </div>
              </div>
            ))
          ): (
            <div className="h-[35vh] flex justify-center items-center bg-[#f0f3f2]">
              <h2 className='text-[22px] text-[#0aad0a] p-[10px]'>
                Your Wishlist Is Empty:
                <Link to={'/products'} className='text-[22px] underline pl-[5px]'> Go To Shopping</Link>
              </h2>
            </div>
          )}
            {wishlist.length > 0 && (
              <div className="remove-wishlist bg-[#f0f3f2] p-5">
                <button className='block w-fit p-[10px] border-[1px] border-solid border-[#ccc] m-auto text-[#0aad0a] rounded-[10px]' onClick={() => dispatch(clearItemsFromWishlist())}>Remove Wishlist</button>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default WishlistProducts;