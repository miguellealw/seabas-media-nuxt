const cloudImageQuality = 'q_auto:low'
const cloudImageFormat = 'f_auto'
const cloudName = 'seabas-media'
const cloudVersion = 'v1621218000'

/**
 *
 * @param {string} imagePath - path to image in cloudinary (gallery.path + image)
 * @returns - object with link to thumnail and src
 */
export const createImageLink = imagePath => {
  return {
    thumb: `"https://res.cloudinary.com/${cloudName}/image/upload/c_thumb,w_200,g_face/${cloudVersion}${imagePath}", `,
    src: `https://res.cloudinary.com/${cloudName}/image/upload/${cloudImageQuality},${cloudImageFormat}/${cloudVersion}${imagePath}`
  }
}
