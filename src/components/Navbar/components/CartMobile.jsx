import { IoArrowBack } from "react-icons/io5"

// eslint-disable-next-line react/prop-types
const CartMobile = ({openCart, setOpenCart}) => {
  return (
    <div className={`${openCart ? "bg-[#0d0428] top-0 py-5 h-screen px-3" : "opacity-0 -left-10"} w-screen  fixed transition-all ease-linear duration-500 `}>
      <div className={`${!openCart&&"hidden"}`}>
        <div className="flex items-center">
          <IoArrowBack onClick={() => setOpenCart(false)} className="text-xl"/>
          <h2 className="font-semibold mx-auto text-pink-500">Shoping Cart</h2>
        </div>
      <div className="space-y-5 mt-5 overflow-y-scroll h-[40vh]">
      <div className="flex space-x-5">
        <div className="bg-gray-500 w-36 h-28"/>
        <div className="space-y-1">
        <p className="font-oxygen-mono text-[15px]">MUSIC OF THE SPHERES - BLACK TEE</p>
        <p className="font-oxygen-mono text-gray-400 text-[12px]">Size: <span className="text-sm text-white">L</span></p>
        <div className="flex justify-between">
        <p className="font-oxygen-mono text-gray-400 text-[12px]">Qty: <span className="text-sm text-white">2</span></p>
        <p className="font-oxygen-mono text-[15px]">$100</p>
        </div>
        <button className="bg-red-500 rounded-md w-full py-1.5">Delete</button>
        </div>
      </div>
      <div className="flex space-x-5">
        <div className="bg-gray-500 w-36 h-28"/>
        <div className="space-y-1">
        <p className="font-oxygen-mono text-[15px]">MUSIC OF THE SPHERES - BLACK TEE</p>
        <p className="font-oxygen-mono text-gray-400 text-[12px]">Size: <span className="text-sm text-white">L</span></p>
        <div className="flex justify-between">
        <p className="font-oxygen-mono text-gray-400 text-[12px]">Qty: <span className="text-sm text-white">2</span></p>
        <p className="font-oxygen-mono text-[15px]">$100</p>
        </div>
        <button className="bg-red-500 rounded-md w-full py-1.5">Delete</button>
        </div>
      </div>
      </div>
      <div className="bg-gray-500 h-[1px] w-full my-5"/>
      {/* Form Checkout */}
      <div>
        <form className="grid grid-cols-1 gap-3">
          <div className="overflow-y-scroll h-[36vh]">
          <div className="space-y-1 mb-3">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" className="w-full bg-transparent border border-gray-500 outline-none py-2.5 px-3" />
          </div>
          <div className="space-y-1 mb-3">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" className="w-full bg-transparent border border-gray-500 outline-none py-2.5 px-3" />
          </div>
          <div className="space-y-1 mb-3">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" className="w-full bg-transparent border border-gray-500 outline-none py-2.5 px-3" />
          </div>
          <div className=" mb-3">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" className="w-full bg-transparent border border-gray-500 outline-none py-2.5 px-3" />
          </div>
          </div>
          <div className="self-end">
            <button className="bg-blue-600 w-full py-2.5 ">Checkout</button>
          </div>
        </form>
      </div>
      </div>
      
    </div>
  )
}

export default CartMobile