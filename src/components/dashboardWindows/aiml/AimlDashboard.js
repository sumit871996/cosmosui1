import { React, useContext, useState } from "react";
import { Box, Button, Grid, ResponsiveContext } from "grommet";
import CardDashboard from "../../cards/CardDashboard";
import aimlCardElements from "./aimlCardElements";
import HorizontalTimeLine from "./HorizontalTimeLine";
import LeftSideBar from "./LeftSideBar";
import ActivePageContext from "./ActivePageContext";

const AimlDashboard = (props) => {
  const [selected, setSelected] = useState("0");
  const size = useContext(ResponsiveContext);
  return (
    <ActivePageContext.Provider
      value={{
        selected: selected,
        setSelected: setSelected,
      }}
    >
      <Box fill="horizontal" direction="row">
        <Box>
          <LeftSideBar />
        </Box>
        <Box fill="horizontal">
          <Box pad={{ bottom: "large" }}>
            <HorizontalTimeLine></HorizontalTimeLine>
          </Box>
          <Box pad={{ left: "small" }}>{props.children}</Box>
        </Box>
      </Box>
    </ActivePageContext.Provider>
  );
};

export default AimlDashboard;
