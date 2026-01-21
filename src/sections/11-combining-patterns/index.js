/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "combining-patterns",
  title: "Combining Patterns",
  order: 110,
  description: "Integrating multiple data structures and algorithmic patterns to solve complex problems.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }