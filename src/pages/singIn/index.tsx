import { Copyright } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link as StyleLink,
  TextField,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { Link } from "react-router-dom";

import LogoFirebase from "../../assets/logo.svg";

export function SingIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      remember: data.get("remember"),
    });
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
        <Avatar sx={{ m: 1, bgcolor: "transparent" }}>
          <img src={LogoFirebase} width="75%" height="75%" />
        </Avatar>
        <Typography component="h1" variant="h5">
          <strong>Demo</strong> Authentication Firebase
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
          <FormControlLabel
            control={<Checkbox value={true} name="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <StyleLink component={Link} to="#">
                Forgot password?
              </StyleLink>
            </Grid>
            <Grid item>
              <StyleLink component={Link} to="#">
                {"Don't have an account? Sign Up"}
              </StyleLink>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        component="footer"
        sx={{
          display: "flex",
          mt: 4,
          gap: 2,
          p: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Copyright sx={{ m: 0 }} />
        XavierJece 2022
      </Box>
    </Container>
  );
}
