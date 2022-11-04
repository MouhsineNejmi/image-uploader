import { useState, useEffect } from 'react'
import UploadImage from './components/UploadImage';
import PendingUpload from './components/PendingUpload';
import UploadResult from './components/UploadResult';
import { VscError } from 'react-icons/vsc';

const App = () => {
  const [upload, setUpload] = useState({
    data: null,
    isUploading: false,
    error: '',
  });
  const [imageData, setImageData] = useState({
    url: '',
    isLoading: false,
    error: ''
  });
  
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      { (!upload.isUploading && !upload.data) &&
        <UploadImage setUpload={setUpload} setImageData={setImageData} />
      }
      { (upload.isUploading) && <PendingUpload /> }
      { (imageData.url && !imageData.isLoading) && <UploadResult url={imageData.url} /> }

      { (upload.error || imageData.error)  && 
        <div className='absolute top-10 right-10 flex justify-center items-center rounded-xl shadow-md w-1/4 p-2 animate-bounce'>
          <VscError className='text-red-500 rounded-full mr-2' />
          <p className='text-[14px] text-red-500'>File must be Png, Jpg, or Jpeg</p>
        </div>
      }
    </div>
  );
}

export default App;
