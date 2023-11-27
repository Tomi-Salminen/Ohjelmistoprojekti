import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/users";
import { AuthContext } from "../components/auth-context";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { NavLink, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      auth.login(data.id, data.token, data.email);
    },
    onError: (error) => {
      console.log(error);
      setErrorText("Check your credentials!");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorText("");
    const data = new FormData(event.currentTarget);
    loginUserMutation.mutate({
      email: data.get("email"),
      password: data.get("password"),
    });
    
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
          Log in
        </Typography>
        <Typography variant="subtitle1" color="error">
          {errorText}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="#" variant="body2" component={NavLink} to={"/signup"}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
