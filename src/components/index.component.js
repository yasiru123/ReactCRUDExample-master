//view train details

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import create from './create.component';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {trains: []};
    }
    componentDidMount(){
//get train by start and end stations
        axios.get('http://localhost:5000/train/'+this.props.match.params.startstation+'/'+this.props.match.params.endstation)
            .then(response =>
            {
                console.log(response)

                this.setState({ trains: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
      return this.state.trains.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Available Train List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Train No</th>
                <th>Train Name</th>
                <th>Start Station</th>
                  <th>End Station</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Type</th>
                  <th>Frequency</th>
                  <th>from</th>
                  <th>Qty</th>
                  <th>Ticket Price</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }

