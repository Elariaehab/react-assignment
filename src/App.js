import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Layout from './components/layout/layout';
import Navbar from './components/navbar/Navbar';

const router = createBrowserRouter([
  {path: '', element:<Layout/>, children:[
   { path: '', element: <Home />},
{ path: 'about', element: <About /> },
{ path: 'portfolio', element: <Portfolio /> },
{ path: 'contact', element: <Contact /> },
{ path: 'navbar', element: <Navbar /> },
{path: "*" , element:<>
<div className='d-flex'>
  <h1>not found</h1>
</div>

</>}
  ]}
]);

export default class App extends Component {
  render(){
  return ( 
  <>
  <RouterProvider router={router} />
  </>
  );
}
}

