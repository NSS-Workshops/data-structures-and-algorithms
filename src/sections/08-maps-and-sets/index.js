/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "maps-and-sets",
  title: "Maps and Sets",
  order: 80,
  description: "Hash-based data structures for fast lookups, unique collections, and key-value storage.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }