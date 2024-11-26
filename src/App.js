import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button, Box, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Auth } from './auth'; // Import the Auth component

function App() {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Finanzas App
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
          variant="temporary"
          open={open}
          onClose={toggleDrawer}
        >
          <List>
            <ListItem button component={Link} to="/lessons">
              <ListItemText primary="Lecciones" />
            </ListItem>
            <ListItem button component={Link} to="/quiz">
              <ListItemText primary="Quiz" />
            </ListItem>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="Perfil" />
            </ListItem>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            marginTop: 8,
          }}
        >
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '80vh'
            }}
          >
            <Switch>
              <Route path="/lessons">
                {isAuthenticated ? <Lessons /> : <Auth />}
              </Route>
              <Route path="/quiz">
                {isAuthenticated ? <Quiz /> : <Auth />}
              </Route>
              <Route path="/profile">
                {isAuthenticated ? <Profile /> : <Auth />}
              </Route>
              <Route path="/">
                <Auth />
              </Route>
            </Switch>
          </Container>
        </Box>
      </Box>
    </Router>
  );
}

function Lessons() {
  return <Typography variant="h6">Página de Lecciones</Typography>;
}

function Quiz() {
  return <Typography variant="h6">Página del Quiz</Typography>;
}

function Profile() {
  return <Typography variant="h6">Página de Perfil</Typography>;
}

export default App;