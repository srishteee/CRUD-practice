import { useState } from 'react'
import './App.css'
//import Header from './components/pages/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import CreateProduct from './components/pages/create-product/CreateProduct';
//import GetProducts from './components/pages/get-product/GetProducts';

import { RouterURLs } from './components/router/RoutingURLs.jsx';  // Add .jsx extension
import Counter from './components/pages/counter/Counter.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <RouterURLs /> 
    <Counter/>
    
    </>
  )
}


export default App
