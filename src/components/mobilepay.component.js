//View mobile bill payment form

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Mobilepay extends Component {
  constructor(props) {
    super(props);
    this.GetNumber=this.GetNumber.bind(this);
    this.GetPin = this.GetPin.bind(this);
    this.GetQty = this.GetQty.bind(this);
    this.GetNic = this.GetNic.bind(this);
    this.GetEmail = this.GetEmail.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      trainname: '',
      trainno: '',
        ticqty:'',
        trains :[],
        qty:'',
        ticketqty:'',
        billnic:'',
        ticketprice:'',
        startstation:'',
        t_id:'',
        totalprice:''



    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/train/'+this.props.match.params.id1)
          .then(response =>
          {
              console.log(response)

              this.setState(
                  {
                      trains: response.data,
                      trainname: response.data.trainname,
                      trainno: response.data.trainno,
                      ticqty:response.data.qty,
                      ticketprice:response.data.price,
                      t_id:response.data._id



                  },()=>{


                    if ((this.state.bnic)!=''){

                      
                        this.setState(
                            {

                                amount:this.state.ticqty*this.state.ticketprice*85/100,
                                discount:this.state.ticqty*this.state.ticketprice*15/100
                            },()=>{


                            }
                        )


                    }
                    else {

                       
                        this.setState(
                            {
                                amount:this.state.ticqty*this.state.ticketprice,
                                discount:"0"
                            },()=>{


                            }
                        )

                    }
                } );
                  
                 
          })
          .catch(function (error) {
              console.log(error);
          })

    console.log(this.state.tname)
    }

 GetNumber(e) {
    this.setState({
      number: e.target.value
    });
  }
  GetNic(e){
    this.setState({
        nic: e.target.value
      });
      
  }

  GetPin(e) {
    this.setState({
      pin: e.target.value
    });
  }
  GetQty(e) {
    this.setState({
      qty: e.target.value
    })
  }

  GetEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {

    this.setState({

        ticketqty:((this.state.ticqty)-(this.state.qty)),
        totalprice:((this.state.ticketprice) * (this.state.qty))
    },)
    const oupqtybj = {
      number: this.state.number,
      pin:this.state.pin,
      qty: this.state.qty,
      nic:this.state.nic,
      email:this.state.email,
        qty: (this.state.ticqty)-(this.state.qty)
    };

      const uppayment = {
      number: this.state.number,
      pin:this.state.pin,
      qty: this.state.qty,
      nic:this.state.nic,
      email:this.state.email,
      payment:((this.state.ticketprice) * (this.state.qty))

      };





  


//update quantity
      axios.post('http://localhost:5000/train/update/'+this.props.match.params.id, oupqtybj)
        .then(res => console.log(res.data));
//add mobile payment
      axios.post('http://localhost:5000/MobileBill/addmobilebill/', uppayment)
          .then(res => console.log(res.data));
//send email
          axios.post('http://localhost:5000/train/send1/', uppayment)
          .then(res => {


          })
          .catch(function (error) {

              console.log(error)
          })
//send sms
          axios.post('http://localhost:5000/train/send/', uppayment)
            .then(res => {


            })
            .catch(function (error) {

                console.log(error)
            })



      this.props.history.push("/mobilebill/"+this.state.nic+"/" +this.props.match.params.id1);


  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>


            <h4 >You will automatically get 15% discount If you are a government employee</h4>
            <label>Train Name: {this.state.trainname}       </label><br/>



            <label>Train NO: {this.state.trainno}  </label>


            <h3 align="center">Payment Via Mobile</h3>
            <form>
                <div className="form-group">
                    <label>Mobile Number </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.number}
                      onChange={this.GetNumber}
                      />
                </div>
                <div className="form-group">
                    <label>PIN</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      value={this.state.pin}
                      onChange={this.GetPin}
                      />
                </div>
                <div className="form-group">
                    <label>NIC</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nic}
                      onChange={this.GetNic}
                      />
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.email}
                      onChange={this.GetEmail}
                      />
                </div>

                <div className="form-group">
                    <label>Quanity: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.qty}
                      onChange={this.GetQty}
                      />
                </div>
                <div className="form-group">
                    <Link to={"/mobilebill/"+this.state.nic+'/'+this.props.match.params.id1} onClick={this.onSubmit} className="btn btn-primary">Amount</Link>
                </div>
            </form>
        </div>
    )
  }
}