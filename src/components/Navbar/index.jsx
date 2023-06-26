import { Link } from "react-router-dom"
import MediaQuery from "../../config/MediaQuery"
import Logo from '../../assets/logo-coldplay.svg'
import Cart from '../../assets/shopping-bag.svg'
import { listNav } from "../../data/listMenu"
import {IoMenu, IoSearch} from 'react-icons/io5'
import { useState } from "react"
import NavMobile from "./components/NavMobile"
import SearchMobile from "./components/SearchMobile"
import CartMobile from "./components/CartMobile"


const Navbar = () => {
    const isMobile = MediaQuery("(max-width: 600px)")
    const [openNav, setOpenNav] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    // handle open navbar
    const handleOpenNav = () => {
      setOpenNav(!openNav)
    }

    // handle open search
    const handleOpenSearch = () => {
      setOpenSearch(!openSearch)
    }

    // handle open cart
    const handleOpenCart = () => {
      setOpenCart(!openCart)
    }
    

  return (
    <div className={`${!isMobile&&"px-20"} py-5`}>
      {
        isMobile? 
        // Mobile Device
        (<div>
            <div className="flex px-5">
              <img src={Logo} alt="logo-coldplay" className="w-36" />
              <div className="flex space-x-6 items-center ml-auto">
                <IoSearch onClick={handleOpenSearch} className="text-xl text-white"/>
              <div onClick={handleOpenCart} className="relative">
                 <img src={Cart} alt="shop-cart" 
              className="w-6"/>
                  <div className="bg-pink-500 w-5 h-5 text-[12px] text-center rounded-full absolute top-0 left-4">0</div>
            </div>
              <IoMenu onClick={handleOpenNav} className="text-2xl text-white"/>
              </div>
            </div>
            {/* Open Navbar */}
            <NavMobile openNav={openNav} setOpenNav={setOpenNav}/>
            {/* Open Navbar */}
            <SearchMobile openSearch={openSearch} setOpenSearch={setOpenSearch}/>
            {/* Open Cart */}
            <CartMobile openCart={openCart} />

        </div>) : 
        // Desktop Device
        (<div className="flex items-center">
            <img src={Logo} alt="logo-coldplay" className="w-40" />
            
            <nav className="flex space-x-8 ml-auto font-oxygen-mono text-sm">
              {
                listNav.map((val, idx) => (
                  <li key={idx}>
                    <Link to={val.link}>{val.page}</Link>
                  </li>
                ))
              }
            </nav>
            <div className="ml-auto relative">
              <img src={Cart} alt="shop-cart" 
              className="w-6"/>
              <div className="bg-pink-500 w-5 h-5 text-[12px] text-center rounded-full absolute top-0 left-4">0</div>
            </div>
        </div>)
      }
    </div>
  )
}

export default Navbar