import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/products'
import Detail from './components/details'
import Auth from './components/auth'
import Track from './components/track'
import TrackAll from './components/allTracks'

const routes = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  }
  ,
  {
    path : '/products',
    element : <Products/>,
  }
  ,
  {
    path : '/detail/:item',
    element : <Detail/>
  }
  ,
  {
    path : '/auth',
    element : <Auth/>
  }
  ,
  {
    path : '/track/:id',
    element : <Track/>
  }
  ,
  {
    path : '/track-all',
    element : <TrackAll/>
  }
])

function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
