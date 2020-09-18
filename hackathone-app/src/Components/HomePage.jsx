import React from "react";
import axios from "axios"
import styles from './HomePage.module.css'
import Dashboard from './Dashboard'
import AllDoc from "./AllDoc";


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isAuth: false
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e)=>{
    e.preventDefault();
    const {email,password} = this.state
    console.log(email,password)
    let url = 'https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/v2/auth/initiate-auth?'
    const options = {
        headers: {'Content-Type': 'application/json',
        GrantType: 'password'}
      };
    axios.post(url,
        
        {
          user_email: email,
          password: password,
          org_domain: "fti055i6"
        },
        options
      )
    .then(res=>{
        console.log(res.data.User)
        const {access_token,refresh_token} = res.data.User
        this.setState({
            Acc_token: access_token,
            Ref_token: refresh_token,
            isAuth: true
        
        })
        if (res.status===200){
           //  window.location.href = "/Dashbord.js"
           
        }
    })
    .catch(err=>{
        console.log(err)
        alert('wrong credentials')
    })
}


  render() {
    const { email,Acc_token,Ref_token, password } = this.state;
    return (
     <>
     <span className={styles.logo}>RevvDocs</span>
     {this.state.isAuth == false? (<div className={styles.loginbox}>
        Email
        <input type='email' name="email" value={email} onChange={this.handleChange} /> 
        <br />
        Password
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        <br />
        <button onClick={this.handleSubmit}>Login</button>
      </div>):<div >
        <AllDoc Acc_token={Acc_token} Ref_token={Ref_token} />
    </div>}
     

    
     </>
    );
  }
}
