import { useState } from "react";
import {AiFillHeart, AiOutlineShoppingCart, AiOutlineLogout, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

function Header() {
  const [links]= useState([
    {path: '/', text: 'Home'},
    {path: 'products', text: 'Products'},
    {path: 'categories', text: 'Categories'},
    {path: 'brands', text: 'Brands'}
  ]);
  const [openMenu, setopenMenu] = useState(false);
  const cart = useSelector(state => state.cart.cartItems);
  return (
    <header className="h-[65px] p-[10px] bg-[#f6f6f6] fixed w-full left-0 top-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="left w-1/2 flex justify-between items-center flex-row-reverse gap-5 md:justify-end md:gap-0">
            <Link to={"/"} className="logo" title="logo">
              <img src="/images/logo.svg" alt="logo-img" className="h-[40px] object-cover" />
            </Link>
            <div className="text-[22px] cursor-pointer md:hidden" onClick={() => setopenMenu(!openMenu)}>
              {openMenu ? <AiOutlineClose/> : <AiOutlineMenu/>}
            </div>
          </div>
          <div className="right flex gap-10">
            <nav>
              <ul className={openMenu ? 'absolute left-[25px] top-[60px] w-full h-[222px] bg-[#fbf9f9]' : 'hidden md:flex md:gap-3'}>
                {links.map((link, index) => (
                  <li className="p-2 md:p-0 border-b-[1px] border-solid border-[#ccc] last:border-none md:border-none" key={index}>
                    <Link to={link.path} className="text-[20px] text-slate-500 transition-all duration-300 hover:pl-3 md:hover:pl-0 hover:text-[#0aad0a]">{link.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="links flex items-center gap-[20px]">
              <Link to={'wishlist'} title="Heart" className="relative">
                <AiFillHeart className="text-[#0aad0a] text-[30px]" />
                <span className="absolute top-[-5px] right-[-12px] w-[20px] h-[20px] rounded-full bg-black text-white text-[10px] flex justify-center items-center">2</span>
              </Link>
              <Link to={'cart'} title="cart" className="relative">
                <AiOutlineShoppingCart className="text-[#0aad0a] text-[30px]" />
                <span className="absolute top-[-5px] right-[-12px] w-[20px] h-[20px] rounded-full bg-black text-white text-[10px] flex justify-center items-center">{cart.length}</span>
              </Link>
              <Link to={'register'} title="logout">
                <AiOutlineLogout className="text-[#0aad0a] text-[30px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;