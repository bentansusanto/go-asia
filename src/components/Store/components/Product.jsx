
import MediaQuery from "../../../config/MediaQuery"


// eslint-disable-next-line react/prop-types
const Product = ({sortProducts}) => {
    const isMobile = MediaQuery("(max-width: 600px)")

  return (
    <div className={`${isMobile? "grid-cols-2 gap-5 px-3" : "grid-cols-4 gap-6"} grid `}>
       {
          // eslint-disable-next-line react/prop-types
          sortProducts.map((val, idx) => (
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