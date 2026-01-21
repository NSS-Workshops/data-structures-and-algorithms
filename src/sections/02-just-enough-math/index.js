/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "just-enough-math",
  title: "Just Enough Math",
  order: 20,
  description: "Mathematical concepts and problem-solving fundamentals needed for algorithm analysis.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }