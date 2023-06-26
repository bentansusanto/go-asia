import MediaQuery from "../../config/MediaQuery"
import LogoColdplay from '../../assets/logo-coldplay.svg';
import Galaxy from '../../assets/galaxy.svg';
import Saturnus from '../../assets/saturnus.svg';
import ListTour from "../Tour/components/listTour";
import { Link } from "react-router-dom";


const Homepage = () => {
    const isMobile = MediaQuery("(max-width: 600px)")

  return (
    <div>
        <div className="sticky top-0 bg-[#000e5672] py-4 shadow-lg">
        <img
          src={LogoColdplay}
          alt="logo-coldplay"
          className="w-40 mx-auto"
        />
      </div>
      <div
        className={` ${isMobile ? "mx-5 mt-10" : "mx-40 mt-10"} flex justify-between`}
      >
        {/* Image Galaxy */}
        <div>
          {!isMobile && <img src={Galaxy} alt="galaxy" className="w-52" />}
        </div>
        <div>
          <h2 className={`${isMobile ? "text-[30px]" : "text-5xl"} uppercase font-eb-garamond text-center`}>
            music <span className="lowercase italic">of the </span>spheres
          </h2>
          <div className="text-center">
            <button className="uppercase text-xl font-eb-garamond mt-10 border hover:border-pink-400 w-full py-3 rounded-xl border-white hover:text-pink-400">
              <Link to={'/tour'}>World Tour</Link>
            </button>
          </div>
        </div>
        <div>
          {!isMobile && <img src={Saturnus} alt="galaxy" className="w-52" />}
        </div>
      </div>
      <div className={`${isMobile? "mx-3 mt-10" : "mx-36 mt-20 mb-20"}`}>
        <p className="uppercase font-oxygen-mono text-center">All shows on sale now</p>
        <ListTour/>
      </div>
    </div>
  )
}

export default Homepage