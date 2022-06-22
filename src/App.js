
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Login from './Pages/login';
import NavBar from './components/navBar';
import Profile from './Pages/profile';
import SignUp from './Pages/signUp';
// import { auth } from '../src/firebase'
import Error from './Pages/error'
import Reset from './Pages/reset';
import { AddToDo } from './components/addToDo';
function App() {

  // const user = sessionStorage.getItem('email')


  return (
    <>
    
      <div className="App">
               <NavBar/>
        </div>
        <Routes>
        <Route exact path="/home" element={<Home />}/>
         <Route exact path="*" element={<Home />}/>
        <Route exact path='/login' element={<Login />}  /> 
        {/* <Route exact path='/login/profile' element={<Profile />} /> */}
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/signup' element={<SignUp />} />
         <Route exact path='/reset' element={<Reset />} />
        <Route exact path='*' element={<Error />} /> 
        
      </Routes>   
     <AddToDo/>
       </>

  );
}

export default App;
