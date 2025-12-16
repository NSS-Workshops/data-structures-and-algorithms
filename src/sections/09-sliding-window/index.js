/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "sliding-window",
  title: "Sliding Window",
  order: 90,
  description: "Master the sliding window technique for optimizing array and string problems.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }