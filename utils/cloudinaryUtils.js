// utils/cloudinaryUtils.js

/**
 * Constructs a Cloudinary URL for image transformations.
 * @param {string} publicId - The public ID of the Cloudinary image.
 * @param {object} options - Options for transformations.
 * @returns {string} - The URL of the transformed image.
 */
export function generateCloudinaryUrl(publicId, options = {}) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  let transformationString = '';

  // Construct transformation string based on options
  if (options) {
      const transformations = [];
      if (options.width) transformations.push(`w_${options.width}`);
      if (options.height) transformations.push(`h_${options.height}`);
      if (options.crop) transformations.push(`c_${options.crop}`);
      if (options.quality) transformations.push(`q_${options.quality}`);
      if (options.format) transformations.push(`f_${options.format}`);

      transformationString = transformations.join(',') + '/';
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}${publicId}`;
}

/**
* Placeholder function to fetch image IDs. This needs to be implemented based on how you 
* actually retrieve your image public IDs.
* @param {string} folderName - The name of the Cloudinary folder.
* @returns {Promise<string[]>} - A promise that resolves with an array of image public IDs.
*/
export async function getAllImageIdsFromFolder(folderName) {
  // Implement your logic to retrieve image IDs from the Cloudinary folder
  // This can be a fetch request to your server or any other method
  // that you use to get the list of image IDs.
}

export default { generateCloudinaryUrl, getAllImageIdsFromFolder };
