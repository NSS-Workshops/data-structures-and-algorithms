import fs from 'fs'
import path from 'path'
import { normalizePath } from 'vite'
import { glob } from 'glob'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Smart static copy plugin - only copies image files when necessary
 * Compares source files with destination files and only copies when:
 * - File counts don't match
 * - Source files are newer than destination files
 * - Destination files are missing
 */
export const smartStaticCopyPlugin = {
  name: 'smart-static-copy',
  configureServer(server) {
    // Store server reference on the plugin object
    smartStaticCopyPlugin._server = server
  },
  async buildStart() {
    const projectRoot = path.resolve(__dirname, '..')
    const imagePattern = path.resolve(projectRoot, 'src/sections/**/*.{png,jpg,jpeg,svg,gif,webp,avif}')
    const sourceFiles = glob.sync(normalizePath(imagePattern))

    if (sourceFiles.length === 0) {
      console.log('[smart-static-copy] No source images found, skipping copy operation.')
      return
    }

    // Always copy to public/assets - Vite will handle copying to dist during build
    // Development: served directly by Vite dev server from public/assets
    // Production: Vite copies public/assets to dist/assets during build
    const destDir = path.resolve(projectRoot, 'public/assets')

    console.log(`[smart-static-copy] Using destination directory: ${destDir}`)
    let destFiles = []

    try {
      if (fs.existsSync(destDir)) {
        destFiles = fs.readdirSync(destDir)
          .filter(file => {
            const ext = path.extname(file).toLowerCase()
            return ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.avif'].includes(ext)
          })
          .map(file => path.join(destDir, file))
      }
    } catch (error) {
      console.warn('[smart-static-copy] Could not read destination directory:', error.message)
    }

    console.log(`[smart-static-copy] Found ${sourceFiles.length} source files, ${destFiles.length} destination files.`)

    // Check if we need to copy files
    let needsCopy = false

    // Different number of files means we need to copy
    if (sourceFiles.length !== destFiles.length) {
      needsCopy = true
      console.log('[smart-static-copy] File count mismatch, copy needed.')
    } else {
      // Same number of files, check if any source file is newer than its destination
      for (const sourceFile of sourceFiles) {
        const fileName = path.basename(sourceFile)
        const destFile = path.join(destDir, fileName)

        if (!fs.existsSync(destFile)) {
          needsCopy = true
          console.log(`[smart-static-copy] Missing destination file: ${fileName}`)
          break
        }

        const sourceStats = fs.statSync(sourceFile)
        const destStats = fs.statSync(destFile)

        if (sourceStats.mtime > destStats.mtime) {
          needsCopy = true
          console.log(`[smart-static-copy] Source file newer: ${fileName}`)
          break
        }
      }
    }

    if (needsCopy) {
      console.log('[smart-static-copy] Copying files...')

      // Ensure destination directory exists
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true })
      }

      // Copy files
      let copiedCount = 0
      for (const sourceFile of sourceFiles) {
        const fileName = path.basename(sourceFile)
        const destFile = path.join(destDir, fileName)

        try {
          fs.copyFileSync(sourceFile, destFile)
          copiedCount++
        } catch (error) {
          console.error(`[smart-static-copy] Failed to copy ${fileName}:`, error.message)
        }
      }

      console.log(`[smart-static-copy] Copied ${copiedCount} files.`)

      // Trigger server reload in development mode so Vite recognizes new assets
      if (smartStaticCopyPlugin._server) {
        console.log('[smart-static-copy] Reloading server to recognize new assets...')
        smartStaticCopyPlugin._server.restart()
      }
    } else {
      console.log('[smart-static-copy] All files up to date, skipping copy operation.')
    }
  }
}