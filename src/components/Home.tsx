import React from "react";
import Searchbar from "./searchBar";
import { createStyles } from "@mantine/core";

const useStyle = createStyles(() => ({
  home: {
    display: "relative",
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
  },
  slogan: {
    color: "#fff",
    paddingTop: 90,
    marginBottom: 10,
    marginLeft: -45,
  }
}));

const Home = () => {
  const { classes } = useStyle();
  return (
    <div className={classes.home}>
      <div>
        <h2 className={classes.slogan}>Make your trips come true</h2>
      </div>
      <Searchbar></Searchbar>
    </div>
  );
};
export default Home;
