
import './App.css';
import ItemListContainer from './components/ItemListContainers/ItemListContainer'
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <div className="App">
    < NavBar />
    <ItemListContainer greeting={"Welcome"}/>
    <ItemListContainer greeting={"Bienvenido"}/>

    
    
    </div>
  );
}

export default App;
