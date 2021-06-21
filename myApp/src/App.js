import './App.css';

import {Home} from './Home';
import {Inventory} from './inventory/inventory';
import {Surplus} from './surplus//Surplus';
import {Navigation} from './Navigation/Navigation';
import {Scan} from './scan/Scan';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Certification} from './Certification/certification';

import React from "react";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

let isLoggedIn = true;
let isCertificationOn = true;

function App() {
  return (
    <BrowserRouter>

      <Container fluid="lg">
    <Navigation isCertificationOn={isCertificationOn}/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/inventory'
         render={(props) => (
          <Inventory {...props} isLoggedIn={isLoggedIn} />
        )}
       />
       <Route path='/surplus' component={Surplus}/>
       <Route path='/scan' component={Scan}/>
       <Route path='/certification' component={Certification}/>
     </Switch>
     </Container>

    </BrowserRouter>
    
  );
}

export default App;
