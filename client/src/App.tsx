import React, { useState } from 'react'
import UploadImage from './components/UploadImage';
import PendingUpload from './components/PendingUpload';
import UploadResult from './components/UploadResult';

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
        <UploadImage upload={upload} setUpload={setUpload} setImageData={setImageData} /> 
      }
      { (upload.isUploading) && <PendingUpload /> }
      { (imageData.url && !imageData.isLoading) && <UploadResult url={imageData.url} /> }
    </div>
  );
}

export default App;
