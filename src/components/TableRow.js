//view train details

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
       
    }
   
  render() {
    return (
        <tr>
            <td>
                {this.props.obj.trainno}
            </td>
          <td>
            {this.props.obj.trainname}
          </td>
          <td>
            {this.props.obj.startstation}
          </td>
          <td>
            {this.props.obj.endstation}
          </td>
            <td>
                {this.props.obj.starttime}
            </td>
            <td>
                {this.props.obj.endtime}
            </td>
            <td>
                {this.props.obj.traintype}
            </td>
            <td>
                {this.props.obj.frequency}
            </td>
            <td>
                {this.props.obj.from}
            </td>
            <td>
                {this.props.obj.qty}
            </td>
            <td>
                {this.props.obj.price}
            </td>
          <td>
            <Link to={"/paymentmethod/"+this.props.obj._id} className="btn btn-primary">Payment Method</Link>
          </td>

        </tr>


    );
  }
}

export default TableRow;