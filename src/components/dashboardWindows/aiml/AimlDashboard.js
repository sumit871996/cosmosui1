import { React, useContext } from "react";
import { Box, Button, Grid, ResponsiveContext } from "grommet";
import CardDashboard from "../../cards/CardDashboard";
import aimlCardElements from "./aimlCardElements";
import HorizontalTimeLine from "./HorizontalTimeLine";
import LeftSideBar from "./LeftSideBar";
const AimlDashboard = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box fill="horizontal" direction="row">
      <Box>
        <LeftSideBar />
      </Box>
      <Box fill="horizontal">
        <HorizontalTimeLine></HorizontalTimeLine>
      </Box>
    </Box>
  );
};

export default AimlDashboard;
