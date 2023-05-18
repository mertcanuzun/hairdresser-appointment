import React from "react";
import MKBox from "../../../components/MK/MKBox";
import { Container, Grid, Stack } from "@mui/material";
import MKTypography from "../../../components/MK/MKTypography";
import servicesMen from "./data/servicesMen";
import ServiceInfo from "./ServiceInfo";

const InformationMen = () => {
  return (
    <>
      <MKBox mt={4}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack display="flex" alignItems="flex-end">
                <MKTypography variant="h2" color="black">
                  ERKEK
                </MKTypography>
                <MKTypography variant="h2" color="black">
                  BÖLÜMÜ
                </MKTypography>
                <MKTypography variant="h2" color="black">
                  HİZMETLERİMİZ
                </MKTypography>
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Stack spacing={1}>
                {servicesMen.map((service) => (
                  <ServiceInfo
                    name={service.name}
                    description={service.description}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
};

export default InformationMen;
