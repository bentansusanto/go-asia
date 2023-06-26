import { IoClose, IoSearch } from "react-icons/io5"
import Logo from '../../../assets/logo-coldplay.svg'

// eslint-disable-next-line react/prop-types
const SearchMobile = ({openSearch, setOpenSearch}) => {
  return (
    <div className={`${openSearch ? "bg-[#0d0428] top-0 py-5 px-3" : "hidden"}  w-screen h-screen fixed transition-all ease-linear duration-500`}>
         <div className="items-center flex">
              <IoClose onClick={() => setOpenSearch(false)} className="text-2xl text-pink-400 hover:text-white"/>
              <img src={Logo} alt="logo-coldplay" className="w-40 mx-auto" />
            </div>
        {/* Form Search */}
        <div className="flex items-center space-x-5 border border-[#d91caa84] rounded-md px-3 py-2.5 w-full mt-10">
            <IoSearch className="text-lg text-[#ffaaeab5]"/>
            <input type="text" placeholder="Search product" className="bg-transparent w-full" />
        </div>
    </div>
  )
}

export default SearchMobile