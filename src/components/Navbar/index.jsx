import { useLocation, Link } from "react-router-dom";
import MediaQuery from "../../config/MediaQuery";
// import Logo from '../../assets/logo-coldplay.svg'
import { useState } from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import Cart from "../../assets/shopping-bag.svg";
import { listNav } from "../../data/listMenu";
import CartMobile from "./components/CartMobile";
import NavMobile from "./components/NavMobile";
import SearchMobile from "./components/SearchMobile";

const Navbar = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const location = useLocation();

  const isStorePage = location.pathname === "store";

  // handle open navbar
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  // handle open search
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
    setOpenCart(false)
  };

  // handle open cart
  const handleOpenCart = () => {
    setOpenCart(!openCart);
    setOpenSearch(false)
  };

  return (
    <div className={`${!isMobile && "px-20"} py-5`}>
      {isMobile ? (
        // Mobile Device
        <div>
          <div className="flex px-5">
            {/* <img src={Logo} alt="logo-coldplay" className="w-36" /> */}
            <h1 className="text-2xl text-pink-500 font-eb-garamond">
              COLDPLAY
            </h1>
            <div className="flex space-x-6 items-center ml-auto">
              {isStorePage && (
                <IoSearch
                  onClick={handleOpenSearch}
                  className="text-xl text-white"
                />
              )}
              {isStorePage && (
                <div onClick={handleOpenCart} className="relative">
                  <img src={Cart} alt="shop-cart" className="w-6" />
                  <div className="bg-pink-500 w-5 h-5 text-[12px] text-center rounded-full absolute top-0 left-4">
                    0
                  </div>
                </div>
              )}
              <IoMenu onClick={handleOpenNav} className="text-2xl text-white" />
            </div>
          </div>
          {/* Open Navbar */}
          <NavMobile openNav={openNav} setOpenNav={setOpenNav} />
          {/* Open Navbar */}
          <SearchMobile openSearch={openSearch} setOpenSearch={setOpenSearch} />
          {/* Open Cart */}
          <CartMobile openCart={openCart} />
        </div>
      ) : (
        // Desktop Device
        <div className="flex items-center">
          {/* <img src={Logo} alt="logo-coldplay" className="w-40" /> */}
          <h1 className="text-2xl text-pink-500 font-eb-garamond">COLDPLAY</h1>
          <nav className="flex space-x-8 ml-auto font-oxygen-mono text-sm">
            {listNav.map((val, idx) => (
              <li key={idx}>
                <Link to={val.link}>{val.page}</Link>
              </li>
            ))}
          </nav>
          {
            isStorePage&&
          <div className="flex relative items-center space-x-8 ml-auto">
            {/* Search */}
            <div className="relative">
              <IoSearch onClick={handleOpenSearch} className="text-lg"/>
              <div className={`${openSearch? "bg-[#1d1d1d7d] rounded-md border border-[#dd20ba7d] w-72" : "hidden"} absolute top-8 right-0 p-3`}>
                  <div className="bg-[#13116c91] rounded-md py-2.5 px-3 flex items-center space-x-3">
                    <IoSearch className="text-lg text-gray-400"/>
                    <input type="text" placeholder="Search here ..."  className="w-full bg-transparent"/>
                  </div>
              </div>
            </div>
            {/* Cart */}
            <div onClick={handleOpenCart}  className="relative">
              <img  src={Cart} alt="shop-cart" className="w-6" />
              <div className="bg-pink-500 w-5 h-5 text-[12px] text-center rounded-full absolute top-0 left-4 p-0.5">
                0
              </div>
            <div className={`${openCart? " bg-[#1d1d1d7d] border border-[#dd20ba7d] top-9" : "hidden"} w-72 rounded-md px-5 py-3 transition-all right-0 ease-out absolute duration-300`}>
                <p className="font-oxygen-mono text-sm">Product not found</p>
            </div>
            </div>
          </div>
          }
        </div>
      )}
    </div>
  );
};

export default Navbar;
