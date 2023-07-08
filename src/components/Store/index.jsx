import Product from './components/Product'
import BgStore from '../../assets/banner-coldplay.webp'
import MediaQuery from '../../config/MediaQuery'
import {BiChevronDown} from 'react-icons/bi'
import { useState } from 'react'
import Navbar from '../Navbar'

const Store = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  const categories = ["All","Fashion", "Accesories" , "Music"]
  const filterData =["high to low", "low to high"]
  const [openFilter, setOpenFilter] = useState(false)
  const [selectFilter, setSelectFilter] = useState(0)

  const handleSelectFilter = (list) => {
    setSelectFilter(list)
    setOpenFilter(false)
  }

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter)
  }

  return (
    <div>
      <Navbar/>
        <div>
          <img src={BgStore} alt="bg-store" className='mx-auto w-screen'/>
          <div className={`${isMobile? "mt-8 space-y-6" :"mx-40 mt-10 space-y-10"}`}>
            <div className='flex items-center justify-between'>
            <div className={`${isMobile? "overflow-x-scroll w-full space-x-5 scroll-smooth pl-5 no-scrollbar" : "space-x-5 "} flex`}>
              {
                  categories.map((val, idx) => (
                      <div key={idx} className='border border-blue-500 cursor-pointer hover:bg-pink-500 font-oxygen-mono rounded-full py-1.5 px-5'>
                          <p className='text-sm'>{val}</p>
                      </div>
                  ))
              }
            </div>
            <div onClick={handleOpenFilter} className='bg-gray-900 p-2.5 w-auto relative rounded-sm'>
              <div className='flex items-center space-x-3'>
              <p className='text-sm font-oxygen-mono capitalize'>
              {
                      selectFilter? selectFilter?.length> 6 ? selectFilter?.substring(0, 6) + "..." : selectFilter : "Sort By"
                    }
                </p>
              <BiChevronDown className='text-lg'/>
              </div>
              <div className={` ${!openFilter ? "opacity-0 top-14" : "top-12"} absolute bg-gray-900 w-full right-0 transition-all ease-linear rounded-sm duration-300`}>
                {
                  filterData.map((list, idx) => (
                    <div key={idx} onClick={() => handleSelectFilter(list)} className={`${!openFilter&&"hidden"} hover:bg-gray-800 py-2.5 px-3`}>
                        <p className='capitalize font-oxygen-mono text-sm'>{list}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            </div>
            <Product/>
          </div>
        </div>
    </div>
  )
}

export default Store