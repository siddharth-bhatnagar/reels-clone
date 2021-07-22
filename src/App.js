import logo from './logo.svg';
import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ButtonGroup, Checkbox, FormControlLabel, ThemeProvider, TextField, makeStyles } from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';
import { Typography, Container, Paper, Grid, AppBar, Toolbar, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #fe6888, #ff8e53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px"
  }
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    }
  }
  // palette: {
  //   primary: {
  //     main: orange[500],
  //   },
  //   secondary: {
  //     main: green[400],
  //   }
  // }
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root} >Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <FormControlLabel
        control={<Checkbox
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />}
        label="Testing Checkbox"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography
              variant="h2"
              component="div"
            >
              Welcome to MUI
            </Typography>
            <Typography
              variant="subtitle1"
            >
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />

            <Grid container spacing={4} justify="center">
              <Grid item>
                <Paper style={{
                  height: 75, width: 50
                }} />
              </Grid>
              <Grid item >
                <Paper style={{
                  height: 75, width: 50
                }} />
              </Grid>
              <Grid item>
                <Paper style={{
                  height: 75, width: 50
                }} />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
            <CheckboxExample />
            <ButtonGroup variant="contained"
              color="primary"
              size="large">
              <Button
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider >
  );
}

export default App;
