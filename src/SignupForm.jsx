import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    width: "500px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  buttonal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  topic: {
    padding: "5px",
    marginTop: "10px",
    color: "black",
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    event.preventDefault();
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h4" className={classes.topic}>
        Create An Account
      </Typography>
      <TextField
        fullWidth
        className={classes.margin}
        id="outlined-fullname"
        label="Fullname"
        value={values.fullname}
        onChange={handleChange("fullname")}
        variant="outlined"
      />
      <TextField
        fullWidth
        className={classes.margin}
        id="outlined-email"
        label="Email"
        value={values.email}
        onChange={handleChange("email")}
        variant="outlined"
      />
      <TextField
        fullWidth
        className={classes.margin}
        id="outlined-password"
        label="Password"
        name="password"
        value={values.password}
        onChange={handleChange("password")}
        variant="outlined"
        type="password"
      />
      <div className={classes.buttonal}>
        <Button
          align="right"
          className={classes.margin}
          variant="contained"
          color="secondary"
          disabled={!values.fullname && values.email && values.password}
        >
          SignUp
        </Button>
      </div>
    </form>
  );
}
