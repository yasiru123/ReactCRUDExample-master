import React, {Component} from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";

import Signup from "./Signup.component";




const browserHistory = createBrowserHistory();

export default class Login extends Component {


    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: '',
            password: '',
            login: false,
            rpasswrod:'',
            users: []
        };
    }

    
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })  
      }

      onChangePassword(e) {
        this.setState({
            password: e.target.value
        })  
      }

     validateuser(){

        axios.get('http://localhost:5000/user/login'+this.state.email)
        .then(response =>
        {
            console.log(response)

            this.setState({
                 business: response.data ,
                 rpasswrod:response.data.upassword
                
                
                }
                 
                 );
        })
        .catch(function (error) {
            console.log(error);
        })
       
        
        if (this.state.username === this.state.rpasswrod)
            browserHistory.push('/create');
    }
    render() {

        
        return (< div>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="10">
                            <MDBCard style={{  marginLeft: "20rem" }}>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                        <h3 className="my-3">
                                            <MDBIcon icon="lock" /> Login:
                                        </h3>
                                    </MDBCardHeader>
                                    <form>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Type your email or Username"
                                                icon="envelope"
                                                group
                                                value={this.state.username} onChange={this.onChangeUsername} required
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Type your password"
                                                icon="lock"
                                                value={this.state.password} onChange={this.onChangePassword}  required
                                                group
                                                type="password"
                                                validate
                                            />
                                        </div>

                                        <div className="text-center mt-4">
                                            <MDBBtn
                                                color="light-blue"
                                                className="mb-3"
                                                type="submit"
                                                
                                        >
                                                Login
                                            </MDBBtn>
                                        </div>
                                    </form>
                                    <MDBModalFooter>
                                        <div className="font-weight-light">
                                            <p>Not a member?<a href="/Signup" ><br/>Sign Up</a></p>
                                        </div>
                                    </MDBModalFooter>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br/><br/><br/><br/><br/><br/>



            </div>

        )


    }

    updateUsername(username) {
        this.setState({
            username: username.target.value
        });
    }

    updatePassword(password) {
        this.setState({
            password: password.target.value
        });
    }
}