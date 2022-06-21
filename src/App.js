
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';

function App() {
  return (
    <>
      <div className="App">
               <NavBar/>
        </div>
       <h1>User Authentication</h1>
         <Home/>
      </>

  );
}

export default App;
