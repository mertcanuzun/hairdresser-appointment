import React from "react";

import { Box } from "@mui/material";
import anatomicalImage from "../../../assets/images/anatomical-haircut.jpg";

const AnatomicalHairImage = () => {
  return (
    <Box
      component="img"
      sx={{
        minHeight: "50vh",
        width: "%100",
      }}
      alt="The house from the of-fer."
      src={anatomicalImage}
    />
  );
};

export default AnatomicalHairImage;
