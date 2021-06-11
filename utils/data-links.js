const cloudImageQuality = 'q_auto:low'
const cloudImageFormat = 'f_auto'
const cloudName = 'seabas-media'
const cloudVersion = 'v1621218000'

function createVideoLink(link) {
  // https://www.youtube.com/user/OW3NxX/videos

  // <iframe width="560" height="315" src="https://www.youtube.com/embed/bmiS3wblRg0" title="YouTube video player"
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen></iframe>

  // split depending on link type
  let arr
  if (link.includes('watch?')) arr = link.split('=')
  else arr = link.split('/')

  const vidID = arr[arr.length - 1]

  // e.g. convert https://vimeo.com/466777132 to https://player.vimeo.com/video/466777132
  // return 'https://player.vimeo.com/video/' + vidID

  // convert https://youtu.be/bmiS3wblRg0 to https://www.youtube.com/embed/bmiS3wblRg0
  return `https://www.youtube.com/embed/${vidID}`
}

/**
 *
 * @param {string} path - path to image/video in cloudinary/vimeo (gallery.path + image)
 * @returns - object with link to thumbnail and src
 */
export const createLink = (path, isImage = true) => {
  const mediaType = isImage ? 'image' : 'video'

  // VIMEO
  // if (mediaType === 'video') {
  //   return {
  //     src: `<iframe title="vimeo-player" src="${createVideoLink(
  //       path
  //     )}" width="640" height="360" frameborder="0" allowfullscreen class="vimeo-video"></iframe>`
  //   }
  // }

  // YOUTUBE
  if (mediaType === 'video') {
    return {
      src: `<div class="videoWrapper" style="--aspect-ratio: 3/4;"><iframe width="640" height="360" src="${createVideoLink(
        path
      )}" title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen class="vimeo-video"></iframe></div>`
    }
  }

  return {
    thumb: `https://res.cloudinary.com/${cloudName}/${mediaType}/upload/c_thumb,w_200,g_face/${cloudVersion}${path} `,
    src: `https://res.cloudinary.com/${cloudName}/${mediaType}/upload/w_0.5,h_0.5/${cloudImageQuality},${cloudImageFormat}/${cloudVersion}${path}`
  }

  // return {
  //   thumb: `"https://res.cloudinary.com/${cloudName}/${mediaType}/upload/c_thumb,w_200,g_face/${cloudVersion}${path}", `,
  //   src: `https://res.cloudinary.com/${cloudName}/${mediaType}/upload/w_0.5,h_0.5/${cloudImageQuality},${cloudImageFormat}/${cloudVersion}${path}`
  // }
}
