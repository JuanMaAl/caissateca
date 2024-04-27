import React, { useEffect, useState } from 'react'
import { Login, SignUp, Homepage, AddBook, BookView, } from './pages'
import { Routes, Route} from 'react-router-dom'

const App = () => {
  const [token, setToken] = useState(false)
 
  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

useEffect(()=>{
  if (sessionStorage.getItem('token')) {
    let data = JSON.parse(sessionStorage.getItem('token'))
    setToken(data)
  }

}, [])

  return (
    <div className=" h-2/3">
      <Routes>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/'} element={<Login setToken={setToken} />} />
        {token?<Route path={'/homepage'} element={<Homepage token={token} />} />:""}
        {token?<Route path={'/addbook'} element={<AddBook token={token} />} />:""}
        {token?<Route path={'/bookview'} element={<BookView token={token} />} />:""}
      </Routes>

    </div>
  )
}

export default App