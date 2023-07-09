import Product from './components/Product'
import BgStore from '../../assets/banner-coldplay.webp'
import MediaQuery from '../../config/MediaQuery'
import {BiChevronDown} from 'react-icons/bi'
import {useState, useEffect } from 'react'
import Navbar from '../Navbar'
import {LuSettings2} from 'react-icons/lu'
import { products } from '../../data/listProduct'

const Store = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  const categories = ["All","Fashion","Accesories"]
  // const [loading, setLoading] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sortBy = ["low to high", "high to low"]
  // const listProducts = products
  const [openFilter, setOpenFilter] = useState(false)
  const [selectSorting, setSelectSorting] = useState("")
  const [selectCategories, setSelectCategories] = useState("")
  const [filteredProduct, setFilteredProduct] = useState([])

  const handleSelectFilter = (list) => {
    setSelectSorting(list)
    setOpenFilter(false)
  }

  const handleSelectCategories = (val) => {
    setSelectCategories(val)
    // setOpenFilter(false)
  }

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter)
  }

  useEffect(() => {
    let filtered = products;
    if (selectCategories !== 'All') {
      filtered = products.filter((product) => product.category === selectCategories.toLowerCase());
    }

    let sorted = filtered;
    if (selectSorting === sortBy[0]) {
      sorted = [...filtered].sort((a, b) => a.price - b.price);
    } else if (selectSorting === sortBy[1]) {
      sorted = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProduct(sorted)
  }, [selectCategories, selectSorting, sortBy]);
  



  return (
    <div>
      <Navbar/>
        <div>
          <img src={BgStore} alt="bg-store" className='mx-auto w-screen'/>
          <div className={`${isMobile? "mt-8 space-y-6" :"mx-40 mt-10 space-y-10"}`}>
                <div className={`${isMobile? "flex-row-reverse" : "justify-between"} flex items-center`}>
                <div className={`${isMobile? "overflow-x-scroll scroll-smooth space-x-3 ml-3 no-scrollbar" : "space-x-5"}  flex`}>
                  {
                      categories.map((val, idx) => (
                          <div key={idx} onClick={() => handleSelectCategories(val)} className='border border-blue-500 cursor-pointer hover:bg-pink-500 font-oxygen-mono rounded-full py-1.5 px-5'>
                              <p className='text-sm'>{val}</p>
                          </div>
                      ))
                  }
                </div>
                {
                  isMobile ? 
                  (<div>
                    <div onClick={handleOpenFilter} className='border ml-3 border-blue-500  hover:bg-pink-500 rounded-full px-3 py-1.5'>
                      <LuSettings2 className='text-white text-xl'/>
                    </div>
                    <div className={`${!openFilter&&"opacity-0"} bg-white px-2 py-5 fixed bottom-0 w-screen rounded-t-2xl transition-all ease-linear duration-150`}>
                      <h2 className={`${!openFilter&&"hidden"} text-black font-semibold text-xl font-oxygen-mono`}>Filter</h2>
                      <div className={` ${!openFilter&&"hidden"} mt-5 flex space-x-3`}>
                        {
                          sortBy.map((list, idx) => (
                            <div key={idx} className={`bg-gray-200 py-1.5 px-3 text-black rounded-full`}>
                              <p className='capitalize'>{list}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>) : 
                  (<div onClick={handleOpenFilter} className='bg-gray-900 p-2.5 w-auto relative rounded-sm'>
                  <div className='flex items-center space-x-3'>
                  <p className='text-sm font-oxygen-mono capitalize'>
                  {
                          selectSorting? selectSorting?.length> 6 ? selectSorting?.substring(0, 6) + "..." : selectSorting : "Sort By"
                        }
                    </p>
                  <BiChevronDown className='text-lg'/>
                  </div>
                  <div className={` ${!openFilter ? "opacity-0 top-14" : "top-12"} absolute bg-gray-900 w-full right-0 transition-all ease-linear rounded-sm duration-300`}>
                    {
                      sortBy.map((list, idx) => (
                        <div key={idx} onClick={() => handleSelectFilter(list)} className={`${!openFilter&&"hidden"} hover:bg-gray-800 py-2.5 px-3`}>
                            <p className='capitalize font-oxygen-mono text-sm'>{list}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>)
                }
                </div>
            <Product sortProducts={filteredProduct}/>
          </div>
        </div>
    </div>
  )
}

export default Store