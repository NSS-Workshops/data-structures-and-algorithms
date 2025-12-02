import path from 'path'
import { exec } from 'child_process'
import chokidar from 'chokidar'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import fs from 'fs/promises'
import { glob } from 'glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Image watcher plugin - watches for image file changes and manages assets
 * Monitors src/sections directory for image additions/deletions and manages dist/assets accordingly
 */
export const imageWatcherPlugin = {
  name: 'image-watcher',
  configureServer(server) {
    const projectRoot = path.resolve(__dirname, '..')
    const watchDir = path.resolve(projectRoot, 'src/sections')
    const watcher = chokidar.watch(watchDir, {
      ignored: /node_modules/,
      persistent: true,
      ignoreInitial: true // Don't trigger for existing files
    })

    // Helper function to check if file is an image
    const isImageFile = (filePath) => {
      const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.avif']
      const fileExt = path.extname(filePath).toLowerCase()
      return imageExtensions.includes(fileExt)
    }

    // Helper function to find and delete corresponding asset files
    const deleteCorrespondingAssets = async (deletedFilePath) => {
      try {
        const distAssetsDir = path.resolve(projectRoot, 'dist/assets')
        const fileName = path.basename(deletedFilePath)
        const assetFilePath = path.join(distAssetsDir, fileName)

        // Check if the corresponding asset file exists and delete it
        try {
          await fs.access(assetFilePath)
          await fs.unlink(assetFilePath)
          console.log(`[image-watcher] Deleted asset: ${path.relative(projectRoot, assetFilePath)}`)
          return [path.relative(projectRoot, assetFilePath)]
        } catch (accessError) {
          // File doesn't exist, which is fine
          console.log(`[image-watcher] No corresponding asset found for: ${path.relative(projectRoot, deletedFilePath)}`)
          return []
        }
      } catch (error) {
        console.error(`[image-watcher] Error cleaning up assets for ${deletedFilePath}: ${error.message}`)
        return []
      }
    }

    // Handle new image files
    watcher.on('add', (filePath) => {
      if (isImageFile(filePath)) {
        console.log(`\n[image-watcher] New image detected: ${path.relative(projectRoot, filePath)}`)
        console.log('[image-watcher] Running build to update static assets...')

        exec('npm run build', { cwd: projectRoot }, (error, stdout, stderr) => {
          if (error) {
            console.error(`[image-watcher] Build failed: ${error.message}`)
            return
          }
          if (stderr) {
            console.error(`[image-watcher] Build stderr: ${stderr}`)
          }
          console.log('[image-watcher] Build completed successfully!')
          console.log('[image-watcher] Dev server will restart to pick up new assets...')

          // Restart the dev server to pick up new assets
          server.restart()
        })
      }
    })

    // Handle deleted image files
    watcher.on('unlink', async (filePath) => {
      if (isImageFile(filePath)) {
        console.log(`\n[image-watcher] Image deleted: ${path.relative(projectRoot, filePath)}`)
        console.log('[image-watcher] Cleaning up corresponding assets...')

        const deletedAssets = await deleteCorrespondingAssets(filePath)

        if (deletedAssets.length > 0) {
          console.log(`[image-watcher] Successfully cleaned up ${deletedAssets.length} asset file(s)`)
          // Restart server to reflect changes in the browser
          console.log('[image-watcher] Dev server will restart to reflect asset changes...')
          server.restart()
        } else {
          console.log('[image-watcher] No cleanup needed - asset may not have been built yet')
        }
      }
    })

    // Handle file moves/renames (which appear as unlink + add)
    watcher.on('change', (filePath) => {
      if (isImageFile(filePath)) {
        console.log(`\n[image-watcher] Image modified: ${path.relative(projectRoot, filePath)}`)
        console.log('[image-watcher] Running build to update static assets...')

        exec('npm run build', { cwd: projectRoot }, (error, stdout, stderr) => {
          if (error) {
            console.error(`[image-watcher] Build failed: ${error.message}`)
            return
          }
          if (stderr) {
            console.error(`[image-watcher] Build stderr: ${stderr}`)
          }
          console.log('[image-watcher] Build completed successfully!')
          console.log('[image-watcher] Dev server will restart to pick up updated assets...')

          // Restart the dev server to pick up updated assets
          server.restart()
        })
      }
    })

    server.httpServer?.on('close', () => {
      watcher.close()
    })
  }
}