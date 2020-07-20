import React,{useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout'
import Login from "./Login"
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function App() {
  const [{user},dispatch] = useStateValue();
  const unsubscribe = useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){


        dispatch({
          type:"SET_USER",
          user:authUser
        })

      }else{

        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })

    return () =>{
      unsubscribe()
    }
   
  }, [])


  console.log('user is',user)
  return (
  	<Router>
    <div className="app">
     <Switch>

     <Route path = "/checkout">
     <Header />
     <Checkout />
     </Route>

     <Route path = "/login">
     <Login />
     </Route>

     <Route path = "/">
     <Header />
     <Home />
     
     </Route>

     </Switch>
    </div>
    </Router>
  );
}

{/*React Router */}
     {/*local host.com/ */}
     {/*john.com is host.com/ */}
     {/*local host.com/checkout */}
     {/*local host.com/login */}

export default App;
