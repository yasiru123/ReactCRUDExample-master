//View Credit card payment details

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Bill extends Component {
    constructor(props) {

        super(props);
        

        this.state = {

            trainno: '',
            gtname: '',
            email:'',
            cvc:'',
            startstation: '',
            endstation: '',
            starttime: '',
            endtime: '',
            trainftype: '',
            fullname:'',
            frequency: '',
            from: '',
            ticqty: '',
            ticketprice: '',
            billnic:'',
            personnic:'',
            amount:'',
            Discount:'',
            trains: [],
            creditcard: [],
            totprice:'',
            qty1:'',
            t_id:''

        }



    }




componentDidMount(e) {
        
        axios.get('http://localhost:5000/Employee/getEmp/'+this.props.match.params.nic)
            .then(response =>
            {
                console.log(response)



                this.setState(
                    {


                        creditcard: response.data,
                        personnic:response.data.nic

            } );
            })
            .catch(function (error) {
                console.log(error);
            })


            //get selected train details
        axios.get('http://localhost:5000/train/'+this.props.match.params.id)
            .then(response =>
            {
                console.log(response)

                this.setState(
                    {
                        trains: response.data,
                        trainname: response.data.trainname,
                        trainno: response.data.trainno,
                        ticketprice:response.data.price,
                        ticketqty:response.data.qty,
                        startstation:response.data.startstation,
                        endstation:response.data.endstation,
                        starttime:response.data.starttime,
                        endtime:response.data.endtime



                    } );
            })
            .catch(function (error) {
                console.log(error);
            })

//get bill details
        axios.get('http://localhost:5000/Bill/getBill')
            .then(response =>
            {
                console.log(response)

                this.setState(
                    {
                        trains: response.data,
                        ticqty:response.data.qty,
                        billnic:response.data.nic,
                        t_id:response.data._id
                        




                    },()=>{


                        if ((this.state.personnic)!=''){

                          
                            this.setState(
                                {

                                    amount:this.state.ticqty*this.state.ticketprice*85/100,
                                    discount:this.state.ticqty*this.state.ticketprice*15/100
                                },()=>{
                                alert("You Have 15% Discount for your Government ID")
                                var uppayment={

                                    payment:this.state.ticqty*this.state.ticketprice*85/100
                                }
                                //update total price
                                axios.post('http://localhost:5000/bill/updatebill/'+this.state.t_id,uppayment)
                    .then(res => console.log(res.data));


                                }
                            )


                        }
                        else {

                          
                            this.setState(
                                {
                                    amount:this.state.ticqty*this.state.ticketprice,
                                    discount:"0"
                                },()=>{

                                    var uppayment={

                                        payment:this.state.disc
                                    }
                                       //update total pirce
                                    axios.post('http://localhost:5000/bill/updatebill/'+this.state.g_id,uppayment)
                        .then(res => console.log(res.data));
                                }
                            )

                        }
                    },()=>{
                       
                    } )
            })
            .catch(function (error) {
                console.log(error);
            })

            


            var uppayment={

                payment:this.state.amount
            }
                //update total price
            axios.post('http://localhost:5000/bill/updatebill/'+this.state.t_id,uppayment)
.then(res => console.log(res.data));
            


         
    }

    

  

    render() {

        return(


       <form >
           <div className="form-group">
               <label>Ticket Price      :        {this.state.ticketprice} </label>

           </div>
           <div className="form-group">
               <label>Train No     :     {this.state.trainno}  </label>


           </div>
           <div className="form-group">
               <label>Quantity:   {this.state.ticqty} </label>

           </div>

           <div className="form-group">
               <label>ID:   {this.state.billnic} </label>

           </div>
           <div className="form-group">
               <label>Start Station:   {this.state.startstation} </label>

           </div>
           <div className="form-group">
               <label>End Station:   {this.state.endstation} </label>

           </div>

           <div className="form-group">
               <label>Arrival Time:   {this.state.starttime} </label>

           </div>

           <div className="form-group">
               <label>Departture Time:   {this.state.endtime} </label>

           </div>


           <div className="form-group">
               <label>Total Price:   {this.state.amount} </label>

           </div>

           <div className="form-group">
               <label>Discount: {this.state.discount} </label>

           </div>



       </form>

        )
   }
    }
