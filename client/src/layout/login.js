import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'



const Login = () => {

  // essentially your state, with the this.setState. Use State returns 2 vals
  // set form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  }); 


  const {name, email, password, password2} = formData; // destructuring the values in the form

  // set the form data, but update the target val
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value}); // for tracking changes in the form

  // Function that will submit to database
  const onSubmit =  async e => {
    e.preventDefault();
    console.log("hello")
      // logging in the user, if exists, just get access to the data and prop drill through
      const newUser = {
        email,
        password
      }
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const body = JSON.stringify(newUser);
        console.log(body)
        // makes the post request
        const res =  await axios.post('http://localhost:3000/api/users', body, config); // make axios post requests
        console.log(res.data)
        // need to figure out redirect -- doesn't work for some reason
      } catch(err){
        console.error(err.response);
      }
  }

  

  
  // UI
  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} onChange={e => onChange(e)}
          />
        </div>
        {/* just authenticates */}
          <input type="submit" className="btn btn-primary" value="Authenticate" /> 
          {/* Takes user to the dashboard, passing the email as the props */}
        <Link to = {{
          pathname: "/",
          username: email
          }}>
          <input type="submit" className="btn btn-primary" value="Go To Dashboard" />
        </Link>
        
      </form>
      <p className="my-1">
        Don't have an account? <Link to="register">register</Link>
      </p>
    </Fragment>
  )
}

export default Login;