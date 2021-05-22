const cloudImageQuality = 'q_auto:low'
const cloudImageFormat = 'f_auto'
const cloudName = 'seabas-media'
const cloudVersion = 'v1621218000'

/**
 *
 * @param {string} imagePath - path to image in cloudinary (gallery.path + image)
 * @returns - object with link to thumnail and src
 */
export const createLink = (imagePath, isImage = true) => {
  const mediaType = isImage ? 'image' : 'video'
  return {
    thumb: `"https://res.cloudinary.com/${cloudName}/${mediaType}/upload/c_thumb,w_200,g_face/${cloudVersion}${imagePath}", `,
    // src: `https://res.cloudinary.com/${cloudName}/image/upload/h_800,w_300/${cloudImageQuality},${cloudImageFormat}/${cloudVersion}${imagePath}`
    src: `https://res.cloudinary.com/${cloudName}/${mediaType}/upload/w_0.5,h_0.5/${cloudImageQuality},${cloudImageFormat}/${cloudVersion}${imagePath}`
  }
}
