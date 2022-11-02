import React, { useReducer } from 'react'
import PendingUploadCard from './components/PendingUpload';
import UploadImageCard from './components/UploadImage';
import UploadResultCard from './components/UploadResult';

const types = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case types.PENDING:
//       return { ...state,  }
  
//     default:
//       return state;
//   }
// }

const App = () => {
  return (
    <div>
      <UploadImageCard />
      {/* <PendingUploadCard />
      <UploadResultCard /> */}
    </div>
  );
}

export default App;
