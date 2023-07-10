import MediaQuery from '../../config/MediaQuery'
import Navbar from '../Navbar';
import Logo from '../../assets/logo-coldplay.svg'
import { backgroundTour } from "../../data/listMenu"
import { useEffect, useState } from "react"
import ListNews from './components/ListNews';
import { useNavigate } from 'react-router-dom';
import { news } from '../../data/listNews';
import NewsDetailMobile from './components/NewsDetailMobile';


const News = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const [transition, setTransition] = useState(false)
  const [currentImg, setCurrentImg] = useState(0)
  const [selectNews, setSelectNews] = useState(0)
  const [openNewsDetail, setOpenNewsDetail] = useState(false)
  const navigate = useNavigate()

  const handleSelectNews = (id) => {
    const newData = news.find(list => list.id === parseInt(id))  
    if(!isMobile){
        navigate(`/news/${id}`)
    }
      setSelectNews(newData)
    setOpenNewsDetail(true)
  }

  useEffect(() => {  
    const interval = setInterval(() => {
      setTransition(true)
      setTimeout(() => {
        setCurrentImg((currentImg + 1) % backgroundTour.length);
        setTransition(false);
      })
    }, 2000)
    return () => clearInterval(interval)
}, [currentImg])



  return (
    <div>
      <Navbar/>
      <div className={`${isMobile? "mx-3" : "flex mx-40"} mt-10`}>
          <div>
            <img src={Logo} alt="logo-coldplay" className={` ${isMobile? "w-40" : "w-52"} mx-auto`}/>
            <div className={`${isMobile? "my-5" : "my-10"} bg-purple-500 h-[1px] w-full`}/>
            <h2 className={`${isMobile ? "text-[30px]" : "text-5xl"} uppercase font-eb-garamond text-center`}>
            music <span className="lowercase italic">of the </span>spheres
          </h2>
          <div className={`${isMobile? "my-5" : "my-10"} bg-purple-500 h-[1px] w-full`}/>
          <p className="uppercase text-sm font-oxygen-mono text-center">All news in go asia</p>
          </div>
          {/* Background */}
          <div className={`${isMobile&& "hidden"} ml-52`}>
          <img src={backgroundTour[currentImg]} alt="bg-hero" className={` ${transition ? "opacity-0" : "opacity-100"} w-96 transition-opacity duration-500`}/>
          </div>
        </div>
        <ListNews handleSelectNews={handleSelectNews}/>
        <NewsDetailMobile openNewsDetail={openNewsDetail} setOpenNewsDetail={setOpenNewsDetail} selectNews={selectNews}/>
    </div>
  )
}

export default News