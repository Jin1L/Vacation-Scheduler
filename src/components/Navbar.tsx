import React from "react";
import { createStyles } from "@mantine/core";

const useStyle = createStyles(() => ({
  navbar: {
    display: "flex",
    color: "#fff",
    paddingTop: "2.6vh",
    marginLeft: "40.5vh",
  },
  links: {
    display: "flex",
    right: 10,
    marginLeft: "50vh"
  },
  tabs: {
    textDecoration: "none",
    marginTop: "4%",
    marginRight: 12,
  },
}));

const Navbar = () => {
  const { classes } = useStyle();

  return (
    <div className={classes.navbar}>
      <div>
        <h1>Vacation Scheduler</h1>
      </div>
      <div className={classes.links}>
        <h3 className={classes.tabs}>Home</h3>
        <h3 className={classes.tabs}>New Trip</h3>
        <h3 className={classes.tabs}>My Trips</h3>
        <h3 className={classes.tabs}>About</h3>
      </div>
    </div>
  );
};

export default Navbar;
