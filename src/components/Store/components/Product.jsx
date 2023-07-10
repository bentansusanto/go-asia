
import { useEffect, useState } from "react"
import MediaQuery from "../../../config/MediaQuery"
import { products } from "../../../data/listProduct"


// eslint-disable-next-line react/prop-types
const Product = ({selectCategories, selectSorting, sortBy, handleSelectProduct}) => {
    const isMobile = MediaQuery("(max-width: 600px)")
    const [filteredProduct, setFilteredProduct] = useState([])
    const listProducts = products

    useEffect(() => {
      let filtered = [...listProducts];
      if(selectCategories !== 'all'){
          filtered = filtered.filter(product => product.category === selectCategories)
      }
      if(selectSorting !== ''){
        filtered = filtered.sort((a, b) => {
          if(selectSorting === sortBy[0]){
            return a.price - b.price
          }else if(selectSorting === sortBy[1]){
            return b.price - a.price
          }else{
            return 0
          }
        })
      }
      setFilteredProduct(filtered)
    }, [selectCategories, selectSorting, sortBy, listProducts])

  return (
    <div className={`${isMobile? "grid-cols-2 gap-5 px-3" : "grid-cols-4 gap-6"} grid `}>
       {
          // eslint-disable-next-line react/prop-types
          filteredProduct.map((val, idx) => (
            <div key={idx} onClick={() => handleSelectProduct(val.id)} className="space-y-2">
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