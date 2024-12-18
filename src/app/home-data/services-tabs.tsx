import Image from "next/image";
import React, { useState } from "react";
import spa from "../../../public/images/beautiful-african-woman-lying-spa-salon.jpg";
import interview from "../../../public/images/business-people-meeting.jpg"
import consulting from "../../../public/images/coworkers-discussing-meeting.jpg"
import eventReg from "../../../public/images/appointment-agenda-reminder-personal-organizer-calendar-concept.jpg"
import training from "../../../public/images/calendar-schedule-list.jpg"
import sales from "../../../public/images/african-man-black-suit.jpg"


const ServicesTabs = () => {
    const [onView, setOnView] = useState(1)

    const viewServiceHanler = (id: number) => {
        console.log(id)
        setOnView(id)
    }
  return (
    <div className="px-16 mt-12">
      <div className="flex justify-between h-16">
        <p className={`${onView === 1 && "bg-[#3782D0] text-white"} services-header `} onClick={()=> viewServiceHanler(1)}>
          
          HR Interviewing
        </p>
        <p className={`services-header ${onView === 2 && "bg-[#76a9df] text-white"}`} onClick={()=> viewServiceHanler(2)}>Consulting Services</p>
        <p className={`services-header ${onView === 3 && "bg-[#0a2c51] text-white"}`} onClick={()=> viewServiceHanler(3)}>Event Registrations</p>
        <p className={`services-header ${onView === 4 && "bg-[#986705] text-white"}`} onClick={()=> viewServiceHanler(4)}>Spa & Beauty Services</p>
        <p className={`services-header ${onView === 5 && "bg-[#d56a6a] text-white"}`} onClick={()=> viewServiceHanler(5)}>Training Calendar for EdTech</p>
        <p className={`services-header ${onView === 6 && "bg-[#092d1e] text-white"}`} onClick={()=> viewServiceHanler(6)}>Sales & Non-Profit</p>
      </div>
      <div>
        <div className={`flex h-[500px] ${onView === 1 ? "block" : "hidden"}`} >
          <div className="w-[50%] bg-[#3782D0]">
            <div className="relative text-white pl-6">
              <p className="text-[30px] font-bold  pt-48 w-[400px]">
              Meet with candidates faster. Never disrupt your own workflow.
              </p>
              <button className="px-8 py-2 mt-6 border border-white rounded-full text-white hover:bg-[#ffffff80] hover:text-[#3782D0]"> See How </button>
            </div>
          </div>
          <div className="w-[50%] object-cover">
            <Image src={interview} alt="hr-interview" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className={`flex h-[500px] ${onView === 2 ? "block" : "hidden"}`}>
          <div className="w-[50%] bg-[#76a9df] ">
            <div className="relative text-white pl-6">
              <p className="text-[30px] font-bold  pt-48 w-[400px]">
              Focus on delivering your work. Calendive coordinates with your
              clients.
              </p>
              <button className="px-8 py-2 mt-6 border border-white rounded-full text-white hover:bg-[#ffffff80] hover:text-[#76a9df]"> See How </button>
            </div>
          </div>
          <div className="w-[50%] object-cover">
            <Image src={consulting} alt="consulting" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className={`flex h-[500px] ${onView === 3 ? "block" : "hidden"}`}>
          <div className="w-[50%] bg-[#0a2c51] ">
            <div className="relative text-white pl-6">
              <p className="text-[30px] font-bold  pt-48 w-[400px]">
              No need for DMs. Calendive automates your registrations.
              </p>
              <button className="px-8 py-2 mt-6 border border-white rounded-full text-white hover:bg-[#ffffff80] hover:text-[#0a2c51]"> See How </button>
            </div>
          </div>
          <div className="w-[50%] object-cover">
            <Image src={eventReg} alt="eventReg" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className={`flex h-[500px] ${onView === 4 ? "block" : "hidden"}`}>
          <div className="w-[50%] bg-[#986705] ">
            <div className="relative text-white pl-6">
              <p className="text-[30px] font-bold  pt-48 w-[400px]">
                Put a Calendive link on your website. Sit and watch us bring
                your customers to you.
              </p>
              <button className="px-8 py-2 mt-6 border border-white rounded-full text-white hover:bg-[#ffffff80] hover:text-[#986705]"> See How </button>
            </div>
          </div>
          <div className="w-[50%] object-cover">
            <Image src={spa} alt="spa" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className={`flex h-[500px] ${onView === 5 ? "block" : "hidden"}`}>
          <div className="w-[50%] bg-[#d56a6a] ">
            <div className="relative text-white pl-6">
              <p className="text-[30px] font-bold  pt-48 w-[400px]">
              Integrate all your tools, calendars, and conferencing easily in
              Calendive.
              </p>
              <button className="px-8 py-2 mt-6 border border-white rounded-full text-white hover:bg-[#ffffff80] hover:text-[#d56a6a]"> See How </button>
            </div>
          </div>
          <div className="w-[50%] object-cover">
            <Image src={training} alt="training" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className={`flex h-[500px] ${onView === 6 ? "block" : "hidden"}`}>
          <div className="w-[50%] bg-[#092d1e] ">
            <div className="relative text-white pl-6">
              <p className="text-[30px] font-bold  pt-48 w-[400px]">
              Do more with payment integration and customer management.
              </p>
              <button className="px-8 py-2 mt-6 border border-white rounded-full text-white hover:bg-[#ffffff80] hover:text-[#092d1e]"> See How </button>
            </div>
          </div>
          <div className="w-[50%] object-cover">
            <Image src={sales} alt="spa" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTabs;
