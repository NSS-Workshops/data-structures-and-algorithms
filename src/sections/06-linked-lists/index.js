/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "linked-lists",
  title: "Linked Lists",
  order: 60,
  description: "Understanding linked list data structures, node-based traversal, and dynamic memory allocation.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }