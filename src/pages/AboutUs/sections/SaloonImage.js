import React from 'react'
import { Box } from '@mui/material';
import saloonImage from "../../../assets/images/about-us.png";


const SaloonImage = () => {
  return (
    // Material Kit 2 PRO React Examples
    <Box
    component="img"
    sx={{
      minHeight: "40vh",
      width: "%100",
    }}
    alt="The house from the offer."
    src= {saloonImage}
  />
  )
}

export default SaloonImage