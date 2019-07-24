import React, { Component } from 'react';
import axios from 'axios';

export default class Updateuser extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
      lid:''
    }
  }

  componentDidMount() {

    axios.get('http://localhost:5000/user/lastlogin')
          .then(response => {
              this.setState({ 
                
               lid: response.data._id });
          })
          .catch(function (error) {
              console.log(error);
          })
      axios.get('http://localhost:5000/user/edit/'+this.state.id)
          .then(response => {
              this.setState({ 
                person_name: response.data.person_name, 
                business_name: response.data.business_name,
                business_gst_number: response.data.business_gst_number });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:5000/user/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/userindex');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h2 align="center">Login</h2>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
               
                <div className="form-group">
                    <input type="submit" 
                      value="Login" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}