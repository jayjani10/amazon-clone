import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders';

const promise = loadStripe('pk_test_51HoV48J6QmLNNPas8aPi1hnVpIR75ugETrhQGUnaqlK9nNOTNoEGp6YzFp1E2WMmyELk0HQNk406vMx4MqPB1jyB00AfvhwAz1');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>> ', authUser);

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        });

      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        });

      }

    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={ promise }>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
