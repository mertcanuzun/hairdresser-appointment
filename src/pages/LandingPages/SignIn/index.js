import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

import MKBox from "../../../components/MK/MKBox";
import MKTypography from "../../../components/MK/MKTypography";
import MKInput from "../../../components/MK/MKInput";
import MKButton from "../../../components/MK/MKButton";

import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../../examples/Footers/SimpleFooter";

import routes from "../../../routes";

// Images
import bgImage from "../../../assets/images/bg-sign-in-basic.jpeg";

import Validation from "../sections/Validation";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    // if (errors.name === "" && errors.email === "" && errors.password === "") {
    axios
      .post("http://localhost:8081/sign-in", values)
      .then((res) => {
        res.data === "Success"
          ? navigate("/")
          : alert("Böyle bir kayıt bulunmamaktadır");
      })
      .catch((err) => console.log(err));
  };
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox
        px={1}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={2}
      >
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card onSubmit={handleSubmit}>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  mt={1}
                >
                  Giriş yap
                </MKTypography>
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  sx={{ mt: 1, mb: 2 }}
                ></Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      onChange={handleInput}
                      type="email"
                      label="Email"
                      name="email"
                      fullWidth
                    />
                    {errors.email && (
                      <span className="text-red-500">{errors.email}</span>
                    )}
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      onChange={handleInput}
                      type="password"
                      label="Şifre"
                      name="password"
                      fullWidth
                    />
                    {errors.password && (
                      <span className="text-red-600">{errors.password}</span>
                    )}
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch
                      checked={rememberMe}
                      onChange={handleSetRememberMe}
                    />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Beni Hatırla
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      type="submit"
                      variant="gradient"
                      color="info"
                      fullWidth
                    >
                      Giriş Yap
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Hesabın Yok Mu?
                      <MKTypography
                        component={Link}
                        to="/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Kayıt Ol
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      {/* <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox> */}
    </>
  );
}

export default SignInBasic;
