import Motion from '@/components/client/Motion';
import Image from 'next/image';
import React from 'react';

const Subscriptions = () => {
  return (
<Motion transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} classNames={undefined}>
<div className='flex flex-col gap-y-6 w-full max-w-[823px] hover:shadow-lg'>
<div className='bg-white mt-10 2xl:mt-0 xl:mt-0 border w-full 2xl:w-[823px] max-w-[823px] rounded-2xl'>
      <div className='bg-white py-20 w-full flex flex-col space-y-2.5 items-center justify-center mx-auto rounded-2xl'>
        <Image src="/gif1.gif" width={136} height={136} alt="gif"/>
        <h2 className='2xl:text-[20px] px-4 w-full xl:text-[16px] text-[12px]  font-semibold items-center justify-center mx-auto text-center'>You don't have any invoices yet</h2>
    
      </div>
    
    </div>
 
  </div>
</Motion>


  );
};

export default Subscriptions;
