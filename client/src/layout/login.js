import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'


// Material UI Imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Login = () => {

  const classes = useStyles(); // using material UI Styles 
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
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} onSubmit = {e => onSubmit(e)}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={e => onChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => onChange(e)}
            />
          </Grid>
         
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Authenticate
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          <Link to = '/'>
            Go To Dashboard
          </Link>
          
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to = 'login'variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>


    // <Fragment>
    //   <h1 className="large text-primary">Sign Up</h1>
    //   <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
    //   <form className="form" onSubmit = {e => onSubmit(e)}>
    //     <div className="form-group">
    //       <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)}/>
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         minLength="6"
    //         value={password} onChange={e => onChange(e)}
    //       />
    //     </div>
    //     {/* just authenticates */}
    //       <input type="submit" className="btn btn-primary" value="Authenticate" /> 
    //       {/* Takes user to the dashboard, passing the email as the props */}
    //     <Link to = {{
    //       pathname: "/",
    //       username: email
    //       }}>
    //       <input type="submit" className="btn btn-primary" value="Go To Dashboard" />
    //     </Link>
        
    //   </form>
    //   <p className="my-1">
    //     Don't have an account? <Link to="register">register</Link>
    //   </p>
    // </Fragment>
  )
}

export default Login;