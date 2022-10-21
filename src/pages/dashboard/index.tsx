import {
  Box,
  Button,
  Container,
  Typography,
  Link as StyleLink,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function GeneralDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const signOut = useCallback(async () => {
    await logout();

    navigate("/singIn");
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography component="h1" variant="h2">
          General Dashboard
        </Typography>
        <Typography sx={{ mt: 3, mb: 2 }} component="h1" variant="h4">
          All users can see
        </Typography>

        <Typography sx={{ mt: 3, mb: 2 }} component="p" variant="body1">
          User is: {user?.name}
        </Typography>

        <StyleLink sx={{ mt: 1, mb: 1 }} component={Link} to="/">
          Home
        </StyleLink>

        <Button
          type="button"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => signOut()}
        >
          sign Out
        </Button>
      </Box>
    </Container>
  );
}

export function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography component="h1" variant="h2">
          Teste de deploy
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: 3,
          }}
        >
          <StyleLink sx={{ mt: 1, mb: 1 }} component={Link} to="/dashboard">
            Dashboard
          </StyleLink>

          <StyleLink sx={{ mt: 1, mb: 1 }} component={Link} to="/singIn">
            Entrar
          </StyleLink>
        </Box>
      </Box>
    </Container>
  );
}

export function SummaryDashboard() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography component="h1" variant="h2">
          Summary Dashboard
        </Typography>
        <br />
        <br />
        <Typography component="h1" variant="h4">
          Only doctor can see
        </Typography>
      </Box>
    </Container>
  );
}

export function MonitoringDashboard() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography component="h1" variant="h2">
          Monitoring Dashboard
        </Typography>
        <br />
        <br />
        <Typography component="h1" variant="h4">
          Only technician can see
        </Typography>
      </Box>
    </Container>
  );
}
