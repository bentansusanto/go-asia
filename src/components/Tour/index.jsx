/* eslint-disable no-undef */

import MediaQuery from "../../config/MediaQuery"
import Navbar from "../Navbar"
import ListTours from "./components/ListTour"
import Logo from '../../assets/logo-coldplay.svg'
import { Link } from "react-router-dom"
import { backgroundTour } from "../../data/listMenu"
import { useEffect, useState } from "react"

const Tour = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const [transition, setTransition] = useState(false)
  const [currentImg, setCurrentImg] = useState(0)

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
          <div className="text-center">
            <button className="uppercase text-xl font-eb-garamond mb-10 border hover:border-pink-400 w-full py-3 rounded-xl border-pink-300 hover:text-pink-400">
              <Link to={'/tour'}>World Tour</Link>
            </button>
          </div>
          <p className="uppercase text-sm font-oxygen-mono text-center">All shows on sale now</p>
          </div>
          {/* Background */}
          <div className={`${isMobile&& "hidden"} ml-52`}>
          <img src={backgroundTour[currentImg]} alt="bg-hero" className={` ${transition ? "opacity-0" : "opacity-100"} w-96 transition-opacity duration-500`}/>
          </div>
        </div>
      <ListTours/>
    </div>
  )
}

export default Tour