import React from 'react'
import AddCreditDialog from '../../components/AddCreditDialog';
import Motion from '@/components/client/Motion';
import { Input } from '@/components/ui/input';
import { Select, Switch } from '@headlessui/react';
import { SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';
import { ArrowRight } from 'lucide-react';

export default function OverViewSection() {
  return (
<Motion transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} classNames={undefined}>
  <div className='2xl:p-0 border rounded-3xl p-4 flex flex-col gap-y-6 w-full max-w-[823px] hover:shadow-lg'>
        <div className="     w-full 2xl:w-[823px] max-w-[823px]  rounded-3xl  p-10">
          <h1 className="text-[20px] brightness-90 font-semibold  pb-3.5">Billing address</h1>
          <p className="text-[14px] font-light text-[#000000]">Your billing address is used to billings and invoices.</p>
          <div className="mt-4 flex flex-col gap-5">
            <div className="space-y-2">
              <label className="font-light">
              Billing Name <span className="text-[#F00]">*</span>
              </label>
              <Input type="text" placeholder="Enter Billing name" className='bg-white border' />
              <p className='text-[14px] font-light'>Company name or Contact name. This will appear on your invoices.</p>
            </div>
         
           
            <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2 relative">
            <label className="font-light">
              Country <span className="text-[#F00]">*</span>
            </label>
            <select className="bg-white border p-2 rounded appearance-none w-full">
              <option value="">Select Country</option>
              <option value="USA">United States</option>
              <option value="CAN">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AUS">Australia</option>
              <option value="IND">India</option>
              <option value="GER">Germany</option>
              <option value="FRA">France</option>
            </select>
            <svg  width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-2 top-10 pointer-events-none">
              <g opacity="0.5">
                <path d="M4.8252 10.0786L8.15853 13.4119L11.4919 10.0786" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.8252 6.07862L8.15853 2.74529L11.4919 6.07862" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
            <p className='text-[14px] font-light'>The country in which you are located.</p>
          </div>
              <div className="space-y-2">
                <label className="font-light">
                City <span className="text-[#F00]">*</span>
                </label>
                <Input type="text" placeholder="Type State" className='bg-white border ' />
                <p className='text-[14px] font-light'>City, district, suburb, town, or village.</p>
              </div>
              <div className="space-y-2">
                <label className="font-light">
                Postal Code <span className="text-[#F00]">*</span>
                </label>
                <Input type="text" placeholder="Type Zip code" className='bg-white border '/>
                <p className='text-[14px] font-light'>ZIP or postal code.</p>

              </div>
              <div className="space-y-2">
                <label className="font-light">
                State <span className="text-[#F00]">*</span>
                </label>
                <Input type="text" placeholder="Type Zip code" className='bg-white border '/>
                <p className='text-[14px] font-light'>State, county, province, or region..</p>

              </div>
            </div>
            <div className="space-y-2">
              <label className="font-light">
              Address Line 1 <span className="text-[#F00]">*</span>
              </label>
              <Input type="text" placeholder="Enter Billing name" className='bg-white border' />
              <p className='text-[14px] font-light'>E.g., street, PO Box, or company name.</p>
            </div>
            <div className="space-y-2">
              <label className="font-light">
              Address Line 2 <span className="text-[#F00]">*</span>
              </label>
              <Input type="text" placeholder="Enter Billing name" className='bg-white border' />
              <p className='text-[14px] font-light'>E.g., apartment, suite, unit, or building</p>
            </div>
        
        </div>
        
      </div>
   
   
      <div className='w-full bg-gray-200 p-4 px-4 flex flex-row justify-between rounded-b-2xl'>
      <button className='bg-black opacity-0 rounded-xl text-white max-w-[133px] text-[14px] font-medium py-1.5 px-4 items-center justify-center w-full'>
        Save Changes
      </button>
      <button className='bg-black rounded-md text-white text-[14px] max-w-[133px] font-medium py-1.5 px-4 items-center justify-center w-full'>
        Save Changes
      </button>
    </div>
   
 
  </div>
</Motion>
  );
}
