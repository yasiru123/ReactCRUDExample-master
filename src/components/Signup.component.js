import React,{Component} from 'react';
import axios from 'axios';

 class Signup extends Component{

     constructor(props) {
         super(props);
       this.onChangeFirstname = this.onChangeFirstname.bind(this);
       this.onChangeLastname = this.onChangeLastname.bind(this);
       this.onChangeEmail = this.onChangeEmail.bind(this);
       this.onChangePass = this.onChangePass.bind(this);
       this.onChangeType = this.onChangeType.bind(this);
       this.onSubmit = this.onSubmit.bind(this);

       this.state = {
           ufirstname: '',
           ulastname:'',
           uemail: '',
           upassword: '',
           utype: ''
       }
     }

     onChangeFirstname(e){
         this.setState({
             ufirstname: e.target.value
         });
     }

     onChangeLastname(e){
         this.setState({
            ulastname: e.target.value
         });
     }

     onChangeEmail(e){
         this.setState({
             uemail: e.target.value
         });
     }

     onChangePass(e){
         this.setState({
             upassword: e.target.value
         });
     }

     onChangeType(e){
         this.setState({
             utype: e.target.value
         })
     }
     onSubmit(e){
         e.preventDefault();
         const obj = {
           ufirstname: this.state.ufirstname,
           ulastname:this.state.ulastname,
           uemail: this.state.uemail,
           upassword: this.state.upassword,
           utype: this.state.utype

         };


           //Send Email
           axios.post('http://localhost:5000/user/senduser/', obj)
           .then(res => {


           })
           .catch(function (error) {

               console.log(error)
           })

         axios.post('http://localhost:5000/user/adduser',obj)
             .then(res => console.log(res.data));
this.setState({
            ufirstname:'',
            ulastname:'',
            uemail: '',
            upassword: '',
            utype: ''
         })
     }

     render() {
         return(
             <form onSubmit={this.onSubmit}>
                 <div className="form-group">
                 <label htmlFor="name">First Name:</label><input type="text"  className="form-control" value={this.state.ufirstname} onChange={this.onChangeFirstname}/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="name">Last Name:</label><input type="text"  className="form-control" value={this.state.ulastname} onChange={this.onChangeLastname}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="email">Email:</label><input type="email"   className="form-control" value={this.state.uemail} onChange={this.onChangeEmail}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="passwrd">Password:</label><input type="text"  className="form-control" value={this.state.upassword} onChange={this.onChangePass}/>
                 </div>
                 <div className="form-group">
                     <label htmlFor="addrs">Type:</label><input type="Address"   className="form-control" value={this.state.utype} onChange={this.onChangeType}/>
                 </div>
                 <div>
                     <button className="btn btn-primary" type="submit" value="Register Business">Register</button>
                 </div>
             </form>
         )
     }
 }

export default Signup;