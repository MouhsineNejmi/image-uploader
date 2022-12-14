require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { downloadFile, uploadImageToS3 } from './s3';
import multer, { memoryStorage } from 'multer';

const app = express();
const PORT = process.env.PORT || 3001;

const storage = memoryStorage();
const upload = multer({storage});

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.send('APP IS RUNNING!');
})

app.post('/uploads', upload.single('image'), async (req, res) => {
  const { file } = req;

  if (!file) return res.status(400).json({ message: 'Bad Request!' });

  const { key, error } = await uploadImageToS3(file);
  if (error) return res.status(500).json({ message: (error as any).message })

  return res.status(201).json({ key });
})

app.get('/uploads/:Key', async (req, res) => {
  const key = req.params.Key;
  const url = await downloadFile(key);
  
  return res.json({ url });
})

app.listen(PORT, () => {
  console.log('started');
})