/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "what-is-memory",
  title: "What Is Memory?",
  order: 25,
  description: "How computers store and find data — the foundation for understanding data structures.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
