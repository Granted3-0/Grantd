import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import WalletConnect from "../WalletConnect";
import UnlockButton from "../UnlockButton";
// import polygonEco from '../../../public/images/polygonEco.jpg'
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link as RouterLink } from "react-router-dom";
import Form from "../../components/form/Form";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "white" ? "#fff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {/* {"Copyright © "} */}
      <Link color="inherit" href="https://twitter.com/Web3Granted">
        Twitter
      </Link>{" "}
    </Typography>
  );
}

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% )`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              fontFamily: "Comfortaa",
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {/* <ChevronLeftIcon /> */}
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {/* {mainListItems} */}
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
          <div
            style={{
              marginLeft: "2rem",
              marginTop: "3rem",
              fontFamily: "Comfortaa",
            }}
          >
            <div>
              Search Description
              <br></br>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                style={{ marginTop: "1rem" }}
              >
                {/* <InputLabel htmlFor="outlined-adornment-amount">Required</InputLabel> */}
                <OutlinedInput
                  style={{ paddingTop: "0.5rem", width: "20rem" }}
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  // label="Required"
                />
              </FormControl>
            </div>

            <div style={{ paddingTop: "2rem", fontFamily: "Comfortaa" }}>
              Grant Range
              <br></br>
              <div>
                <FormControl
                  fullWidth
                  sx={{ m: 1 }}
                  style={{ marginTop: "1rem" }}
                >
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                    style={{ fontFamily: "Comfortaa" }}
                  >
                    Maximum
                  </InputLabel>
                  <OutlinedInput
                    style={{ paddingTop: "0.5rem", width: "20rem" }}
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Required"
                  />
                </FormControl>

                <br></br>

                <FormControl
                  fullWidth
                  sx={{ m: 1 }}
                  style={{ marginTop: "1rem", fontFamily: "Comfortaa" }}
                >
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                    style={{ fontFamily: "Comfortaa" }}
                  >
                    Minimum
                  </InputLabel>
                  <OutlinedInput
                    style={{ paddingTop: "0.5rem", width: "20rem" }}
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Minimum"
                  />
                </FormControl>
              </div>
            </div>
            <div style={{ paddingTop: "2rem" }}>
              Tag
              <br></br>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                style={{ marginTop: "1rem" }}
              >
                <OutlinedInput
                  style={{ paddingTop: "0.5rem", width: "20rem" }}
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  // label="Required"
                />
              </FormControl>
            </div>

            <div style={{ paddingTop: "2rem", fontFamily: "Comfortaa" }}>
              Community Size
              <br></br>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                style={{ marginTop: "1rem" }}
              >
                <OutlinedInput
                  style={{ paddingTop: "0.5rem", width: "20rem" }}
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  // label="Required"
                />
              </FormControl>
            </div>

            <div style={{ paddingTop: "2rem" }}>
              Rating
              <br></br>
              <FormControl
                fullWidth
                sx={{ m: 1 }}
                style={{ marginTop: "1rem" }}
              >
                <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Rating
                    name="half-rating-read"
                    defaultValue={4}
                    precision={0.5}
                    readOnly
                  />
                  <Rating name="half-rating" defaultValue={3} precision={0.5} />
                  <Rating
                    name="half-rating-read"
                    defaultValue={2}
                    precision={0.5}
                    readOnly
                  />
                  <Rating
                    name="half-rating-read"
                    defaultValue={1}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </FormControl>
            </div>
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            fontFamily: "Comfortaa",
            marginTop: "50px",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ mt: 4, mb: 3 }}
            style={{ paddingTop: "2rem" }}
          >
            {/* Chart */}
            <Grid container spacing={2}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 140,
                }}
                //   spacing={9}

                style={{
                  paddingRight: "7rem",
                  marginRight: "0.5rem",
                  marginBottom: "2rem",
                  marginLeft: "1rem",
                }}
              >
                <h3> Total Grants Available </h3>
                8367
                {/* <Deposits /> */}
              </Paper>

              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 140,
                }}
                style={{
                  paddingRight: "7rem",
                  marginRight: "0.5rem",
                  marginBottom: "2rem",
                  marginLeft: "1rem",
                }}
              >
                {/* <Deposits /> */}
                <h3> Total Grants Applied </h3>437
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 140,
                }}
                style={{
                  paddingRight: "7rem",
                  marginRight: "0.5rem",
                  marginBottom: "2rem",
                  marginLeft: "1rem",
                }}
              >
                <h3> Grants in Progress </h3>96{/* <Deposits /> */}
              </Paper>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={14}>
                <RouterLink class="grant-link" to="/form" element={<Form />}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                    style={{
                      paddingRight: "15rem",
                      marginRight: "1rem",
                      marginBottom: "2rem",
                      marginLeft: "0rem",
                    }}
                  >
                    <h2>Polygon Ecosystem Fund </h2>
                    <p style={{ marginTop: "-1rem" }}>
                      An investment fund dedicated to growing and supporting
                      blockchain ecosystem building applications on Ethereum...
                    </p>

                    <Grid container spacing={2} style={{ marginTop: "-1rem" }}>
                      <Grid item xs={3}>
                        <div>
                          <h4>Type</h4>
                        </div>
                      </Grid>
                      <Grid item xs={3}>
                        <div>
                          <h4>Monetization</h4>
                        </div>
                      </Grid>
                      <Grid item xs={3}>
                        <div>
                          <h4>Community</h4>
                        </div>
                      </Grid>
                    </Grid>
                  </Paper>
                </RouterLink>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                    // description: 'sdfsdfsf'
                  }}
                  style={{
                    paddingRight: "15rem",
                    marginRight: "1rem",
                    marginBottom: "2rem",
                    marginLeft: "0rem",
                  }}
                >
                  <h2> Polygon DAO </h2>
                  <p style={{ marginTop: "-1rem" }}>
                    Polygon DAO is the meeting place for present and future
                    Polygon connected communities, where they can learn,
                    collaborate, work, build...
                  </p>

                  <Grid container spacing={2} style={{ marginTop: "-1rem" }}>
                    <Grid item xs={3}>
                      <div>
                        <h4>Type</h4>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div>
                        <h4>Monetization</h4>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div>
                        <h4>Community</h4>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                    // description: 'sdfsdfsf'
                  }}
                  style={{
                    paddingRight: "15rem",
                    marginRight: "1rem",
                    marginBottom: "2rem",
                    marginLeft: "0rem",
                  }}
                >
                  <h2> Polygon x Outlier Ventures </h2>
                  <p style={{ marginTop: "-1rem" }}>
                    An accelerator that aids fundraising, community growth,
                    token design & implementation, business model innovation and
                    governance, and gives access...
                  </p>

                  <Grid container spacing={2} style={{ marginTop: "-1rem" }}>
                    <Grid item xs={3}>
                      <div>
                        <h4>Type</h4>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div>
                        <h4>Monetization</h4>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div>
                        <h4>Community</h4>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
                {/* <Chart /> */}
              </Grid>

              {/* Recent Deposits */}

              {/* Recent Orders */}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
