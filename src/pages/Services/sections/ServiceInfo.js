import React from "react";
import MKBox from "../../../components/MK/MKBox";
import MKTypography from "../../../components/MK/MKTypography";


const ServiceInfo = ({name,description}) => {
  return (
    <>
    <MKTypography variant="h5" color="black">{name}</MKTypography>
      <MKTypography variant="body2" color="text">
        {description}
      </MKTypography>
    </>
    // <MKBox
    //   pt={{ xs: 1, lg: 2.5 }}
    //   pb={2.5}
    //   pr={4}
    //   pl={{ xs: 4, lg: 1 }}
    //   lineHeight={1}
    // >
      
    // </MKBox>
  );
};

export default ServiceInfo;
