import { IoClose } from "react-icons/io5"
import { BsInstagram } from "react-icons/bs"
import { ImFacebook } from "react-icons/im"
import { Link } from "react-router-dom"
import { listNav } from "../../../data/listMenu"
import Logo from '../../../assets/logo-coldplay.svg'

const listSocial = [
    {link:'https://instagram.com', icon: <BsInstagram/>},
    {link:'https://facebook.com', icon: <ImFacebook/>},
 ]

// eslint-disable-next-line react/prop-types
const NavMobile = ({openNav, setOpenNav}) => {
  return (
    <div className={`${openNav ? "bg-[#0d0428] top-0 py-5" : "hidden"}  w-screen h-screen fixed transition-all ease-linear duration-500`}> 
            <div className="items-center px-5 flex">
              <IoClose onClick={() => setOpenNav(false)} className="text-2xl text-pink-400 hover:text-white"/>
              <img src={Logo} alt="logo-coldplay" className="w-40 mx-auto" />
            </div>
            <nav className="space-y-8 px-5 mt-20 text-center">
              {
                listNav.map((val, idx) => (
                  <li key={idx} onClick={() => setOpenNav(false)} className="text-4xl font-eb-garamond text-pink-400 hover:text-white">
                    <Link to={val.link}>{val.page}</Link>
                  </li>
                ))
              }
            </nav>
            <div className="flex items-center space-x-6 mt-20 justify-center">
              {
                listSocial.map((social, index) => (
                  <div key={index} className="w-8 h-8 rounded-full border-2 border-pink-400 p-1.5 hover:border-white">
                    <Link to={social.link} className="text-center text-pink-400">
                      {social.icon}
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className="absolute bottom-5 mx-auto w-full ">
                <p className="text-sm text-pink-400 text-center">©2023, Go Asia | All Can Deserved</p>
            </div>
            </div>
  )
}

export default NavMobile