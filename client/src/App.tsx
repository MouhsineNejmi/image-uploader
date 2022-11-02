import React, { useReducer } from 'react'
import UploadImageCard from './components/UploadImage';
// import PendingUploadCard from './components/PendingUpload';
// import UploadResultCard from './components/UploadResult';

const App = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <UploadImageCard />
      {/* <PendingUploadCard />
      <UploadResultCard /> */}
    </div>
  );
}

export default App;
