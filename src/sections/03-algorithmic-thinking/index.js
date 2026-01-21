/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "algorithmic-thinking",
  title: "Algorithmic Thinking & Big-O",
  order: 30,
  description: "Problem-solving fundamentals and Big-O notation for analyzing algorithm efficiency.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }