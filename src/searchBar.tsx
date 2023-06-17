import React from "react";
import { createStyles, Box, Input } from "@mantine/core";

const useStyle = createStyles(() => ({
  searchBar: {
    display: "flex",
  },
}));

const Searchbar = () => {
  const { classes } = useStyle();
  return (
    <Box>
      <div className={classes.searchBar}>
        <Input></Input>
      </div>
    </Box>
  );
};

export default Searchbar;
