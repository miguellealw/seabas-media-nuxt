import Vue from 'vue'
import { createLink } from '/utils/data-links.js'

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
      galleries: []
    },
    {
      name: 'Videos',
      slug: 'videos',
      galleries: []
    },
    {
      name: 'Graphic Design',
      slug: 'graphic_design',
      galleries: []
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

      if (sectionName !== PHOTOGRAPHY && sectionName !== VIDEO && sectionName !== GRAPHIC_DESIGN)
        throw new Error('Section Name Not Valid')

      return state.sections.find(section => section.slug === sectionName)
    } catch (e) {
      console.error('getSection getter ERROR: ', e)
    }
  },

  // get data from specified section (photos, videos, graphic design images)
  // getSectionData: state => sectionName => {
  //   return getSection(sectionName).images
  // },

  // media is an array of data links objects {src, thumb} for the lightbox component
  media: (_, getters) => sectionName => {
    if (sectionName === VIDEO) return null

    let imageLinks
    const currentSection = getters.getSection(sectionName)
    return [
      ...currentSection.galleries
        .map(gallery => {
          imageLinks = gallery.images.flat()
          return imageLinks.map(link => createLink(`${gallery.path}/${getFileName(link)}`))
        })
        .flat()
    ]
  },

  // object mapping data from gallery section and gallery subsection (e.g. portraits, creative)
  // { portraits: [...src_links], creative: [...src_links] }
  galleryData: (_, getters) => sectionName => {
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
    // TODO: CONSIDER NOT USING set - https://stackoverflow.com/questions/50767191/vuex-update-an-entire-array/50767787
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
