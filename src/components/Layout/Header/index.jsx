import { useState } from "react";
import AppBar from "@mui/material/AppBar";

import { NavLink } from "react-router-dom";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material/";

import { Menu } from "@mui/icons-material";
import { useStyles } from "./styles";

const drawerWidth = 240;
const navItems = [
  { txt: "Home", to: "/" },
  { txt: "About", to: "/about" },
  { txt: "Natiq", to: "/natiq" },
];

const DrawerAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Natiq
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <ListItem key={item} disablePadding>
            <NavLink
              className={classes.drawerLink}
              key={`${item.txt}_${idx}_drawer`}
              to={item.to}
              end
            >
              {item.txt}{" "}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Natiq
          </Typography>
          <Box
            className={classes.linksWrapper}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navItems.map((item, idx) => (
              <NavLink key={`${item.txt}_${idx}_header`} to={item.to} end>
                {item.txt}{" "}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default DrawerAppBar;
