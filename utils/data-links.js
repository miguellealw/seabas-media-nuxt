const cloudImageQuality = 'q_auto:low'
const cloudImageFormat = 'f_auto'
const cloudName = 'seabas-media'
const cloudVersion = 'v1621218000'

//
//
function createVideoLink(link) {
  const arr = link.split('/')

  // add 'player' subdomain and '/video/' path
  // e.g. convert https://vimeo.com/466777132 to https://player.vimeo.com/video/466777132
  // https: to https://
  arr[0] = arr[0] + '//'
  // add 'player.' subdomain
  arr[1] = 'player.'
  // copy video num
  arr[4] = arr[3]
  // add '/video/' path
  arr[3] = '/video/'

  const videoLink = arr.join('')

  return videoLink
}

/**
 *
 * @param {string} path - path to image/video in cloudinary/vimeo (gallery.path + image)
 * @returns - object with link to thumnail and src
 */
export const createLink = (path, isImage = true) => {
  const mediaType = isImage ? 'image' : 'video'

  if (mediaType === 'video') {
    return {
      src: `<iframe title="vimeo-player" src="${createVideoLink(
        path
      )}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`
    }
  }

  return {
    thumb: `"https://res.cloudinary.com/${cloudName}/${mediaType}/upload/c_thumb,w_200,g_face/${cloudVersion}${path}", `,
    // src: `https://res.cloudinary.com/${cloudName}/image/upload/h_800,w_300/${cloudImageQuality},${cloudImageFormat}/${cloudVersion}${imagePath}`
    src: `https://res.cloudinary.com/${cloudName}/${mediaType}/upload/w_0.5,h_0.5/${cloudImageQuality},${cloudImageFormat}/${cloudVersion}${path}`
  }
}
