import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Inventory} from './inventory/inventory';
import {Surplus} from './surplus//Surplus';
import {Navigation} from './Navigation';
import {Scan} from './scan/Scan';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Container fluid="lg">
    <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/inventory' component={Inventory}/>
       <Route path='/surplus' component={Surplus}/>
       <Route path='/scan' component={Scan}/>
     </Switch>
     </Container>

    </BrowserRouter>
    
  );
}

export default App;
