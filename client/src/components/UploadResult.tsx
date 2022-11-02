import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const UploadResult = () => {
  return (
    <div className='w-1/3 h-3/4 rounded-xl tracking-tight text-center font-medium shadow-2xl flex flex-col justify-center items-center'>
      <div className='mb-5'>
        <AiOutlineCheck className='bg-[#219653] mx-auto text-white rounded-full w-[35px] h-[35px] p-1 mb-2' />
        <p className='text-[18px] text-[#4F4F4F]'>Uploaded Successfully!</p>
      </div>

      <div className='mb-5 w-5/6 h-1/2 mx-auto bg-[#F6F8FB] rounded-xl'>
        Preview Image
      </div>
      
      <div className='w-5/6 text-left h-11 bg-[#F6F8FB] border-2 rounded-xl border-[#E0E0E0] flex items-center pl-2'>
        <p className='w-3/4 text-[10px]'>Link</p>
        <button className='w-1/4 text-[10px] text-white bg-[#2F80ED] h-full border-2 rounded-xl'>Copy Link!</button>
      </div>
    </div>
  )
}

export default UploadResult