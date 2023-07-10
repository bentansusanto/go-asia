/* eslint-disable react/prop-types */
import { IoArrowBack } from "react-icons/io5"
const NewsDetailMobile = ({selectNews, setOpenNewsDetail, openNewsDetail}) => {
  return (
    <div className={`${!openNewsDetail&&"opacity-0"} fixed bottom-0 bg-white w-screen transition-all ease-linear duration-200 `}>
        <div className={`${!openNewsDetail&&"hidden "} relative`}>  
            <IoArrowBack onClick={() => setOpenNewsDetail(false)} className=" absolute top-0 left-3 text-xl"/>
            <img src={selectNews.image_news} alt="" />
            <div className="px-3 mt-5 overflow-y-scroll h-60">
            <h4 className="text-black font-eb-garamond text-[22px] font-semibold">{selectNews.title_news}</h4>
            <p className="text-gray-400 text-sm py-1">{selectNews.date_news}</p>
            {
                selectNews.desc_news?.map((list, idx) => (
                    <p key={idx} className="text-black mt-3">{list}</p>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default NewsDetailMobile