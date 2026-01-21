/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// console.log("modules", chapterModules);

// Section configuration
const config = {
  id: "arrays-and-two-pointers",
  title: "Arrays and Two Pointers",
  order: 40,
  description: "Master array operations and the two-pointer technique for efficient problem solving.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }