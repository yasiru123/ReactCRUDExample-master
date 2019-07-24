//view mobile bill payment details

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Mobilebill extends Component {
    constructor(props) {

        super(props);

        this.state = {

            trainno: '',
            trainname: '',
            startstation: '',
            endstation: '',
            starttime: '',
            endtime: '',
            traintype: '',
            frequency: '',
            from: '',
            ticqty: '',
            ticketprice: '',
            billnic:'',
            empnic:'',
            amount:'',
            discount:'',
            trains: [],
            employee: [],
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


                        employee: response.data,
                        empnic:response.data.nic

            } );
            })
            .catch(function (error) {
                console.log(error);
            })


//get selected train
        axios.get('http://localhost:5000/train/'+this.props.match.params.id1)
            .then(response =>
            {
                console.log(response)

                this.setState(
                    {
                        trains: response.data,
                        trainname: response.data.trainname,
                        trainno: response.data.trainno,
                        ticketprice:response.data.price,
                        ticqty:response.data.qty,
                        startstation:response.data.startstation,
                        endstation:response.data.endstation,
                        starttime:response.data.starttime,
                        endtime:response.data.endtime


                    } );
            })
            .catch(function (error) {
                console.log(error);
            })

//get mobile bill
        axios.get('http://localhost:5000/mobilebill/getmobilebill')
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


                        if ((this.state.empnic)!=''){

                           
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
                                axios.post('http://localhost:5000/mobilebill/updatemobilebill/'+this.state.t_id,uppayment)
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

                                        payment:this.state.gqty*this.state.gprice*85/100
                                    }
                                       //update total price
                                    axios.post('http://localhost:5000/mobilebill/updatemobilebill/'+this.state.t_id,uppayment)
                        .then(res => console.log(res.data));


                                }
                            )

                        }
                    } )
            })
            .catch(function (error) {
                console.log(error);
            })

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
               <label>ID:   {this.state.billnic} </label>

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
