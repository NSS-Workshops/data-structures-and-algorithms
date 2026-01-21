const sectionModules = import.meta.glob('./*/index.js', { eager: true })

// Function to process markdown content - converts relative image paths to absolute and handles Mermaid
const processMarkdownContent = (content) => {
  if (!content || typeof content !== 'string') return content;

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

  // Handle relative image paths
  let processedContent = content.replace(
    /(<img[^>]*\s)src="\.\/([^"]+\.(png|jpg|jpeg|svg|gif|webp|avif))"([^>]*>)/g,
    `$1src="${basePath}/assets/$2"$4`
  );
  return processedContent;
};

const sections = []
const chapters = []

Object.values(sectionModules)
  .sort((a, b) => (a.config?.order || 999) - (b.config?.order || 999))
  .forEach(section => {
    sections.push(section.config)

    // Process each chapter's content to handle relative image paths
    const processedChapters = section?.chapters?.map(chapter => ({
      ...chapter,
      content: processMarkdownContent(chapter.content)
    }));

    chapters.push(...processedChapters)
  })

export { sections, chapters }
