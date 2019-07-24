import React, { Component } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";

import train from "../image/train.jpg";

export default class Create extends Component {

    render() {
        return (
<div className="container-fluid">
<div style={{ marginTop: 0 }}>
                    <div style={{ height: 500 }}>
                                <img
                                    style={{ width: "100%", height: "100%" }}
                                    src={train}
                                    alt="First slide"
                                />
                            </div>
</div>
<br></br>
<div class="card text-center">
  <div class="card-header">
  Online Train Tickets Reservation
  </div>
  <div class="card-body">
    <h5 class="card-title">Purchase Your Train Tickets</h5>
    <p class="card-text"></p>
    <Link to={"/create/"} className="btn btn-primary">Purchase Now</Link>
    
  </div>
  
</div>

<br></br>
<footer class="p-3 mb-2 bg-info text-white">
                        <div class="container-fluid text-center text-md-left">
                            <div class="row">

                                <div class="col-md-6 mt-md-0 mt-3">
                                    <h5 class="text-uppercase">Vision</h5>
                                    <p>Vision
                                        To be the most sought after land transport provider in Sri Lanka, 
                                        providing unsurpassed value to our stakeholders.


                                       </p>
                                </div>

                                <hr class="clearfix w-100 d-md-none pb-3" />

                                <div class="col-md-3 mb-md-0 mb-3">

                                </div>

                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
        <p>
          <i class="fas fa-home mr-3"></i> Colombo , Sri Lanka</p>
        <p>
          <i class="fas fa-envelope mr-3"></i> whystack@gmail.com</p>
        <p>
          <i class="fas fa-phone mr-3"></i> + 9477123654</p>
        <p>
          <i class="fas fa-print mr-3"></i> + 9477123456</p>

<br></br>
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>

      </div>
                            </div>
                        </div>


                        <div class="footer-copyright text-center py-3">© 2011 Sri Lanka Railways (SLR). All rights Reserved Sri Lanka Railways,
Colombo, Sri Lanka:
  
                        </div>




                    </footer>
</div>
        );
    }
}
