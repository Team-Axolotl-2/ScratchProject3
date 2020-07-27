// Create the card for each individual company// Create the list of companies
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CompanyCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Stock Info
        </Typography>
        <Typography variant="h5" component="h2">
          {props.companyName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Sector: Technology
        </Typography>
        <Typography variant="body2" component="p">
          Google is a S and P 500 Company
          {/* <br />
          More stock info */}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={{
            pathname: "/companyProfile",
            name : props.companyName,
          }}
        >
           <Button size="small">Learn More</Button>
           </Link>

        {/* <Link to="companyProfile">
          <Button size="small">Learn More</Button>
        </Link> */}
      </CardActions>
    </Card>
  );
}

{/* <Link
  to={{
    pathname: "/",
    email: email,
  }}
>
  Go To Dashboard
</Link>; */}
