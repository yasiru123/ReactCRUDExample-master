import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Profilelist extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:5000/user/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj0.uname}
                </td>
                <td>
                    {this.props.obj.uemail}
                </td>
                <td>
                    {this.props.obj.upasswrd}
                </td>
                <td>
                    {this.props.obj.upass}
                </td>
                <td>
                {this.props.obj.uaddrs}
            </td>

            <td>
            <Link to={"/updateuser/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
        
            </tr>
        );
    }
}

export default Profilelist;