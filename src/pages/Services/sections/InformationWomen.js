import React from "react";
import MKBox from "../../../components/MK/MKBox";
import { Container, Grid, Stack } from "@mui/material";
import MKTypography from "../../../components/MK/MKTypography";
import servicesWomen from "./data/servicesWomen";
import ServiceInfo from "./ServiceInfo";

const InformationWomen = () => {
  return (
    <>
    <MKBox mt={8}>
      <Container>
        <Grid container spacing={2}>
        <Grid item xs={6}>
            <Stack spacing={1}>
              {servicesWomen.map((service) => (
                <ServiceInfo
                  name={service.name}
                  description={service.description}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack display="flex" >
              <MKTypography variant="h2" color="black">
                KADIN
              </MKTypography>
              <MKTypography variant="h2" color="black">
                BÖLÜMÜ
              </MKTypography>
              <MKTypography variant="h2" color="black">
                HİZMETLERİMİZ
              </MKTypography>
            </Stack>
          </Grid>

         
        </Grid>
      </Container>
    </MKBox>
  </>
  )
}

export default InformationWomen;