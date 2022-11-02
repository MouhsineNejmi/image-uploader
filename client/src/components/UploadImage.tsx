import React from 'react'
import { ReactComponent as Illustration } from '../images/illustration.svg'

const UploadImage = () => {
  return (
    <div className='w-1/4 h-3/4 rounded-xl tracking-tight text-center font-medium shadow-2xl flex flex-col justify-center items-center'>
      <div>
        <p className='text-[18px] text-[#4F4F4F] pb-3'>Upload your image</p>
        <p className='text-[10px] text-[#828282]'>File should be Jpeg, Png...</p>
      </div>

      {/* Drag & Drop image placeholder */}
      <div className='mt-8 w-5/6 h-1/2 mx-auto bg-[#F6F8FB] border-2 border-[#97BEF4] border-dashed rounded-xl'>
        <div className='flex flex-col items-center justify-center h-full'>
          <Illustration className='h-15 mb-3' />
          <p className='text-[10px] tracking-tight text-[#BDBDBD]'>Drag & Drop your image here</p>
        </div>
      </div>

      <p className='text-[#BDBDBD] my-3'>Or</p>

      {/* Upload Button */}
      <div className='flex items-center w-1/2'>
        <input
          type="file"
          accept="image/*"
          className='hidden'
          id="upload-button"
        />
        <label htmlFor="upload-button" className='w-full cursor-pointer rounded-md bg-[#2F80ED] text-[12px] text-white py-2'>
          Choose a file
        </label>
      </div>
    </div>
  )
}

export default UploadImage