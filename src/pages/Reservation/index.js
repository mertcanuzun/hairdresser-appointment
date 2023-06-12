import React, { useState } from "react";

import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../examples/Footers/DefaultFooter";

import routes from "../../routes";
import footerRoutes from "../../footer.routes";
import hoursOfDay from "./sections/data/hoursOfDay";

import MKBox from "../../components/MK/MKBox";
import { Box, Container, Grid, Stack } from "@mui/material";
import MKTypography from "../../components/MK/MKTypography";
import ReservationCollapse from "./sections/ReservationCollapse";
import { Button } from "antd";
import GetAppointmentModal from "./sections/modals/GetAppointmentModal";
import SelectDropdown from "../../components/Form/SelectDropdown";
import staffs from "./sections/data/staffs";
import servicesMen from "../Services/sections/data/servicesMen";

const Reservation = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  console.log(staffs);
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
      <GetAppointmentModal open={open} close={handleClose} />
      <MKBox p={16}>
        <Box p={9} mt={2} bgcolor="light" borderRadius={9} boxShadow={3}>
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Stack>
                  <MKTypography variant="h2">Hizmet Seçimi</MKTypography>
                </Stack>
                <Stack mt={2}>
                  <Stack>
                    <SelectDropdown data={staffs} label="Kuaförler" />
                  </Stack>
                  <Stack>
                    <SelectDropdown data={servicesMen} label="Hizmetler" />
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={6}>
                  <Stack>
                    <MKTypography variant="h2">Randevu Saatleri</MKTypography>
                  </Stack>
                  <Stack spacing={2}>
                    {hoursOfDay.map((item, index) => (
                      <ReservationCollapse header={item.day} key={index} />
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={12}>
                <Stack direction="row" mt={4} justifyContent="center">
                  <Button size="large" onClick={() => setOpen(true)}>
                    Randevu Al
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Reservation;
