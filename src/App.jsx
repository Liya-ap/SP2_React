import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Endpoints from './pages/Endpoints'
import Mockup from './pages/Mockup'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/endpoints' element={<Endpoints />} />
        <Route path='/mockup' element={<Mockup />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={route} />
  )
}

export default App