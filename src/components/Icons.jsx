import React from "react";

const Icons = ({ name }) => {
  switch (name) {
    case "icon":
      return ICONS;
    default:
      return ICON;
  }
};

export default Icons;
