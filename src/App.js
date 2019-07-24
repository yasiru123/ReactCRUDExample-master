import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Homepage from './components/home';
import Bill from './components/bill';
import Paymentmethod from './components/paymentmethod.component';
import Mobilepay from './components/mobilepay.component';
import Mobilebill from './components/mobilebill';
import User from './components/Signup.component';
import Edituser from './components/updateuser.component';
import updateuser from './components/updateuser.component';



class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">Online Train Tickets Reservation</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">Search Train</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/index'} className="nav-link"></Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/signup'} className="nav-link">SignUp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/updateuser'} className="nav-link">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route path='/create' component={Create} />
                        <Route path='/edit/:id' component={ Edit } />
                        <Route path='/index/:startstation/:endstation' component={ Index } />
                        <Route  path='/bill/:nic/:id' component={ Bill } />
                        <Route  path='/mobilepay/:id1' component={ Mobilepay } />
                        <Route  path='/mobilebill/:nic/:id1' component={ Mobilebill } />
                        <Route path='/paymentmethod/:id' component={Paymentmethod}/>
                        <Route path='/signup' component={User}/>
                        <Route path='/updateuser/' component={updateuser}/>
                        
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
