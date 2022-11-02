import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const UploadResult = () => {
  return (
    <div className='w-1/4 h-3/4 rounded-xl tracking-tight text-center font-medium shadow-2xl flex flex-col justify-center items-center'>
      <div className=''>
        <AiOutlineCheck className='bg-[#219653]' />
        Text
      </div>

      <div>
        <div>
          {/* Preview Image */}
        </div>
        <div>
          {/* Image Link /*} {/* Copy Link Btn */}
        </div>
      </div>
    </div>
  )
}

export default UploadResult