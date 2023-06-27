import Navbar from '../Navbar'
import Product from './components/Product'
import BgStore from '../../assets/banner-coldplay.webp'
import MediaQuery from '../../config/MediaQuery'

const Store = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  const categories = ["All","Fashion", "Accesories" , "Music"]
  return (
    <div>
        <Navbar/>
        <div>
          <img src={BgStore} alt="bg-store"/>
          <div className={`${isMobile? "mt-8 space-y-6" :"mx-40 mt-10 space-y-10"}`}>
            <div className={`${isMobile? "overflow-x-scroll w-full space-x-5 scroll-smooth pl-5 no-scrollbar" : "space-x-5 "} flex`}>
              {
                  categories.map((val, idx) => (
                      <div key={idx} className='border border-blue-500 cursor-pointer hover:bg-pink-500 font-oxygen-mono rounded-full py-1.5 px-5'>
                          <p className='text-sm'>{val}</p>
                      </div>
                  ))
              }
            </div>
            <Product/>
          </div>
        </div>
    </div>
  )
}

export default Store