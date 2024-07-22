"use client";

import { useState } from "react";
import BillingHistorySection from "./sections/data/BillingHistorySection";
import OverviewSection from "./sections/data/OverViewSection";
import RootLayout from "../layout";
import Invoices from "./sections/data/invoices";
import Subscriptions from "./sections/data/subscriptions";

export default function SettingsPage() {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
    const tabs = ["Profile", "Billing Address","Invoices","Subscriptions"];
    const renderContent = () => {
        switch (selectedTabIndex) {
            case 0:
                return  <BillingHistorySection />;
            case 1:
                return <OverviewSection />;
                case 2:
                  return <Invoices/>;
                  case 3:
                    return <Subscriptions/>;
            default:
                return null;
        }
    };

    return (
        <RootLayout shoWebar={true}>
            <main className="max-w-[1740px] mx-auto flex ">
                <div className="flex flex-col 2xl:flex-row 2xl:justify-between xl:justify-between justify-center  mx-auto mt-40 xl:-translate-x-40 2xl:-translate-x-40 ">
                    <div className="mb-4 flex flex-col space-y-2 2xl:justify-start xl:justify-start justify-center items-center 2xl:items-start xl:items-start">
                        <h1 className="text-[22px] font-semibold">Settings</h1>
                        <p className="text-[16px] text-opacity-50 text-[#000000]">Manage your account settings.</p>
                    </div>
                    <div className="flex flex-col 2xl:flex-row gap-x-20 2xl:mt-20 justify-center items-center 2xl:items-start xl:items-start">
                    <div className="w-[200px]  py-2 rounded-xl">
  <div className="relative w-full flex flex-col">
    {tabs.map((tab, index) => (
      <div
        key={index}
        className={`w-full h-[48px] flex items-center pl-4 cursor-pointer z-[1] transition-all duration-500 ${selectedTabIndex === index ? "bg-[#00A4A6] text-white rounded-xl shadow-md shadow-[#00A4A6]" : "text-black"}`}
        onClick={() => {
          const totalTabs = tabs.length;
          const percentage = (index / totalTabs) * 100;
          setSelectedTabIndex(index);
          setTabUnderlineLeft(percentage);
        }}
      >
        {tab}
      </div>
    ))}
    <div
      className="absolute bottom-0 left-0 h-[2px] bg-primary-green rounded-2xl"
      style={{ left: `calc(${tabUnderlineLeft}%)`, width: `${100 / tabs.length}%` }}
    ></div>
  </div>
</div>


                        <div className=" ">
                            {renderContent()}
                        </div></div></div>

            </main>
        </RootLayout>
    );
}
