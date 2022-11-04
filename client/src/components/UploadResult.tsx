import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

interface IProps {
  url: string
}

const UploadResult: React.FC<IProps> = ({ url }) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  
  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setIsLinkCopied(true);

    setTimeout(() => {
      setIsLinkCopied(false);
    }, 3000)
  }

  return (
    <div className='w-full h-full rounded-xl tracking-tight text-center font-medium shadow-2xl flex flex-col justify-center items-center md:w-3/4 md:h-3/4 xl:w-1/2'>
      <div className='mb-5'>
        <AiOutlineCheck className='bg-[#219653] mx-auto text-white rounded-full w-[35px] h-[35px] p-1 mb-2' />
        <p className='text-[18px] xl:text-[24px] text-[#4F4F4F]'>Uploaded Successfully!</p>
      </div>

      <div className='mb-5 overflow-hidden w-5/6 h-1/2 mx-auto bg-[#F6F8FB] rounded-xl'>
        <img src={url} alt={url} className="w-full h-full object-cover" />
      </div>
      
      <div className='flex flex-col items-center md:text-left md:flex-row md:bg-[#F6F8FB] md:border-2 md:rounded-xl md:border-[#E0E0E0] md:w-5/6 md:h-11 md:pl-2 xl:h-16'>
        <a 
          href={url} 
          target="_blank" 
          rel="noreferrer" 
          className='w-5/6 text-[10px] xl:text-[15px] text-gray-500 mb-2 bg-[#F6F8FB] border-2 rounded-xl border-[#E0E0E0] md:w-3/4 md:border md:bg-transparent md:border-white md:mb-0'
        >
          { `${url.slice(0,50)}...` }
        </a>

        <button 
          onClick={copyLink} 
          className='w-1/2 py-2 text-[10px] xl:text-[15px] z-1 text-white bg-[#2F80ED] hover:bg-[#003d8d] h-full border-2 rounded-xl md:w-1/4'
        >
          Copy Link!
        </button>
      </div>

      {isLinkCopied && 
        <div className='absolute top-10 right-10 flex justify-center items-center rounded-xl shadow-md w-1/4 p-2 animate-bounce'>
          <AiOutlineCheck className='text-green-400 border border-green-400 rounded-full mr-2' />
          <p className='text-[14px]'>Successfully saved to clipboard!</p>
        </div>
      }
    </div>
  )
}

export default UploadResult