import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'



const Register = () => {

  // essentially your state, with the this.setState
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  }); 


  const {name, email, password, password2} = formData; // destructuring the values in the form

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value}); // for tracking changes in the form


  const onSubmit =  async e => {
    e.preventDefault();
    if(password !== password2) {
      console.log('Passwords do not match');
    } else{
      const newUser = {
        name,
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
        const res =  await axios.post('http://localhost:3000/api/users', body, config); // make axios post requests
        console.log(res.data)
        // need to figure out redirect
        return <Redirect to = '/'/>
      } catch(err){
        console.error(err.response);
      }
    }
  }

  

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2} onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="login">Sign In</Link>
      </p>
    </Fragment>
  )
}

export default Register;