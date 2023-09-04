import React, { useContext } from "react";
import { AM } from "country-flag-icons/react/3x2";
import { GB } from "country-flag-icons/react/3x2";
import { SwitchContext } from "../../App";
import Box from "@mui/material/Box";

export const Flag = () => {
  const { flagState, handleFlagClick } = useContext(SwitchContext);
  console.log(flagState);
  return (
    <Box
      onClick={handleFlagClick}
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      {flagState ? (
        <AM
          style={{ height: "30px", width: "30px", cursor: "pointer" }}
          title="Republic of Armenia"
          className="AM"
        />
      ) : (
        <GB
          style={{ height: "30px", width: "30px", cursor: "pointer" }}
          title="The United Kingdom of Great Britain"
          className="GB"
        />
      )}
    </Box>
  );
};
