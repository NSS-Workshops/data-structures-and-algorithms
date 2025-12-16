// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "2d-arrays",
  title: "2D Arrays",
  order: 50,
  description: "Working with two-dimensional arrays, matrix operations, and grid-based algorithms.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }