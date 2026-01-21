import { sections, chapters } from './sections'
import config from './config'

import { Course } from '@nss-workshops/nss-core'
import './index.css'

function App() {
  return (
    <Course chapters={chapters}
            config={config}
            nav={sections} />
  )
}

export default App