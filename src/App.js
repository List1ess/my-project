import React from "react"
import { Routes, Route } from 'react-router-dom'

import Archive from "./components/Archive"
import Content from "./components/Content"
import Home from "./components/Home"
import Media from "./components/Media"
import Mission from "./components/Mission"
import Tech from "./components/Tech"

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Tech' element={<Tech />}></Route>
      <Route path='/Archive' element={<Archive />}></Route>
      <Route path='/Content' element={<Content />}></Route>
      <Route path='/Media' element={<Media />}></Route>
      <Route path='/Mission' element={<Mission />}></Route>
     
    </Routes>
  )
}