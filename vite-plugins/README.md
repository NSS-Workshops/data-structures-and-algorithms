# Vite Custom Plugins

This directory contains custom Vite plugins used in the project.

## Plugins

### Smart Static Copy Plugin (`smart-static-copy.js`)
Intelligently copies image files from `src/sections/` to `dist/assets/` only when necessary.

**Features:**
- Compares source and destination file counts
- Checks file modification timestamps
- Only copies when files are missing, added, or modified
- Provides detailed logging about copy operations

**Usage:**
```javascript
import { smartStaticCopyPlugin } from './vite-plugins/smart-static-copy.js'

// Add to plugins array
plugins.push(smartStaticCopyPlugin)
```

### HTML Replacement Plugin (`html-replacement.js`)
Replaces placeholders in HTML files with dynamic values.

**Features:**
- Replaces `%COURSE_NAME%` with the actual course name
- Replaces `%COURSE_URL%` with the URL-friendly course name

**Usage:**
```javascript
import { createHtmlReplacementPlugin } from './vite-plugins/html-replacement.js'

// Create plugin with course name and URL
const htmlPlugin = createHtmlReplacementPlugin(courseName, courseUrl)
```

### Image Watcher Plugin (`image-watcher.js`)
Watches for new image files during development and triggers rebuilds.

**Features:**
- Monitors `src/sections/` directory for new image files
- Automatically runs build when new images are detected
- Restarts dev server to pick up new assets
- Supports common image formats: `.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`, `.webp`, `.avif`

**Usage:**
```javascript
import { imageWatcherPlugin } from './vite-plugins/image-watcher.js'

// Add to plugins array
plugins.push(imageWatcherPlugin)
```

## Import All Plugins

Use the index file to import all plugins at once:

```javascript
import {
  smartStaticCopyPlugin,
  createHtmlReplacementPlugin,
  imageWatcherPlugin
} from './vite-plugins/index.js'