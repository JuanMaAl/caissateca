import React from 'react'
import { Login, SignUp } from './pages'
import { Routes, Route} from 'react-router-dom' 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/signup'} element={<SignUp />}>
        </Route>
        <Route path={'/'} element={<Login />}>
        </Route>
      </Routes>

    </div>
  )
}

export default App