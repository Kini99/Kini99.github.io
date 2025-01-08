import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../Styles/Navbar.css";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Home", "About", "Skills", "Projects", "Contact", "Resume"];

const Hamburger = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <button className="nav-btn">
          <Link to={"/"} className="nav-link home">
            Home
          </Link>
        </button>
        <button className="nav-btn">
          <Link to={"/about"} className="nav-link about">
            About
          </Link>
        </button>
        <button className="nav-btn">
          <Link to={"/skills"} className="nav-link skills">
            Skills
          </Link>
        </button>
        <button className="nav-btn">
          <Link to={"/projects"} className="nav-link projects">
            Projects
          </Link>
        </button>
        <button className="nav-btn">
          <Link to={"/contact"} className="nav-link contact">
            Contact
          </Link>
        </button>
        <button className="nav-btn">
          <a
            href="https://drive.google.com/file/d/12gX-ZogqQlPiFpqgnK5mRVtjErLz0tIp/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="nav-link resume"
            id="resume-link-1"
          >
            Resume
          </a>
        </button>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default Hamburger;
