
import './App.css';
import ItemListContainer from './components/ItemListContainers/ItemListContainer'
import NavBar from './components/navbar/NavBar';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home  from './routes/Home'
// import Detail from './routes/Detail'

function App() {
  return (
    <div className="App">
    
      
    < NavBar />
    {/* <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/detail' element={<Detail/>}/>
    </Routes> */}
  
    <ItemListContainer/>
    
    
    </div>
  );
}

export default App;
