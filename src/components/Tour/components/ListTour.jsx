import MediaQuery from "../../../config/MediaQuery"
import { listTour } from "../../../data/listData"
import { getCurrentDate } from "../../../config/TimeConcert"
import { Link } from "react-router-dom"

const ListTour = () => {
  const isMobile = MediaQuery("(max-width: 600px)")
  return (
    <div className={`${isMobile? "mx-3" : "mx-40"} mt-3`}>
          {
            listTour.map((val, idx) => (
              <div key={idx} className="border-t-pink-400 border-t-[.5px] flex items-center justify-between py-5"> 
                  <div className={`${isMobile? "space-y-2 text-md" : "flex space-x-24"}`}>
                      <p className={`${isMobile? "text-sm" : "text-4xl"} font-oxygen-mono text-pink-400`}>{val.date_tour.slice(0, 2)}
                        {!isMobile&&<br/>} <span className={`${!isMobile&&"text-sm"} font-oxygen-mono`}>{val.date_tour.slice(3, 12)}</span>
                      </p>
                      <div className="space-y-2">
                        <h4 className={`${isMobile? "text-2xl" : "text-3xl"} font-eb-garamond`}>{val.location_tour}</h4>
                        <p className="text-pink-400 font-oxygen-mono text-sm">{val.country}</p>
                      </div>
                  </div>
                  <div>
                    <button className={`${isMobile? "px-6" : "px-9"} text-xs font-oxygen-mono uppercase rounded-lg border-[1px] border-blue-800 py-3 hover:bg-pink-500 hover:border-none`}> 
                    <Link to={'/ticket'}>on sale {getCurrentDate()}</Link>
                    </button>
                  </div>
              </div>
            ))
          }
      </div>
  )
}

export default ListTour