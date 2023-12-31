import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../api/users";
import { AuthContext } from "../components/auth-context";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink, useNavigate } from "react-router-dom";
import Joi from "joi";

const accountSchema = Joi.object().keys({
  email: Joi.string()
    .min(4)
    .max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fi"] } })
    .required(),
  password: Joi.string().min(8).max(60).required(),
});

const SignUpPage = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorText, setErrorText] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const signUpUserMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: (data) => {
      auth.login(data.id, data.token, data.email);
      navigate("/");
    },
    onError: (error) => {
      if (error.message == 422) setEmailError("Email already exists!");
      else setErrorText("Something went wrong, try again later!");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setErrorText("");
    const data = new FormData(event.currentTarget);
    // Validates credentialst
    const value = accountSchema.validate({
      email: data.get("email"),
      password: data.get("password"),
    });

    if (value.error) {
      if (value.error.message.includes("email"))
        setEmailError("Not valid email!");
      else if (value.error.message.includes("password"))
        setPasswordError("Not valid password!");
      return;
    }

    signUpUserMutation.mutate({
      username: data.get("firstName"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography variant="subtitle1" color="error">
          {errorText}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                error={emailError !== ""}
                helperText={emailError}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                error={passwordError !== ""}
                helperText={passwordError}
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="#" variant="body2" component={NavLink} to={"/login"}>
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
