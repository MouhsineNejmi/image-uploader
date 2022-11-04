import React, { FC, Dispatch, SetStateAction } from 'react'
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
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
  setUpload: Dispatch<SetStateAction<TUpload>>
  setImageData: Dispatch<SetStateAction<TImage>>
}

const UploadImage: FC<IProps> = ({ setUpload, setImageData }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (file) => onImageUpload(null, file[0])
  })

  const URL = 'http://localhost:3001/uploads';
  const validFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];

  const onImageUpload = (event: React.ChangeEvent<HTMLInputElement> | null, image?: any) => {
    const file = image ? image : event?.target.files![0];

    if (!validFileTypes.find((type) => type === file.type)) {
      setUpload({ data: null, isUploading: false, error: 'File must be Png, Jpg, or Jpeg' });
      return;
    }
    
    const formData = new FormData();
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
    <div className='w-full h-full rounded-xl tracking-tight text-center font-medium shadow-2xl flex flex-col justify-center items-center md:w-1/3 md:h-3/4'>
      <div>
        <p className='text-[18px] text-[#4F4F4F] pb-3'>Upload your image</p>
        <p className='text-[10px] text-[#828282]'>File should be Jpeg, Png...</p>
      </div>

      <div {...getRootProps()} className='flex flex-col items-center justify-center cursor-pointer mt-6 w-5/6 h-1/2 mx-auto bg-[#F6F8FB] border-2 border-[#97BEF4] border-dashed rounded-xl z-10 transition-all hover:scale-105'>
        <input {...getInputProps()} />
        <Illustration className='h-15 mb-3' />
        <p className='text-[10px] tracking-tight text-[#BDBDBD]'>Drag & Drop your image here</p>
      </div>

      <p className='text-[#BDBDBD] my-3'>Or</p>

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