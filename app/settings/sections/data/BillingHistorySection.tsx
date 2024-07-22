import Motion from '@/components/client/Motion';
import React from 'react';

const BillingHistorySection = () => {
  return (
<Motion transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} classNames={undefined}>
  <div className='2xl:p-0 p-4 flex flex-col gap-y-6 w-full max-w-[823px]'>
    <div className='bg-white border w-full 2xl:w-[823px] max-w-[823px] rounded-2xl hover:shadow-lg shadow-gray-100'>
      <div className='bg-white py-8 w-full flex flex-col space-y-2.5 rounded-2xl'>
        <h2 className='2xl:text-[20px] px-4 xl:text-[16px] text-[12px] font-semibold'>Display Name</h2>
        <p className='2xl:text-[14px] px-4 w-full text-[12px] text-[#000000]'>This is your public display name. It can be your real name or a pseudonym.</p>
        <div className='px-4 max-w-[345px] w-full'>
          <input
            type='text'
            placeholder='Enter your display name'
            className='border rounded p-2 mt-2 w-full text-[12px]'
          />
        </div>
      </div>
      <div className='w-full bg-gray-200 p-2 px-4 flex flex-row justify-between rounded-b-2xl'>
        <button className='bg-black opacity-0 rounded-xl text-white max-w-[133px] text-[14px] font-medium py-1.5 px-4 items-center justify-center w-full'>
          Save Changes
        </button>
        <button className='bg-black rounded-md text-white text-[14px] max-w-[133px] font-medium py-1.5 px-4 items-center justify-center w-full'>
          Save Changes
        </button>
      </div>
    </div>
    <div className='bg-white border border-[#EF4444] 2xl:w-[823px]  max-w-[823px] rounded-2xl hover:shadow-lg shadow-red-500'>
      <div className='bg-white flex flex-col py-8 space-y-0.5 rounded-2xl'>
        <h2 className='2xl:text-[20px] px-4 xl:text-[16px] text-[12px] font-semibold'>Delete Profile</h2>
        <p className='2xl:text-[14px] px-4 text-[12px] text-[#000000]'>Permanently delete your AIBuilder profile</p>
      </div>
      <div className='w-full p-2 px-4 flex flex-row justify-between border border-[#EF4444] rounded-b-2xl'>
        <button className='opacity-0 rounded-xl text-white max-w-[133px] text-[14px] font-medium py-1.5 px-4 items-center justify-center w-full'>
          Delete Profile
        </button>
        <button className='bg-[#EF4444] rounded-md text-white text-[14px] max-w-[133px] font-medium py-1.5 px-4 items-center justify-center w-full'>
          Delete Profile
        </button>
      </div>
    </div>
  </div>
</Motion>


  );
};

export default BillingHistorySection;
