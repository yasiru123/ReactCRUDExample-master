import React, { Component } from 'react';
import axios from 'axios';
import Profilelist from './Profilelist';


export default class Userindex extends Component {

    constructor(props) {
        super(props);
        this.state =
         {
             business: []
            };
    }
    componentDidMount(){
        axios.get('http://localhost:5000/user')
            .then(response => {
                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.business.map(function(object, i){
            return <Profilelist obj0={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Customer List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                        <th>Address</th>
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