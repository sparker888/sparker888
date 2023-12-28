import { generateCloudinaryUrl } from './cloudinary';

export default async function getBase64ImageUrl(image) {
  const blurTransformation = {
    width: 8,  // reduced size for the blur image
    quality: 70,  // quality adjustment
    format: 'jpg',  // format
    crop: 'scale',  // scaling
    // Add any additional transformation for the blur effect
  };

  const imageUrl = generateCloudinaryUrl(image.public_id, blurTransformation);

  const response = await fetch(imageUrl);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
