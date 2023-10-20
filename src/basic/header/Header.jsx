import { useState } from "react";
import {AiFillHeart, AiOutlineShoppingCart, AiOutlineLogout, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Link } from "react-router-dom";

function Header() {
  const [links, setLinks]= useState([
    {path: '/', text: 'Home'},
    {path: 'products', text: 'Products'},
    {path: 'categories', text: 'Categories'},
    {path: 'brands', text: 'Brands'},
    {path: 'wishlist', text: 'Wishlist'},
  ]);
  const [openMenu, setopenMenu] = useState(false);
  return (
    <header className="h-[60px] p-[10px] bg-[#f6f6f6] fixed w-full z-10">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="left w-1/2 flex justify-between items-center flex-row-reverse gap-5 md:justify-end md:gap-0">
            <Link to={"/"} className="logo" title="logo">
              <img src="/images/logo.svg" alt="logo-img" className="object-cover" />
            </Link>
            <div className="text-[22px] cursor-pointer md:hidden" onClick={() => setopenMenu(!openMenu)}>
              {openMenu ? <AiOutlineClose/> : <AiOutlineMenu/>}
            </div>
          </div>
          <div className="right flex gap-6">
            <nav>
              <ul className={openMenu ? 'absolute left-[25px] top-[60px] w-full h-[222px] bg-[#fbf9f9]' : 'hidden md:flex md:gap-3'}>
                {links.map((link, index) => (
                  <li className="p-2 md:p-0 border-b-[1px] border-solid border-[#ccc] last:border-none md:border-none" key={index}>
                    <Link to={link.path} className="text-[18px] text-slate-500 transition-all duration-300 hover:pl-3 md:hover:pl-0 hover:text-[#0aad0a]">{link.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="links flex items-center gap-[10px]">
              <Link to={'wishlist'} title="Heart">
                <AiFillHeart className="text-[#0aad0a] text-[22px]" />
              </Link>
              <Link to={'cart'} title="cart">
                <AiOutlineShoppingCart className="text-[#0aad0a] text-[22px]" />
              </Link>
              <Link to={'register'} title="logout">
                <AiOutlineLogout className="text-[#0aad0a] text-[22px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;