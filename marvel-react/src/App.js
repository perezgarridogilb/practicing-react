import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {ButtonContent, Button, Icon } from 'semantic-ui-react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Header from './components/Header/Header';

function App() {
  return (<div>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/inicio' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/series' element={<Series />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
