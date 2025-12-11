/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "sorting-and-binary-search",
  title: "Sorting and Binary Search",
  order: 85,
  description: "Efficient sorting algorithms and binary search techniques for optimized data retrieval.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }