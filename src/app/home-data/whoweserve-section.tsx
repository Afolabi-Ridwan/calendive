"use-client";

import React, { useEffect, useState, useRef } from "react";
import spa from "../../../public/images/spa.png";
import training from "../../../public/images/training.png";
import sales from "../../../public/images/icons8-payment-50.png";
import consulting from "../../../public/images/consulting.png";
import event from "../../../public/images/event.png";
import hr from "../../../public/images/hr.png";
import Image from "next/image";
import { setInterval } from "timers";
import calendar2 from "../../../public/images/calendar2.png";
import calendar3 from "../../../public/images/calendar3.png";
import calendar1 from "../../../public/images/calendar1.png";
import schedule from "../../../public/images/schedule.png";
import calendarSchedule from "../../../public/images/calendar-schedule-list.jpg";


const items = [
  {
    id: 1,
    image: event,
    title: "Manage Events and Meetings",
    description:
      "Excel hurts your eyes? Too posh for so many papers? Set up your events and meetings with Calendive’s simple UI, made for you.",
  },
  {
    id: 3,
    image: spa,
    title: "Easy Scheduling",
    description:
      "Manage meetings, interviews, training sessions, and client calls all in one place.",
  },
  {
    id: 5,
    image: hr,
    title: "Flawless Integrations",
    description:
      "Connect your existing calendars to Calendive for a smooth workflow.",
  },
  {
    id: 7,
    image: training,
    title: "Never Miss a Beat",
    description:
      "Calendive sends you notifications and reminders before appointments and automates follow-up emails.",
  },
  {
    id: 9,
    image: sales,
    title: "Sell on Your Schedule",
    description:
      "Calendive allows you to accept direct online payments for services and digital products.",
  },
  {
    id: 11,
    image: consulting,
    title: "CRM Powerhouse",
    description:
      "Simplify your workflows, manage leads, and build strong customer relationships.",
  },
];

const WhoWeServe = () => {
  const [index, setIndex] = useState(1);
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((prev) => {
  //       const newIndex = prev <= 11 ? prev + 1 : 1;
  //       indexRef.current = newIndex;
  //       return newIndex;
  //     });
  //   }, 4000);

  //   return () => clearInterval(intervalId);
  // }, []);

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      requestAnimationFrame(() => {
        setIndex((prev) => {
          const newIndex = prev <= 11 ? prev + 1 : 1;
          return newIndex;
        });
      });
    }, 4000);
  
    return () => clearInterval(intervalId);
  }, []);
  

  const openTabHandler = (id: number) => {
    setIndex(id);
  };

  

  return (
    <div className="px-16 mb-24">
      <h1 className="font-bold text-[20px] text-center mt-12">
        Get in on the action
      </h1>
      <div className="flex w-100%">
        <div className="w-[50%]">
          <ul className="mt-12 pr-32">
            {items.map((item) => (
              <li
                key={item.id}
                className={`transition-opacity duration-1000 ${
                  index === item.id ? "opacity-100" : "opacity-10"
                } cursor-pointer`}
                onClick={() => openTabHandler(item.id)}
              >
                <h1 className="flex items-center">
                  <span>
                    <Image
                      src={item.image}
                      alt={item.title.toLowerCase()}
                      className={`mx-auto w-[45px] ${
                        item.id === 1
                          ? "bg-[#0A70E0]"
                          : item.id === 3
                          ? "bg-[#0A70E0]"
                          : item.id === 5
                          ? "bg-[#0A70E0]"
                          : item.id === 7
                          ? "bg-[#0A70E0]"
                          : item.id === 9
                          ? "bg-[#0A70E0]"
                          : "bg-[#0A70E0]"
                      } p-2 rounded`}
                    />
                  </span>
                  <span className="ml-4 text-[25px] font-bold">
                    {item.title}
                  </span>
                </h1>
                <p className={`${index === item.id ? "block" : "hidden"} my-6`}>
                  {item.description}
                </p>
                <div className="relative w-full my-4">
                  <hr
                    className={`border-t border-transparent w-full h-[2px] ${
                      index === item.id
                        ? item.id === 1
                          ? "loader1"
                          : item.id === 3
                          ? "loader2"
                          : item.id === 5
                          ? "loader3"
                          : item.id === 7
                          ? "loader4"
                          : item.id === 9
                          ? "loader5"
                          : item.id === 11
                          ? "loader6"
                          : "bg-gray-300"
                        : "bg-gray-300"
                    }`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="secondTab mt-12">
          <div className={` background-anim`}>
            <div className="moving-object"></div>
            <div className="moving-object"></div>
            <div className="moving-object"></div>
            <div className="moving-object"></div>
          </div>
          <div className="flex items-center">
            <Image
              src={
                index === 1
                  ? calendar2
                  : index === 3
                  ? calendar3
                  : index === 5
                  ? schedule
                  : ""
              }
              alt={
                items.find((item) => item.id === index)?.title || "Loading..."
              } 
              priority
              loading="eager"
              className={`bottom-0 rounded-tl-[10px] rounded-tr-[10px] ${
                index === 7 || index === 9 || index === 11 ? "hidden" : "block"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
