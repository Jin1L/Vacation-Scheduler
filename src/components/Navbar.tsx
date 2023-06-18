import React from "react";
import { createStyles } from "@mantine/core";

const useStyle = createStyles(() => ({
  navbar: {
    display: "flex",
    color: "#fff",
  },
  title: {
    marginLeft: 343,
    marginTop: 10,
  },
  links: {
    display: "flex",
    marginLeft: 350,
    marginTop: 20,
  },
  tabs: {
    marginRight: 15,
    textDecoration: "none",
  },
}));

const Navbar = () => {
  const { classes } = useStyle();

  return (
    <div className={classes.navbar}>
      <div>
        <h1 className={classes.title}>Vacation Scheduler</h1>
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
