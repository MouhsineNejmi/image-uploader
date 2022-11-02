import React from 'react'
import UploadImage from './components/UploadImage';
import PendingUpload from './components/PendingUpload';
import UploadResult from './components/UploadResult';

const App = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      {/* <UploadImage /> */}
      {/* <PendingUpload /> */}
      <UploadResult />
    </div>
  );
}

export default App;
