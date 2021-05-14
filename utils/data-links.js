const cloudImageQuality = 'q_auto:low'
const cloudImageFormat = 'f_auto'

// number of images of each gallery
const portraitTotal = '12'
const urbanTotal = '9'

const cloudLink = `https://res.cloudinary.com/miguelleal/image/upload${cloudImageQuality},${cloudImageFormat}/v1601685473/sebas-portfolio-vue/images/portraits/01.jpg`

/**
 *
 * @param {string} imageType - the gallery the image belongs to (e.g. urban, portrait)
 * @param {integer} index - index of the image in the gallery
 * @returns - object with link to thumnail and src
 */
const createImageLink = (imageType, index) => {
  let counter = index
  const imageCounter = (++counter).toString().padStart(2, '0')

  return {
    thumb: `"https://res.cloudinary.com/miguelleal/image/upload/c_thumb,w_200,g_face/v1601685489/sebas-portfolio-vue/images/${imageType}/${imageCounter}.jpg",`,
    src: `https://res.cloudinary.com/miguelleal/image/upload/${cloudImageQuality},${cloudImageFormat}/v1601685473/sebas-portfolio-vue/images/${imageType}/${imageCounter}.jpg`
  }
}

// create links for each gallery type

// portraits
const portraitImageLinks = Array.from({ length: portraitTotal }).map((_, index) => createImageLink('portraits', index))

// urban
const urbanImageLinks = Array.from({ length: urbanTotal }).map((_, index) => createImageLink('urban', index))

export { portraitImageLinks, urbanImageLinks }
