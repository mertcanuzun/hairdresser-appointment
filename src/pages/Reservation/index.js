import React from "react";

import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../examples/Footers/DefaultFooter";

import routes from "../../routes";
import footerRoutes from "../../footer.routes";
import hoursOfDay from "./sections/data/hoursOfDay";

import MKBox from "../../components/MK/MKBox";
import { Container, Grid, Stack } from "@mui/material";
import MKTypography from "../../components/MK/MKTypography";
import ReservationCollapse from "./sections/ReservationCollapse";

const Reservation = () => {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   label: "free download",
        //   color: "default",
        // }}
        // transparent
        // light
      />
      <MKBox p={12}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Stack spacing={2}>
                <MKTypography mt={2} variant="h2">
                  Randevu Saatleri
                </MKTypography>
                {hoursOfDay.map((item, index) => (
                  <ReservationCollapse header={item.day} key={index} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Reservation;
