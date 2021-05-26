import logo from './logo.svg';
import './App.css';


import Home from './Pages/home';
import Login from './Pages/login';
import Userhome from './Pages/userhome';
import { BreakpointProvider } from 'react-socks';


/* ######################    Links    ########################### */
import { Router,Route, Switch } from "react-router";
import {HashRouter,BrowserRouter} from "react-router-dom";



function App() {
  return (
      
    <BreakpointProvider>
      
      
    <div className="App">
        <BrowserRouter>
        <Route exact path="/" component={Home} />  
        <Route exact path="/login" component={Login} />  
        <Route exact path="/userhome" component={Userhome} /> 
        </BrowserRouter>   
    </div>
      
    </BreakpointProvider>
  );
}

export default App;
