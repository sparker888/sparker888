// utils/cloudinaryUtils.js
import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Fetches all image public IDs from a specified Cloudinary folder.
 * @param {string} folderName - The name of the Cloudinary folder.
 * @returns {Promise<string[]>} - A promise that resolves with an array of image public IDs.
 */
export async function getAllImageIdsFromFolder(folderName) {
  try {
    const results = await cloudinary.v2.search
      .expression(`folder:${folderName}/*`)
      .sort_by('public_id', 'desc')
      .max_results(500) // Adjust this number based on your needs
      .execute();

    return results.resources.map(image => image.public_id);
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return [];
  }
}

export default { getAllImageIdsFromFolder };
