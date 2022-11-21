// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React ,{useState} from 'react';
import Alert from './Components/Alert';
// import { type } from '@testing-library/user-event/dist/type';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
 const [mode, setmode] = useState('light'); //State to enable dark mode
 const [alert, setAlert] = useState(null); //State o set Alert
    
 const showAlert =(message, type)=>{
      setAlert({
        msg: message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
    const toggleMode =()=>{
      if (mode==='light') {
        setmode('dark');
        document.body.style.backgroundColor ='#042743';
        showAlert(" Dark mode Enabled ", "success");
        }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert(" Light mode Enabled ", "success");
      }
    }
      return (
 <>
  {/* <Navbar title ="textutils" aboutText="about TextUtils"/> */}
  {/* <Router> */}
  <Navbar title ="Textutils" mode ={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
        {/* <Switch>
              <Route exact path="/about"> */}
                       {/* <About />   about page */}
              {/* </Route>
              <Route exact path="/"> */}
                       <TextForm showAlert={showAlert} heading ="Enter The Text To Analyze" mode={mode}/>
               {/* </Route>
        </Switch>
 
  {/* </Router> */}
   </div>
  </>
        
  );
}

export default App;
