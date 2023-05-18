/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import MKBox from "../../../components/MK/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "../../../examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={6}>
            <DefaultCounterCard
              count={33}
              suffix="+"
              title="Çalışan Sayımız"
              description="Birbirinden yetenekli ve eğitimli çalışan arkadaşlarımız"
            />
          </Grid>
          <Grid item xs={12} md={6} display="flex">
            <DefaultCounterCard
              count={3}
              suffix="+"
              title="Salonlarımız"
              description="Dizayni ve konforu ile ön plana çıkan salonlarımız"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
