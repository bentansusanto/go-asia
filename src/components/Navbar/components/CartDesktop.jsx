/* eslint-disable react/prop-types */


const CartDesktop = ({openCart, setOpenCart}) => {
  return (
    <div
              onMouseLeave={() => setOpenCart(false)}    className={`${
                    openCart
                      ? " bg-[#1d1d1dcb] border border-[#dd20ba7d] top-9"
                      : "hidden"
                  } w-auto rounded-md px-5 py-3 flex space-x-5 transition-all right-0 ease-out absolute duration-300`}
                >
                    {/* List Product Cart */}
                  <div>
                    <div className="bg-gray-500 w-36 h-32">

                    </div>
                    <p>Product Not found</p>
                  </div>
                  <div className="bg-gray-600 h-96 w-[2px]"/>
                  {/* Form Checkout */}
                  <div className="space-y-3">
                    <h4 className=" font-semibold text-pink-500">Form Checkout</h4>
                    <form className="w-72">
                        <div className="space-y-1 mb-3">
                            <input type="text" placeholder="Enter your name" className="bg-transparent border border-gray-400 w-full outline-none py-2.5 px-2"/>
                        </div>
                        <div className="space-y-1 mb-3">
                            <input type="email" placeholder="Enter your email" className="bg-transparent border border-gray-400 w-full outline-none py-2.5 px-2"/>
                        </div>
                        <div className="space-y-1 mb-3">
                            <input type="text" placeholder="Enter phone number" className="bg-transparent border border-gray-400 w-full outline-none py-2.5 px-2"/>
                        </div>
                        <div className="space-y-1">
                            <input type="text" placeholder="Enter Address" className="bg-transparent border border-gray-400 w-full outline-none py-2.5 px-2"/>
                        </div>
                        <div className="bg-gray-500 h-[1px] w-full my-5"/>
                        <div className="space-y-1 mb-3 flex items-end justify-between">
                            <p className="text-sm font-oxygen-mono">Total</p>
                            <p>USD $50</p>
                        </div>
                        <div className="mb-3">
                            <button disabled className="bg-blue-600 w-full py-2.5 font-semibold rounded-md">Checkout</button>
                        </div>
                    </form>
                  </div>
                </div>
  )
}

export default CartDesktop