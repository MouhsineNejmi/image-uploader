import React from 'react'

const PendingUpload = () => {
  return (
    <div className='w-1/3 h-1/4 rounded-xl shadow-2xl flex flex-col justify-center px-4'>
      <p className='mb-3'>Uploading...</p>
      <div className='w-full overflow-hidden h-1 bg-[#F2F2F2] rounded-xl'>
        <div className='h-1 w-full bg-[#2F80ED] animate-pulse'></div>
      </div>
    </div>
  )
}

export default PendingUpload