/* eslint-disable react/prop-types */
import MediaQuery from "../../../config/MediaQuery"
import { news } from "../../../data/listNews"


const ListNews = ({handleSelectNews}) => {
    const isMobile = MediaQuery("(max-width: 600px)")
  return (
    <>
     <div className={`${isMobile?"grid-cols-1 gap-y-5 mx-3 mt-5" : "grid-cols-3 gap-5 mx-40 mt-20"} grid mb-10`}>
        {
            news.map((list, idx) => (
                <div key={idx}  onClick={() => handleSelectNews(list.id)} className="border-purple-500 border p-3 hover:border-pink-400 cursor-pointer text-pink-400 hover:text-white space-y-20 grid grid-cols-1">
                    <p className="text-center font-oxygen-mono text-xs">News</p>
                    <h4 className="text-center text-3xl font-eb-garamond">{list.title_news}</h4>
                    <p className="text-center  font-oxygen-mono text-xs self-end">{list.date_news}</p>
                </div>
            ))
        }
    </div>   
    </>
  )
}

export default ListNews