/* eslint-disable no-param-reassign */
/**
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


import MKBox from "../../../../../../components/MK/MKBox";
import MKInput from "../../../../../../components/MK/MKInput";

function InputError() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput label="Error" fullWidth error />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputError;
