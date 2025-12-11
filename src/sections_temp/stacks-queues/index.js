/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "stacks-queues",
  title: "Stacks and Queues",
  order: 90,
  description: "LIFO and FIFO data structures for managing ordered collections and implementing algorithms.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }