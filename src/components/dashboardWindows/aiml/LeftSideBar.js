import { Box, ResponsiveContext, Button, Text, Image } from "grommet";
import { useContext, useState, React } from "react";
// import { SearchBox } from "./SearchBox";
import { useNavigate } from "react-router-dom";
// import LeftSideBarElement from "./LeftSideBarElement";
import ActivePageContext from "./ActivePageContext";
import {
  Previous,
  Next,
  Target,
  Layer,
  FormNext,
  StatusGoodSmall,
} from "grommet-icons";
import icon from "../../../assets/icons/down arrow icon.svg";

const LeftSideBar = (props) => {
  const navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  const searchSuggestions = props.sidebaroptions;
  const ctx = useContext(ActivePageContext);

  const navigateFunction = (element) => {
    // ctx.setSelected(true);
    navigate(`/AI/ML/${element}`);
  };

  return (
    <Box
      align="start"
      overflow="scroll"
      round="none"
      border="right"
      height="100%"
      width={!["xsmall", "small", "medium"].includes(size) ? "17vw" : "150px"}
    >
      <Box
        align="start"
        width="100%"
        pad={{ horizontal: "small", vertical: "xsmall" }}
      >
        <Box>
          <Text color="black" size="large">
            AI/ML
          </Text>
          <Text margin={{ vertical: "xsmall" }} size="xsmall">
            start process from below checks
          </Text>
        </Box>
      </Box>

      <Box
        fill="horizontal"
        border="top"
        style={{
          borderBottom: ctx.selected == "1" ? "2px solid #17EBA0" : "none",
          cursor: "pointer",
        }}
        direction="hrizontal"
      >
        <Button
          onClick={() => {
            navigateFunction("data exploration");
            ctx.setSelected("1");
          }}
          fill="horizontal"
          style={{
            fontWeight: "bold",
            borderRadius: "0px",
            fontSize: "medium",
            color: "black",
          }}
          label="Data exploration"
          icon={<StatusGoodSmall color="status-ok" size="small" />}
        ></Button>
        <FormNext
          size="xlarge"
          onClick={() => {
            navigateFunction("data exploration");
          }}
        ></FormNext>
      </Box>

      <Box
        fill="horizontal"
        border="top"
        justify="center"
        style={{
          borderBottom: ctx.selected == "2" ? "2px solid #17EBA0" : "none",
          cursor: "pointer",
        }}
        direction="hrizontal"
      >
        <Button
          onClick={() => {
            navigateFunction("identify the data type");
            ctx.setSelected("2");
          }}
          fill="horizontal"
          align="start"
          style={{
            fontWeight: "bold",
            borderRadius: "0px",
            fontSize: "medium",
            color: "black",
          }}
          label="Identify the data type"
          // icon={<StatusGoodSmall color="status-ok" size="small" />}
          // disabled
        ></Button>
        <FormNext
          size="xlarge"
          onClick={() => {
            navigateFunction("identify the data type");
            ctx.setSelected("2");
          }}
        ></FormNext>
      </Box>
      <Box
        fill="horizontal"
        border="top"
        justify="center"
        style={{
          borderBottom: ctx.selected == "3" ? "2px solid #17EBA0" : "none",
          cursor: "pointer",
        }}
        direction="hrizontal"
      >
        <Button
          onClick={() => {
            navigateFunction("recommend visualization");
            ctx.setSelected("3");
          }}
          fill="horizontal"
          align="start"
          style={{
            fontWeight: "bold",
            borderRadius: "0px",
            fontSize: "medium",
            color: "black",
          }}
          label="Recommend visualization"
          // icon={<StatusGoodSmall color="status-ok" size="small" />}
          // disabled
        ></Button>
        <FormNext
          size="xlarge"
          onClick={() => {
            navigateFunction("recommend visualization");
            ctx.setSelected("3");
          }}
        ></FormNext>
      </Box>
      <Box border="top"> </Box>
    </Box>
  );
};

export default LeftSideBar;
