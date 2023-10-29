import {useSelector, useDispatch} from 'react-redux';
import {AiFillDelete, AiOutlineHeart} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { addToCart, decreaseQuantity, removeItemFromCart, clearItemsFromCart } from '../../rtk/slices/cartSlice';
import { addToWishlist } from '../../rtk/slices/wishlistSlice';

function CartItems() {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <section className='pt-[75px] pb-10'>
      <div className="container">
        <div className="cart-wrapper grid grid-cols-1">
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div className="cart-box bg-[#f0f3f2] p-[10px]" key={index}>
                <h2 className='text-[25px] text-[#777] mb-1'>Shop Cart</h2>
                <div className="cart-head flex justify-between items-center p-[10px] mb-[20px] text-[#0aad0a]">
                  <h5>Total Cart Price :<span>{` ${totalPrice} EGP`}</span></h5>
                  <Link to={'/checkout'} className='p-[10px] border-[1px] border-solid border-[#ccc] rounded-[10px]'>checkout</Link>
                </div>
                <div className="cart-body flex justify-between items-center flex-col md:flex-row mb-[10px]">
                  <div className="left flex gap-6">
                    <img src={product.imgUrl} alt="img-cart" className='w-[120px]' />
                    <div className='flex justify-around flex-col gap-5'>
                      <div className="cart-info">
                        <h3>{product.category}</h3>
                        <p className='text-[#0aad0a]'>Price :<span>{` ${product.price} EGP`}</span></p>
                      </div>
                      <div className="cart-btns flex items-center gap-5">
                        <button className='flex items-center gap-[5px] p-[10px] border-[1px] border-solid border-[#ccc] rounded-[10px]' onClick={() => dispatch(removeItemFromCart(product))}>
                          <AiFillDelete className='text-[#0aad0a] text-[22px]' />
                          remove
                        </button>
                        <button className='p-[10px] border-[1px] border-solid border-[#ccc] rounded-[10px]' onClick={() => dispatch(addToWishlist(product))}>
                          <AiOutlineHeart className='text-[#0aad0a] text-[22px]' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="right flex items-center gap-5 p-5">
                    <button className='p-2 border-[1px] border-solid border-[#ccc] rounded-[10px]' onClick={() => dispatch(addToCart(product))}>+</button>
                    <span>{product.quantity}</span>
                    <button className='p-2 border-[1px] border-solid border-[#ccc] rounded-[10px]' onClick={() => dispatch(decreaseQuantity(product))}>-</button>
                  </div>
                </div>
                <div className="total-price border-b-[1px] border-solid border-[#0aad0a] text-[#0aad0a] pr-[10px]">
                  <p className='text-right mb-5'>Total Price items :<span>{` ${product.price * product.quantity} EGP`}</span></p>
                </div>
              </div>
            ))
          ) : (
            <div className="h-[35vh] flex justify-center items-center bg-[#f0f3f2]">
              <h2 className='text-[22px] text-[#0aad0a] p-[10px]'>
                Your Cart Is Empty:
                <Link to={'/products'} className='text-[22px] underline pl-[5px]'> Go To Shopping</Link>
              </h2>
            </div>
          )}
          {cart.length > 0 && (
            <div className="remove-cart bg-[#f0f3f2] p-5">
              <button className='block w-fit p-[10px] border-[1px] border-solid border-[#ccc] m-auto text-[#0aad0a] rounded-[10px]' onClick={() => dispatch(clearItemsFromCart())}>Remove cart</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CartItems;