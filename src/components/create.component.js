//Select Start Station and End Station .

import React, { Component } from 'react';
import axios from 'axios';
import {stateOptions} from "./jsons/data";
import TableRow from "./TableRow";
import index from "./index.component";
import {Link} from "react-router-dom";


export default class Create extends Component {
  constructor(props) {
    super(props);
    this.GetStartStation = this.GetStartStation.bind(this);
    this.GetEndStation = this.GetEndStation.bind(this);
    //this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        trainno:'',//tno
        trainname:'',//tname
        startstation:'',//ssta
        endstation:'',//est
        starttime:'',//stime
        endtime:'',//etime
        traintype:'',//type
        frequency:'',//fr
        from:'',
        qty:'',
        price:'',
        trains: [],//bussin
        clickedSearchTrains:false


  }
  }
    GetStartStation(e) {
    this.setState({
      startstation: e.target.value
    });
  }
    GetEndStation(e) {
    this.setState({
        endstation: e.target.value
    })  
  }


  onSubmit(e) {
    e.preventDefault();
    const train = {
        startstation: this.state.startstation,
        endstation: this.state.endstation

    };

    


      {
          //get train by start staion and end station
          axios.get('http://localhost:5000/train/'+this.state.startstation+'/'+this.state.endstation)
              .then(response =>
              {
                  console.log(response)

                  this.setState({ trains: response.data });
              })
              .catch(function (error) {
                  console.log(error);
              })


          this.props.history.push("/index/"+this.state.startstation+"/" +this.state.endstation);

      }
    

  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Select Your Train</h3>
            <form >

                <div className="form-group col-md-4">
                <label htmlFor="inputState">Start Station</label>
                <select id="inputState" className="form-control" value={this.state.startstation} onChange={this.GetStartStation}>
                    <option>Select</option>
                    <option>Pettah</option>
                    <option>Kandy</option>
                    <option>Badulla</option>
                </select>
        </div>

                <div className="form-group col-md-4">
                    <label htmlFor="inputState">End Station</label>
                    <select id="inputState" className="form-control" value={this.state.endstation} onChange={this.GetEndStation}>

                        <option>Select</option>
                        <option>Pettah</option>
                        <option>Kandy</option>
                        <option>Badulla</option>
                    </select>
                </div>


                <div className="form-group">


                    <Link to={"/index/"+this.state.endstation+"/" +this.state.startstation}  className="btn btn-primary" onClick={this.onSubmit}>Search your Train</Link>

                </div>

            </form>
                    <div className = "Create">
                    <index  startstation={this.state.startstation}/>
                    <index  endstation={this.state.startstation}/>

            </div>
        </div>






  )
  }

}
