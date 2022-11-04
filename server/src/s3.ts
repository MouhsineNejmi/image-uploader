require('dotenv').config();
import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { getSignedUrl  } from '@aws-sdk/s3-request-presigner';


const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const accessKey: any = process.env.AWS_ACCESS_KEY;
const secretAccess: any = process.env.AWS_SECRET_ACCESS_KEY;

const s3Client = new S3Client({ 
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccess
  },
  region: bucketRegion
});

export const uploadImageToS3 = async (file: any) => { 
  const key = `${file.originalname}-${uuidv4()}`;
  const uploadParams = new PutObjectCommand({ 
    Bucket: bucketName,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  });

  try {
    await s3Client.send(uploadParams);
    return { key };
  } catch (error) {
    return { error };
  }
}

export const downloadFile = async (fileKey: string) => {
  // http://localhost:3001/uploads/moon.jpg-dcec0483-417f-475c-9207-720cc176c736
  try {
    const downloadParams = new GetObjectCommand({
      Bucket: bucketName,
      Key: fileKey
    });

    const signedUrl = await getSignedUrl(s3Client, downloadParams, {
      expiresIn: 3600,
    })
    const { url } = await fetch(signedUrl);
    return await url;
  } 
  catch (error) {
    console.log(error);
    return { error };
  }
}