import React from "react";

import { createStyles, Input, MantineProvider } from "@mantine/core";
import { BiSearchAlt2 } from "react-icons/bi";
import useInput from "../hooks/useInput";
import { TravelInfoProps } from "../types/TravelInfo";
import useFetch from "../hooks/useFetch";

// const URL = "http://localhost:3000/";
const useStyle = createStyles(() => ({
  searchBar: {
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "center",
    marginLeft: "26.7%",
    marginTop: "2%",
    width: "40.4%",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 5px hsl(0 0% 78%)",
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
    display: "flex",
    borderRadius: 20,
    width: "25%",
    ":hover": {
      background: "hsl(0 0% 94%)",
    },
  },
  label: {
    position: "absolute",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "left",
    zIndex: 5,
    marginLeft: 12.1,
    marginTop: 7,
  },
  iconBox: {
    position: "absolute",
    left: "70.6%",
    top: "29.7%",
    backgroundColor: "#30a1df80",
    borderRadius: 25,
    borderWidth: 1,
    width: "5%",
    height: "3%",
    ":hover": {
      backgroundColor: "#1c94d4a8",
    },
  },
  icon: {
    marginRight: "3%",
    verticalAlign: "middle",
  },
}));

const Searchbar = () => {
  const { classes } = useStyle();

  const { onChange, onSubmit } = useInput({
    location: "",
    startDate: "",
    endDate: "",
    numTravelers: 0,
  } as TravelInfoProps);
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
        <form onSubmit={onSubmit}>
          <div className={classes.searchBar}>
            <div className={classes.location}>
              <p className={classes.label}>Location</p>
              <Input
                placeholder="Where are you going?"
                type="text"
                name="location"
                onChange={onChange}
              ></Input>
            </div>
            <div className={classes.startDate}>
              <p className={classes.label}>Start Date</p>
              <Input
                placeholder="Starting Date"
                type="text"
                name="startDate"
                onChange={onChange}
              ></Input>
            </div>
            <div className={classes.endDate}>
              <p className={classes.label}>End Date</p>
              <Input
                placeholder="Ending Date"
                type="text"
                name="endDate"
                onChange={onChange}
              ></Input>
            </div>
            <div className={classes.people}>
              <p className={classes.label}>People</p>
              <Input
                placeholder="How many people?"
                type="number"
                name="numTravelers"
                onChange={onChange}
              ></Input>
              <button type="submit" className={classes.iconBox}>
                <BiSearchAlt2 className={classes.icon} />
                Search
              </button>
              {/* <span className={classes.iconBox}>
                <BiSearchAlt2 className={classes.icon} />
              </span> */}
            </div>
          </div>
        </form>
      </MantineProvider>
    </>
  );
};

export default Searchbar;
