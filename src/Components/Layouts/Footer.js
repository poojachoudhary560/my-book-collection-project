import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default ({ genres }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {genres.map(group => (
        <Tab label={group} />
      ))}
    </Tabs>
  </Paper>
);
