
import './App.css';
import ItemListContainer from './components/ItemListContainers/ItemListContainer'
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemListContainers/ItemDetailContainer';
import Home from '../src/routes/Home';
import RouteCart from './routes/RouteCart';



function App() {
  return (
    
    <div className="App">
    
      <BrowserRouter>
    < NavBar />
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Games' element={<ItemListContainer/>}/>
      <Route path='/Detail/:id' element={<ItemDetailContainer/>}/>
      <Route path='/RouteCart' element={<RouteCart/>}/>
    </Routes>
  </BrowserRouter>
    
    
    
    </div>

  );
}

export default App;
