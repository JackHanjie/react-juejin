import { memo } from 'react'
import { useRoutes } from 'react-router'
import routes from './routes'
import NavBar from './views/NavBar/NavBar'

import useTitle from './hooks/useTitle'

const App = memo(() => {
  useTitle()
  return (
    <div>
      <NavBar />
      { useRoutes(routes) }
    </div>
  )
})

export default App