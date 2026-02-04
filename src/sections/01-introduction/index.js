/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "introduction",
  title: "Introduction",
  order: 10,
  description: "Introduction to the course and fundamental concepts.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }