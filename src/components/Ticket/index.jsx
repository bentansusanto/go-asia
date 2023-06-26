import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaQuery from "../../config/MediaQuery";
import LogoColdplay from '../../assets/logo-coldplay.svg';
import MapStadium from '../../assets/ticket-singapore.webp';
import Barcode from '../../assets/barcode.svg';
import { listTicketSingapore } from "../../data/listData";

const Ticket = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const router = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [selectTicket, setSelectTicket] = useState(0);

  const handleSelectTicket = (val) => {
    setSelectTicket(val);
    router("/form-ticket");
  };

  return (
    <div>
      <div className="sticky top-0 bg-[#000e5672] py-4 shadow-lg">
        <img src={LogoColdplay} alt="logo-coldplay" className="w-40 mx-auto" />
      </div>
      <div>
        <img
          src={MapStadium}
          alt="map-singapore"
          className="w-full md:w-[45%] mx-auto"
        />
      </div>
        {/* List Ticket */}
        <div
        className={`${
          isMobile ? "grid-cols-1 gap-y-5 mx-5" : "grid-cols-3 gap-10 mx-32"
        } grid justify-items-center mt-20`}
      >
        {
            listTicketSingapore.map((val, idx) =>(
            <div key={idx} onClick={() => handleSelectTicket(val)} className={`${isMobile? "w-auto" : "w-96"} bg-gray-100 rounded-tl-xl rounded-br-xl cursor-pointer`}>
            {/* Logo Coldplay */}
            <div className="to-[#4c0404] from-[#27098b] bg-gradient-to-tr w-full py-5 rounded-tl-lg">
              <p className="w-full text-center font-oxygen-mono text-lg font-semibold">{val.name_ticket}</p>
            </div>
            <div className="px-5 py-3 flex items-start justify-between">
                <div className="space-y-1 text-center">
                    <p className="text-gray-400 text-xs">price</p>
                    <h4 className="text-black text-md font-eb-garamond font-semibold">{val.price}</h4>
                </div>
                <div className="space-y-1 text-center">
                    <p className="text-gray-400 text-xs">Ticket type</p>
                    <h4 className="text-black text-md font-eb-garamond font-semibold">{val.name_ticket}</h4>
                </div>
                <div className="space-y-1 text-center">
                    <p className="text-gray-400 text-xs">place</p>
                    <h4 className="text-black text-md font-eb-garamond font-semibold">{val.country}</h4>
                </div>
            </div>
            <div className="text-center text-black my-3">
                <h4 className="text-lg font-oxygen-mono font-semibold">{val.location_tour}</h4>
            </div>
            <div className="h-10 w-full py-1 mt-5">
                <img src={Barcode} alt="barcode" className="w-[100vw]"/>
            </div>
          </div>
            ))
        }
      </div>
    </div>
  );
};

export default Ticket;
