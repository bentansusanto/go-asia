import { useParams } from "react-router-dom"
import { news } from "../../../data/listNews"
import Navbar from "../../Navbar"
import MediaQuery from "../../../config/MediaQuery"
import NotFound from "../../NotFound"


const NewsDetail = () => {
    const {id} = useParams()
    const detailNew = news.find(list => list.id === parseInt(id))
    const isMobile = MediaQuery("(max-width: 600px)")
    return (
    <>
        {
            isMobile? 
            // Mobile Device
            (<NotFound/>) : 
            // Desktop Device
            (<div>
                <Navbar/>
                <div className="flex space-x-20 mx-36 mt-10">
                   <img src={detailNew.image_news} alt="image-news" className="w-[40%]"/>
                    <div>
                        <h4 className="text-4xl font-eb-garamond font-semibold">{detailNew.title_news}</h4>
                        <p className="text-sm text-gray-400 py-2">{detailNew.date_news}</p>
                        {
                            detailNew.desc_news?.map((list, idx) => (
                                <p key={idx} className="mt-8">{list}</p>
                            ))
                        }
                    </div>
                </div>
            </div>)
        }
    </>
  )
}

export default NewsDetail