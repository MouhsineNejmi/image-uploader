
# Image Uploader

A small fullstack web app where you can your images to aws cloud (S3) and display your image & link.


## Language & Framework

### Backend
 - [Express.js](https://expressjs.com/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Multer.](https://github.com/expressjs/multer) A Node.js middleware for handling multiparm/form-data, which is primarily used for uploading files.
 - [uuid.](https://github.com/uuidjs/uuid) A small package used to create unique ids, I used it as a part of creating a unique key for the image uploaded.
 - [dotenv.](https://github.com/motdotla/dotenv) Package serves to keep your credentials private not accessible by anyone.
 - [@aws-sdk/client-s3.](https://www.npmjs.com/package/@aws-sdk/client-s3) AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native. I used AWS Cloud to host the image uploaded.
 - [@aws-sdk/s3-request-presigner.](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner) This package generate presigned url from S3 client and command. (In my case generate the image url from S3 client).

### Frontend
 - [React - Typescript](https://reactjs.org/) A JavaScript library for building user interfaces.
 - [Axios](https://axios-http.com/) Axios is a simple promise based HTTP client for the browser and node.js.
 - [Tailwindcss](https://tailwindcss.com/) A utility-first CSS framework packed that can be composed to build any design, directly in your markup.
 - [React Icons.](https://react-icons.github.io/react-icons/) React icons library.
 - [React Dropzone](https://react-dropzone.js.org/) Simple React hook to create drag'n'drop zone for files.

## Demo

Insert gif or link to demo


## API Reference

#### Post Image

```http
  POST /uploads
```

Once you upload the image you will get the image key.

#### Get Image Link From AWS S3 Cloud

```http
  GET /uploads/${key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `key`      | `string` | **Required**. Id of image to fetch |


## Design Reference

### Font
| Family             | Size                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Poppins | 100, 300, 500, 700, 900 |

### Color
| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Dark Gray | ![#4F4F4F](https://via.placeholder.com/10/4F4F4F?text=+) #4F4F4F |
| Gray | ![#828282](https://via.placeholder.com/10/828282?text=+) #828282 |
| Light Gray | ![#BDBDBD](https://via.placeholder.com/10/BDBDBD?text=+) #BDBDBD |
| Light Gray 2 | ![#E0E0E0](https://via.placeholder.com/10/E0E0E0?text=+) #E0E0E0 |
| Light Gray 3 | ![#F6F8FB](https://via.placeholder.com/10/F6F8FB?text=+) #F6F8FB |
| Green | ![#219653](https://via.placeholder.com/10/219653?text=+) #219653 |
| Blue | ![#2F80ED](https://via.placeholder.com/10/2F80ED?text=+) #2F80ED |
| Dark Blue | ![#003d8d](https://via.placeholder.com/10/003d8d?text=+) #003d8d |
| Red | ![#EF4444](https://via.placeholder.com/10/EF4444?text=+) #EF4444 |
