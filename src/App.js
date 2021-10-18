import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './components/Home/Services/Services';
import Catagory from './components/Catagory/Catagory';
import Header from './components/Home/Header/Header';
import Schedule from './components/Schedule/Schedule';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="services">
            <Services></Services>
          </Route>
          <Route path="/catagory">
            <Catagory></Catagory>

          </Route>


        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
