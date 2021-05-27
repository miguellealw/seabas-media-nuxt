import Vue from 'vue'
import { createLink } from '/utils/data-links.js'

// const PHOTOGRAPHY = 'Photography'
// const VIDEO = 'Video'
// const GRAPHIC_DESIGN = 'Graphic Design'

const PHOTOGRAPHY = 'photography'
const VIDEO = 'videos'
const GRAPHIC_DESIGN = 'graphic_design'

export const state = () => ({
  // galleries - data from cms
  all: [],

  // array of each section (photography, videos, graphic design) with galleries array
  // TODO: add a media section to sections
  sections: [
    {
      name: 'Photography',
      slug: 'photography',
      galleries: [],
      media: []
    },
    {
      name: 'Videos',
      slug: 'videos',
      galleries: [],
      media: []
    },
    {
      name: 'Graphic Design',
      slug: 'graphic_design',
      galleries: [],
      media: []
    }
  ]
})

function getFileName(link) {
  if (!link.includes('https')) return link

  let first_link_arr = link.split('/')
  let filename = first_link_arr[first_link_arr.length - 1]

  return filename
}

export const getters = {
  // get specifed section from sections array
  getSection: state => sectionName => {
    try {
      if (state.sections.length === 0) throw new Error('Sections array not set in global state')

      // TODO: make sectionName lowercase all lower and const's aswell
      if (sectionName !== PHOTOGRAPHY && sectionName !== VIDEO && sectionName !== GRAPHIC_DESIGN)
        throw new Error('Section Name Not Valid')

      return state.sections.find(section => {
        // console.log('section.slug', section.slug)
        // console.log('sectionName', sectionName)
        // console.log(section.slug === sectionName)
        return section.slug === sectionName
      })
    } catch (e) {
      console.error('getSection getter ERROR: ', e)
    }
  },

  // get data from specified section (photos, videos, graphic design images)
  // getSectionData: state => sectionName => {
  //   return getSection(sectionName).images
  // },

  // media is an array of data links objects {src, thumb} for the lightbox component
  media: (state, getters) => sectionName => {
    let imageLinks
    return [
      // ...state.all.map(gallery => {
      // TODO: multi dimension array being created. must be flat array
      ...getters
        .getSection(sectionName)
        .galleries.map(gallery => {
          imageLinks = gallery.images.flat()
          return imageLinks.map(link => createLink(`${gallery.path}/${getFileName(link)}`))
        })
        .flat()
    ]
  },

  // object mapping data from gallery section and gallery subsection (e.g. portraits, creative)
  // { portraits: [...src_links], creative: [...src_links] }
  galleryData: (state, getters) => sectionName => {
    // todo: MAKE SO images returned are per page
    let imageLinks, isVideo, srcLinks

    // console.log('------------------', getters.getSection(sectionName))

    return getters.getSection(sectionName).galleries.reduce((acc, gallery) => {
      imageLinks = gallery.images.flat()
      isVideo = gallery.section === 'Videos'
      srcLinks = isVideo
        ? imageLinks.map(link => createLink(link, false).src)
        : imageLinks.map(link => createLink(`${gallery.path}/${getFileName(link)}`).src)

      return {
        ...acc,
        [gallery.slug]: srcLinks
      }
    }, {})
  }
}

function getSectionFromGalleries(galleries, sectionName) {
  const slugify = require('slugify')
  // console.log('VIDEOS SECTION', slugify(gallery.section.toLowerCase(), '_'))
  return galleries.filter(gallery => {
    return slugify(gallery.section.toLowerCase(), '_') === sectionName
  })
}

export const mutations = {
  setGalleries(state, galleries) {
    // replace whole array
    console.log('GALL', galleries)
    Vue.set(state, 'all', [...galleries.sort((g1, g2) => g1.position - g2.position)])
  },
  setSections(state) {
    let sections = [
      {
        name: 'Photography',
        slug: 'photography',
        galleries: [...getSectionFromGalleries(state.all, PHOTOGRAPHY).sort((g1, g2) => g1.position - g2.position)]
      },
      {
        name: 'Videos',
        slug: 'videos',
        galleries: [...getSectionFromGalleries(state.all, VIDEO).sort((g1, g2) => g1.position - g2.position)]
      },
      {
        name: 'Graphic Design',
        slug: 'graphic_design',
        galleries: [...getSectionFromGalleries(state.all, GRAPHIC_DESIGN).sort((g1, g2) => g1.position - g2.position)]
      }
    ]
    Vue.set(state, 'sections', [...sections])
  }
}
