import React from "react";
import Typography from "@mui/material/Typography";

export const TaskText = ({ children, className }) => {
  return (
    <Typography className={className}>
      {Object.values(children).join(" ")}
    </Typography>
  );
};
