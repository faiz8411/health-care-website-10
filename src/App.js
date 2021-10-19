import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Home/Services/Services';
import Catagory from './components/Catagory/Catagory';
import Header from './components/Home/Header/Header';
import Schedule from './components/Schedule/Schedule';
import Login from './components/Login/Login';
import ServicDetails from './components/ServiceDtails/ServicDetails';
import DoctorDetails from './components/Doctordetails/DoctorDetails';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServicDetails></ServicDetails>
            </PrivateRoute>
            <PrivateRoute path="/doctor/:doctorId">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>

            <Route path="/catagory">
              <Catagory></Catagory>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>



          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
