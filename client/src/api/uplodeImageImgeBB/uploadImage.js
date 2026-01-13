import axios from 'axios';

const imageHostingKey = import.meta.env.VITE_IMGBB_API_KEY;
const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const uploadImage = async imageFile => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const res = await axios.post(imageHostingUrl, formData);
  return res.data.data.url;
};

export default uploadImage;
