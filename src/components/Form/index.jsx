import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import BgTicket from "../../assets/bg-form.svg";
import LogoColdplay from "../../assets/logo-coldplay.svg";
import MediaQuery from "../../config/MediaQuery";
import { listTicketMalaysia } from "../../data/listData";
import { listBenefit } from "../../data/listMenu";
import Checklist from '../../assets/checklist.svg'

const FormTicket = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const [selectTicket, setSelectTicket] = useState({});
  const numberWA = "+60165770681";
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
    setDropListData(true);
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
    const foundTicket = listTicketMalaysia.find(
      (ticket) => ticket.name_ticket === ticketName
    );
    setSelectTicket(foundTicket || null);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectTicket) {
      const { name_ticket: ticketName, price: ticketPrice } = selectTicket;
      const { name, email, age, phone, people, date, address } = data;
      const message = `Hello, I want to buy concert tickets. \n\nName: ${name.toUpperCase()}\nEmail: ${email}\nAge: ${age}\nPhone: ${phone}\nHow many people: ${people}\n Date:${date}\nAddress: ${address}\nTicket Type: ${ticketName}\nPrice: ${ticketPrice}`;
      const whatsappLink = `https://wa.me/${numberWA}?text=${encodeURIComponent(
        message
      )}`;

      // Replace 'YOUR_PHONE_NUMBER' with your phone number in the format: country code + area code + phone number
      window.location.href = whatsappLink;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${BgTicket})` }}
      className="bg-cover bg-left-top w-screen h-screen"
    >
      <div className={` ${!isMobile && "mx-10 flex h-auto py-3"}`}>
        <div className="bg-white h-full text-black md:rounded-lg z-30 mx-auto md:w-[40%] shadow-lg">
          <div className="bg-[#041566] py-4 shadow-lg">
            <img
              src={LogoColdplay}
              alt="logo-coldplay"
              className="w-40 mx-auto"
            />
          </div>
          <form className="py-4 px-4 text-black md:rounded-r-lg z-30 mx-auto">
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
                  className="w-full p-2 bg-gray-100 rounded-sm capitalize"
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
                  className="w-full p-2 bg-gray-100 rounded-sm"
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
                  className="w-full p-2 bg-gray-100 rounded-sm"
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
                  className="w-full p-2 bg-gray-100 rounded-sm"
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
                  className="w-full p-2 bg-gray-100 rounded-sm"
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
                  className="w-full p-2 bg-gray-100 rounded-sm"
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
                className="w-full p-2 bg-gray-100 rounded-sm"
              />
            </div>
            <div className="md:grid-cols-2 grid-cols-1 grid  w-full md:space-x-5 space-y-2">
              <div className="space-y-1 relative">
                <label>Ticket Type</label>
                <div
                  onClick={handleDropDown}
                  className="flex justify-between items-center w-full p-2 bg-gray-100 rounded-sm"
                >
                  <input
                    type="text"
                    value={selectTicket?.name_ticket || ""}
                    onChange={handleTicketChange}
                    placeholder="select type ticket"
                    className="bg-transparent w-full"
                  />
                  <BiChevronDown
                    className={`${dropListData && "rotate-180"} text-lg`}
                  />
                </div>
                <div
                  className={`${!dropListData && "hidden top-20 z-0"} ${
                    isMobile ? "h-40" : "h-40"
                  } bg-white rounded-md shadow-md w-full absolute top-20 transition-all ease-in-out duration-300 space-y-1 overflow-y-scroll scroll-smooth`}
                >
                  {listTicketMalaysia.map((val, idx) => (
                    <div
                      className="cursor-pointer hover:bg-gray-100 py-3 px-3 w-full"
                      key={idx}
                      onClick={() => handleOptionClick(val)}
                    >
                      <p>{val.name_ticket}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label>Price</label>
                <input
                  type="text"
                  value={selectTicket?.price || ""}
                  readOnly
                  placeholder="Price"
                  className="w-full p-2 bg-gray-100 rounded-sm"
                />
              </div>
            </div>
            {/* Benefit */}
            <div className="space-y-2 mt-5">
              {
                listBenefit.map((list, index) => (
                  <div key={index} className="flex items-center space-x-3">
                      <img src={Checklist} alt="checklist" className="w-3.5"/>
                      <p className="text-sm font-oxygen-mono">{list}</p>
                  </div>
                ))
              }
              <p className="text-sm font-bold pt-3">* CURRENTLY FULL BOOKED</p>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!selectTicket || selectTicket?.price === 'Sold Out'}
              className="uppercase font-saira w-full py-3 mt-4 rounded-md font-bold bg-[#041566] text-white"
            >
              Order now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTicket;
