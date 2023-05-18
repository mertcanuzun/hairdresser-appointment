import React from "react";

import routes from "../../routes";
import footerRoutes from "../../footer.routes";

import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../examples/Footers/DefaultFooter";

import MKBox from "../../components/MK/MKBox";
import MKTypography from "../../components/MK/MKTypography";
import { Container, Grid, Stack, Card, Box } from "@mui/material";

import bgImage from "../../assets/images/about-us-bg.jpg";
import SaloonImage from "./sections/SaloonImage";

const AboutUs = () => {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   label: "free download",
        //   color: "default",
        // }}
        transparent
        light
      />
      <MKBox
        minHeight="45vh"
        width="100%"
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
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center", fontFamily: "monospace" }}
          >
            <MKTypography variant="h1" color="white">
              Hakkımızda
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox mt={4}>
          <Container>
            <Grid container spacing={6}>
              <Grid item xs={4} display="flex" alignItems="center" justifyContent="center">
                <Stack>
                  <SaloonImage />
                </Stack>
              </Grid>

              <Grid item xs={8}>
                <Stack spacing={1}>
                  <Box
                    sx={{
                      fontFamily: "Raleway",
                    }}
                  >
                    2000 yılı İstanbul doğumlu, 12 yaşındayken 1972 yılında dedesi ile başlayıp, babasıyla devam eden kuaförlük serüvenini sürdürmüş ama aynı zamanda eğitim hayatına devam etmiştir. Sonucunda Mersin Üniv. Bilgisayar Mühendisliği bitirmiştir. Eğitim hayatında bir dönüm noktası belirleyip dede mesleği kuaförlük üzerine rotasını çizip bu işi de eğitimli, donanımlı bir şekilde yapmayı öngörmüştür. Bu düşünce akabinde, diksiyon eğitimi ve beden dili, yurt içi ve yurt dışı bir çok akademi ve eğitmenden teknik kesim, renklendirme ve ürün eğitimlerini tamamlamıştır.Ülkemize dünya ikinciliğini getirmiştir. Kendini,meslektaşlarının eğitimine katkıda bulunma konusunda sorumlu hissetmiş, aldığı teknik eğitimleri geleneksel berberlik ile harmanlayarak 1000’lerce meslektaşına patentini aldığı Anatomik Saç Kesimi, salon işletmeciliği, müşteri ilişkileri, sosyal medya konularını da eğitim programına katarak, bilgi birikimini onlara aktarmaya devam etmektedir.
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default AboutUs;
