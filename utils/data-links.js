const cloudImageQuality = 'q_auto:low'
const cloudImageFormat = 'f_auto'
const cloudName = 'seabas-media'
const cloudVersion = 'v1621218000'

function createVideoLink(link) {
  const arr = link.split('/')
  const vidNum = arr[arr.length - 1]

  // e.g. convert https://vimeo.com/466777132 to https://player.vimeo.com/video/466777132
  const videoLink = 'https://player.vimeo.com/video/' + vidNum

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
      )}" width="640" height="360" frameborder="0" allowfullscreen class="vimeo-video"></iframe>`
    }
  }

  return {
    thumb: `"https://res.cloudinary.com/${cloudName}/${mediaType}/upload/c_thumb,w_200,g_face/${cloudVersion}${path}", `,
    src: `https://res.cloudinary.com/${cloudName}/${mediaType}/upload/w_0.5,h_0.5/${cloudImageQuality},${cloudImageFormat}/${cloudVersion}${path}`
  }
}
