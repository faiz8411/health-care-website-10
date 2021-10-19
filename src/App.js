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

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Specialist from './components/Specialist/Specialist';
import Footer from './components/Home/Footer/Footer';
import About from './components/About/About';
import Activities from './components/Activities/Activities';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';


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

            <Route exact path="/specialist">
              <Specialist></Specialist>
            </Route>
            <Route exact path="/service">
              <Activities></Activities>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
