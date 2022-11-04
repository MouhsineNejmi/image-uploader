import React from 'react'
import axios from 'axios';
import { ReactComponent as Illustration } from '../images/illustration.svg'

interface TUpload {
  data: null;
  isUploading: boolean;
  error: string;
}

interface TImage {
  url: string,
  isLoading: boolean,
  error: string
}

interface IProps {
  upload: TUpload,
  setUpload: React.Dispatch<React.SetStateAction<TUpload>>
  setImageData: React.Dispatch<React.SetStateAction<TImage>>
}

const UploadImage: React.FC<IProps> = ({ upload, setUpload, setImageData }) => {
  const { data, isUploading, error } = upload;

  const URL = 'http://localhost:3001/uploads'
  
  const onImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const formData = new FormData();

    // Adding the file to the FormData
    formData.append('image', file);

    setUpload({ data: null, isUploading: true, error: '' });

    axios({
      url: URL,
      method: 'POST',
      data: formData
    }).then(({ data }) => {
        const { key } = data;
        setUpload({ data: key, isUploading: false, error: '' });
        key && imageUploaded(key);
        return key;
      })
      .catch((err) => {
        setUpload({ data: null, isUploading: false, error: err });
        return;
      })
  }

  const imageUploaded = (key: string) => {
    setImageData({ url: '', isLoading: true , error: '' })
    const DATA_URL = `${URL}/${key}`

    axios({
      url: DATA_URL,
      method: 'GET'
    }).then(({ data }) => {
      setImageData({ url: data.url, isLoading: false, error: '' });
    }).catch((err) => {
      console.log(err);
      setImageData({ url: '', isLoading: false, error: err });
    })
  }
  
  return (
    <div className='w-1/3 h-3/4 rounded-xl tracking-tight text-center font-medium shadow-2xl flex flex-col justify-center items-center'>
      <div>
        <p className='text-[18px] text-[#4F4F4F] pb-3'>Upload your image</p>
        <p className='text-[10px] text-[#828282]'>File should be Jpeg, Png...</p>
        { upload.error && <p className='text-[10px] text-red-500 my-2'>{upload.error}</p> }
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
          type='file'
          accept='image/*'
          className='hidden'
          id='upload-button'
          onChange={onImageUpload}
        />
        <label htmlFor='upload-button' className='w-full cursor-pointer rounded-md bg-[#2F80ED] text-[12px] text-white py-2'>
          Choose a file
        </label>
      </div>
    </div>
  )
}

export default UploadImage