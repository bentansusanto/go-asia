

// eslint-disable-next-line react/prop-types
const CartMobile = ({openCart}) => {
  return (
    <div className={`${openCart ? "bg-[#0d0428] top-20 py-5 px-3" : "hidden"}  w-screen h-auto fixed transition-all ease-linear duration-500`}>
        <p>Cart not found !</p>
    </div>
  )
}

export default CartMobile