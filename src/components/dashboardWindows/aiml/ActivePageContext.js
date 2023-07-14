import { React, createContext } from "react";

const ActivePageContext = createContext({
  selected: String,
  setSelected: () => {},
});

export default ActivePageContext;
