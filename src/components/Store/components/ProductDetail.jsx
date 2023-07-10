/* eslint-disable react/prop-types */
// import React from 'react'
import MediaQuery from '../../../config/MediaQuery'
import {IoArrowBack, IoClose} from 'react-icons/io5'
import Cart from "../../../assets/shopping-bag.svg";

const ProductDetail = ({openProductDetail, setOpenProductDetail, selectProduct, }) => {
  const isMobile = MediaQuery("(max-width: 600px)")
  return (
    <div>
      {
        isMobile? 
        // Mobile Device
        (<div className={`${!openProductDetail&&"opacity-0"} fixed bottom-0 w-screen bg-white text-black transition-all ease-linear duration-300 pt-5`}>
        <div className={`${!openProductDetail&&"hidden"} `}>
          <div className='flex items-center px-3'>
            <IoArrowBack onClick={()=>setOpenProductDetail(false)} className='text-xl text-black'/>
            <h4 className='text-center mx-auto font-semibold text-sm font-oxygen-mono'>{selectProduct.name_product}</h4>
          </div>
          <img src={selectProduct.thumbnail} alt="thumbnail" className='md-3'/>
          <div className='px-3 mt-5 space-y-2'>
            <p className='font-semibold text-sm'>Description</p>
            <p className='text-sm font-light text-gray-500'>{selectProduct.desc}</p>
          </div>
          {/* Price and button add cart */}
          <div className='flex items-center justify-between px-3 py-3 mt-10 bg-white w-screen shadow-[0_-15px_30px_0_rgba(0,0,0,0.1)]'>
            <p className='font-semibold'>USD ${selectProduct.price}</p>
            <button className='bg-blue-600 text-white py-2.5 px-5 space-x-2 flex items-center rounded-sm shadow-lg'>
              <img src={Cart} alt="shopping-cart" className='w-5'/>
              <p className='text-sm'>Add Cart</p>
              </button>
          </div>
        </div>
      </div>) : 
        // Desktop Device
        (<> 
          <div className={`${!openProductDetail&&"opacity-0 h-0 "} bg-[#080808b2] w-screen  transition-all ease-linear duration-200 fixed top-0 left-0 px-40`}>
             <div className={`${!openProductDetail&&"opacity-0 w-0 my-52"} bg-white relative mx-auto rounded-md w-auto py-5 px-20 my-44 transition-all ease-linear duration-200`}>
              <div className={` ${!openProductDetail&&"hidden"} absolute -top-5 -right-5 bg-black rounded-full p-3`}>
                <IoClose onClick={()=>setOpenProductDetail(false)} className={` text-3xl`}/>
              </div>
              <div className={`${!openProductDetail&&"hidden"} flex space-x-20`}>
                <img src={selectProduct.thumbnail} alt="thumbnail" className='w-[40%]'/>
                <div>
                  <h4 className='text-3xl pb-2 text-black font-oxygen-mono'>{selectProduct.name_product}</h4>
                  <p className='font-semibold font-oxygen-mono text-xl text-black'>USD ${selectProduct.price}</p>
                  <div className='mt-8 space-y-2'>
                    <p className='font-semibold font-oxygen-mono text-black'>Desctiption</p>
                    <p className='text-gray-400 leading-relaxed text-sm'>{selectProduct.desc}</p>
                  </div>
                  <div className='bg-gray-500 w-full h-[1.5px] my-5'/>
                  <div className='flex items-center justify-between'>
                    <p className='font-oxygen-mono text-black'>Quantity : <span>0</span></p>
                    <div className='space-x-3'>
                      <button className='border-blue-600 border hover:bg-pink-500 text-black rounded-sm w-9 h-9'>+</button>
                      <button className='border-blue-600 border hover:bg-pink-500 text-black rounded-sm w-9 h-9'>-</button>
                    </div>
                  </div>
                    <button className='bg-blue-600 mt-8 rounded-sm w-full py-3 font-semibold'>Add Cart</button>
                </div>
              </div>
              </div> 
          </div>
        </>)
      }
    </div>
  )
}

export default ProductDetail