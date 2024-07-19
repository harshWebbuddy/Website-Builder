"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CMarquee = () => {
  return (
    <div className="bg-white">
      <Marquee gradient={true} pauseOnHover>
        <div className="w-full min-w-[320px] h-[130px] flex flex-col items-center justify-center py-5 px-6 border-r border-[#F4F4F4]">
          <Image src="/logo/whopme.svg" alt="" width={200} height={200} className="min-w-[150px] object-cover" />
        </div>
        <div className="w-full min-w-[320px] h-[130px] flex flex-col items-center justify-center py-5 px-6 border-r border-[#F4F4F4]">
          <Image src="/logo/qwikWrite.png" alt="" width={200} height={200} className="min-w-[150px] object-cover" />
        </div>
        <div className="w-full min-w-[320px] h-[130px] flex flex-col items-center justify-center py-5 px-6 border-r border-[#F4F4F4]">
          <Image src="/logo/smartHive.svg" alt="" width={200} height={200} className="min-w-[150px] object-cover" />
        </div>
        <div className="w-full min-w-[320px] h-[130px] flex flex-col items-center justify-center py-5 px-6 border-r border-[#F4F4F4]">
          <Image src="/logo/quikAsk.svg" alt="" width={150} height={200} className="min-w-[150px] object-cover" />
        </div>
        <div className="w-full min-w-[320px] h-[130px] flex flex-col items-center justify-center py-5 px-6 border-r border-[#F4F4F4]">
          <Image src="/logo/interiorAi.svg" alt="" width={200} height={200} className="min-w-[150px] object-cover" />
        </div>
        <div className="w-full min-w-[320px] h-[130px] flex flex-col items-center justify-center py-5 px-6 border-r border-[#F4F4F4]">
          <Image src="/logo/hous.svg" alt="" width={150} height={150} className="min-w-[150px] object-cover" />
        </div>
        <div className="w-full min-w-[320px] h-[130px] flex flex-col items-center justify-center py-5 px-6 border-r border-[#F4F4F4]">
          <Image src="/logo/shftin.png" alt="" width={150} height={150} className="min-w-[150px] object-cover" />
        </div>
      </Marquee>
    </div>
  );
};

export default CMarquee;
