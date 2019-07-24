//View Credit card payment Form

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.GetPersonEmail=this.GetPersonEmail.bind(this);
    this.GetPersonName = this.GetPersonName.bind(this);
    this.GetPersonCvc=this.GetPersonCvc.bind(this);
    this.GetNic = this.GetNic.bind(this);
    this.GetQty = this.GetQty.bind(this);
    this.GetCardno = this.GetCardno.bind(this);
    this.GetExpiredate = this.GetExpiredate.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tname: '',
      tno: '',
        ticqty:'',
        trains :[],
        qty:'',
        ticketqty:'',
        billnic:'',
        ticketprice:'',
        startstation:'',
        t_id:'',
        totalprice:'',
        amount:'',
        discount:''



    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/train/'+this.props.match.params.id)
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
                                disic:this.state.ticqty*this.state.ticketprice*15/100
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

  GetPersonEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  GetPersonName(e) {
    this.setState({
      fullname: e.target.value
    });
  }

  GetPersonCvc(e) {
    this.setState({
      cvc: e.target.value
    });
  }
  GetNic(e) {
    this.setState({
      nic: e.target.value
    })  
  }
  GetQty(e) {
    this.setState({
      qty: e.target.value
    })
  }
  GetCardno(e) {
    this.setState({
      cardno: e.target.value
    })
  }

  GetExpiredate(e) {
    this.setState({
      expiredate: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({

        ticketqty:((this.state.ticqty)-(this.state.qty)),
        totalprice:((this.state.ticketprice) * (this.state.qty))
       
    },)
    const upqty = {
      email: this.state.email,
      fullname:this.state.fullname,
      nic: this.state.nic,
      cvc:this.state.cvc,
      qty: this.state.qty,
      cardno:this.state.cardno,
      expiredate:this.state.expiredate,
      qty: (this.state.ticqty)-(this.state.qty)
    };

      const upprice = {
        email: this.state.email,
        fullname:this.state.fullname,
        nic: this.state.nic,
        cvc:this.state.cvc,
        qty: this.state.qty,
        cardno:this.state.cardno,
      expiredate:this.state.expiredate,
        payment:((this.state.ticketprice) * (this.state.qty))
        

      };





    


//update quantity
      axios.post('http://localhost:5000/train/update/'+this.props.match.params.id, upqty)
        .then(res => console.log(res.data));


        //add credit card payment
        axios.post('http://localhost:5000/Bill/addbill/', upprice)
            .then(res => console.log(res.data));

            //Send Email
            axios.post('http://localhost:5000/train/send1/', upprice)
            .then(res => {


            })
            .catch(function (error) {

                console.log(error)
            })

            
      this.props.history.push("/bill/"+this.state.nic+"/" +this.props.match.params.id);


  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>


            <h4 >You will automatically get 15% discount If you are a government employee</h4>
            <label>Train Name: {this.state.trainname}       </label><br/>



            <label>Train NO: {this.state.trainno}  </label>


            <h3 align="center">Payment via Credit Card</h3>
            <form>
                <div className="form-group">
                    <label>Email </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.email}
                      onChange={this.GetPersonEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Full Name </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.fullname}
                      onChange={this.GetPersonName}
                      />
                </div>

                <div className="form-group">
                    <label>CVC Number </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.cvc}
                      onChange={this.GetPersonCvc}
                      />
                </div>

                <div className="form-group">
                    <label>Card No </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.cardno}
                      onChange={this.GetCardno}
                      />
                </div>

                <div className="form-group">
                    <label>Expire Date </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.expiredate}
                      onChange={this.GetExpiredate}
                      />
                </div>

                <div className="form-group">
                    <label>NIC NO : </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.nic}
                      onChange={this.GetNic}
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
                    <Link to={"/bill/"+this.state.nic+'/'+this.props.match.params.id} onClick={this.onSubmit} className="btn btn-primary">Payment</Link>
                </div>
            </form>
        </div>
    )
  }
}