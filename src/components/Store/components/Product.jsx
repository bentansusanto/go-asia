import MediaQuery from "../../../config/MediaQuery"
import { products } from "../../../data/listProduct"

const Product = () => {
    const isMobile = MediaQuery("(max-width: 600px)")
  return (
    <div className={`${isMobile? "grid-cols-2 gap-5" : "grid-cols-4 gap-6"} grid `}>
       {
          products.map((val, idx) => (
            <div key={idx} className="space-y-2">
                <img src={val.thumbnail} alt="" />
                <div className="space-y-1">
                <p className="font-eb-garamond capitalize">{val.name_product}</p>
                <p className="font-eb-garamond">${val.price}</p>
                </div>
            </div>
          ))
       }
    </div>
  )
}

export default Product