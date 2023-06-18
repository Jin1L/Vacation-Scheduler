import React from "react";
import { createStyles, Input, MantineProvider } from "@mantine/core";

const useStyle = createStyles(() => ({
  searchBar: {
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "center",
    marginLeft: "28.7%",
    width: 680,
    backgroundColor: "#ffffff",
    boxShadow:"0 0 5px hsl(0 0% 78%)",
    borderRadius: 20,
    color: "#000",
  },
  location: {
    display: "relative",
    borderRadius: 20,
    width: "25%",
    ":hover": {
      background: "hsl(0 0% 94%)",
    },
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
  },
  startDate: {
    borderRadius: 20,
    width: "25%",
    ":hover": {
      background: "hsl(0 0% 94%)",
    },
  },
  endDate: {
    borderRadius: 20,
    width: "25%",
    ":hover": {
      background: "hsl(0 0% 94%)",
    },
  },
  people: {
    borderRadius: 20,
    width: "25%",
    ":hover": {
      background: "hsl(0 0% 94%)",
    },
  },
  label:{
    position: "absolute",
    fontSize: 11,
    fontWeight: "bold",
    textAlign:"left",
    zIndex: 5,
    marginLeft: 12.1,
    marginTop: 7,
  },
}));

const Searchbar = () => {
  const { classes } = useStyle();
  return (
    <>
      <MantineProvider
        theme={{
          components: {
            Input: {
              styles: () => ({
                input: {
                  borderRadius: 20,
                  backgroundColor: "none",
                  ":focus-within": {
                    outline: "none",
                  },
                  border: "none",
                  ":hover": {
                    background: "hsl(0 0% 94%)",
                  },
                  "::placeholder": {
                    fontSize: "0.65rem",
                  },
                  fontSize: 11,
                  height: 44,
                  paddingTop: 12,
                },
              }),
            },
          },
        }}
      >
        <div className={classes.searchBar}>
          <div className={classes.location}>
            <p className={classes.label}>Location</p>
            <Input placeholder="Where are you going?"></Input>
          </div>
          <div className={classes.startDate}>
            <p className={classes.label} >Start Date</p>
            <Input placeholder="Starting Date"></Input>
          </div>
          <div className={classes.endDate}>
            <p className={classes.label}>End Date</p>
            <Input placeholder="Ending Date"></Input>
          </div>
          <div className={classes.people}>
            <p className={classes.label}>People</p>
            <Input placeholder="How many people?"></Input>
          </div>
        </div>
      </MantineProvider>
    </>
  );
};

export default Searchbar;
