import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import LogoColdplay from '../../assets/logo-coldplay.svg';
import BgTicket from '../../assets/poster-coldplay.webp';
import MediaQuery from '../../config/MediaQuery';
import { listTicketSingapore } from '../../data/listData';


const FormTicket = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const [selectTicket, setSelectTicket] = useState({});
  const numberWA = '+60165770681'
  // const numberWA = '+6289604276162'
  const [dropListData, setDropListData] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    people: "",
    date: "",
    address: "",
  });

  // Handle DropDown
  const handleDropDown = () => {
    setDropListData(!dropListData);
  };

  const handleOptionClick = (val) => {
    setSelectTicket(val);
    setDropListData(false);
  };

  // Handle Input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTicketChange = (e) => {
    const ticketName = e.target.value;
    const foundTicket = listTicketSingapore.find((ticket) => ticket.name_ticket === ticketName);
    setSelectTicket(foundTicket || null);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectTicket) {
      const { name_ticket: ticketName, price: ticketPrice } = selectTicket;
      const { name, email, age, phone,people,date, address } = data;
      const message = `Hello, I want to buy concert tickets. \n\nName: ${name.toUpperCase()}\nEmail: ${email}\nAge: ${age}\nPhone: ${phone}\nHow many people: ${people}\n Date:${date}\nAddress: ${address}\nTicket Type: ${ticketName}\nPrice: ${ticketPrice}`;
      const whatsappLink = `https://wa.me/${numberWA}?text=${encodeURIComponent(message)}`;

      // Replace 'YOUR_PHONE_NUMBER' with your phone number in the format: country code + area code + phone number
      window.location.href = whatsappLink;
    }
  };

  return (
    <div>
      <div className="bg-[#000e5672] py-4 shadow-lg">
        <img src={LogoColdplay} alt="logo-coldplay" className="w-40 mx-auto" />
      </div>
      <div className={` ${!isMobile && "mt-28 mx-10 flex h-auto"}`}>
        <div>
          <img
            src={BgTicket}
            alt="bg-ticket"
            className={`${isMobile && "hidden"} w-[80vw] h-[66vh] rounded-l-md`}
          />
        </div>
        <form className="bg-white h-full py-6 px-4 text-black md:rounded-r-lg z-30">
          <div
            className={`${
              isMobile ? "grid-cols-1" : "grid-cols-2"
            } grid items-center gap-y-2 gap-x-4`}
          >
            <div className="space-y-1">
              <label>Name</label>
              <input
                type="text"
                name="name" 
                value={data.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full p-3 bg-gray-100 rounded-sm capitalize"
              />
            </div>
            <div className="space-y-1">
              <label>Email</label>
              <input
                type="email"
                name="email" 
                value={data.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-100 rounded-sm"
              />
            </div>
            <div className="space-y-1">
              <label>Age</label>
              <input
                type="text"
                name="age" 
                value={data.age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                className="w-full p-3 bg-gray-100 rounded-sm"
              />
            </div>
            <div className="space-y-1">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone" 
                value={data.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                className="w-full p-3 bg-gray-100 rounded-sm"
              />
            </div>
            <div className="space-y-1">
              <label>How many people</label>
              <input
                type="text"
                name="people" 
                value={data.people}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                className="w-full p-3 bg-gray-100 rounded-sm"
              />
            </div>
            <div className="space-y-1">
              <label>Date</label>
              <input
                type="date"
                name="date" 
                value={data.date}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                className="w-full p-3 bg-gray-100 rounded-sm"
              />
            </div>
          </div>
            <div className="space-y-1">
              <label>Address</label>
              <textarea
                type="email"
                name="address" 
                value={data.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full p-3 bg-gray-100 rounded-sm"
              />
            </div>
            <div className='md:grid-cols-2 grid-cols-1 grid  w-full md:space-x-5 space-y-2'> 
            <div className="space-y-1 relative">
              <label>Ticket Type</label>
              <div
                onClick={handleDropDown}
                className="flex justify-between items-center w-full p-3 bg-gray-100 rounded-sm"
              >
                <input
                  type="text"
                  value={selectTicket?.name_ticket} onChange={handleTicketChange}
                  placeholder="select type ticket"
                  className="bg-transparent w-full"
                />
                <BiChevronDown
                  className={`${dropListData && "rotate-180"} text-lg`}
                />
              </div>
              <div
                className={`${
                  !dropListData && "hidden top-20 z-0"
                } ${isMobile ? "h-20" : "h-40"} bg-white rounded-md shadow-md w-full absolute top-20 transition-all ease-in-out duration-300 space-y-1 overflow-y-scroll scroll-smooth`}
              >
                {
                  listTicketSingapore.map((val, idx) => (
                      <div className="cursor-pointer hover:bg-gray-100 py-3 px-3 w-full" key={idx} onClick={() => handleOptionClick(val)}>
                            <p>{val.name_ticket}</p>
                        </div>
                  ))
                }
              </div>
            </div>
            <div className="">
              <label>Price</label>
              <input
                type="text"
                value={selectTicket?.price} 
                readOnly
                placeholder="Price"
                className="w-full p-3 bg-gray-100 rounded-sm"
              />
            </div>
            </div>
          <button  onClick={handleSubmit} disabled={!selectTicket} className="uppercase font-saira w-full py-3 mt-4 rounded-md font-bold to-[#4c0404] from-[#27098b] bg-gradient-to-tr text-white">
            Order now
          </button>  
        </form>
      </div>
    </div>
  );
};

export default FormTicket;
