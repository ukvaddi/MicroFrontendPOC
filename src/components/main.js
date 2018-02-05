import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductComponent from './productComponent';
import OrderLookup from './OrderLookup';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
    
      <Route path='/products' component={ProductComponent}/>
      <Route path='/orderlookup' component={OrderLookup}/>
    </Switch>
  </main>
)

export default Main
