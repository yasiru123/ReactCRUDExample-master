import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
     
export default class Paymentmethod extends Component {

    constructor(props)

    

   
    {
        

super(props); 
this.onSubmit = this.onSubmit.bind(this);


}

onSubmit(e) {

            this.props.history.push("/mobliebill/"+this.props.match.params.id);


}

    render() {
        return (
            <div style={{ marginTop: 10 }}>

            <h3 align="center">Payment Methods</h3>
    <form >
       <div className="form-group">
          
                    <Link to={"/mobilepay/"+this.props.match.params.id}  className="btn btn-primary" onClick ={this.onSubmit}>Payment via mobile</Link>
        </div>

        <div className="form-group">
                    <Link to={"/edit/"+this.props.match.params.id}  className="btn btn-primary">Payment via Creditcard</Link>
        </div>

       </form>
       </div>
               
        )
      }

}
