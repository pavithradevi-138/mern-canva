import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
// import Index from './pages/Index'
import Layout from './pages/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import Templates from './components/Templates'
import CreateDesign from './components/CreateDesign'
import Main from './pages/Main'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Index />} /> */}
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/templates' element={<Templates />} />
          </Route>
          <Route path='/design/create' element={<CreateDesign />}></Route>
          <Route path='/design/:id/edit' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
