// utils/cloudinary.js

/**
 * Generates a Cloudinary URL for an image with the specified transformations.
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

export default { generateCloudinaryUrl };
