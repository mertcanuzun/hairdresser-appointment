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

import MKBox from "../../../components/MK/MKBox";

// Material Kit 2 React examples
import RotatingCard from "../../../examples/Cards/RotatingCard";
import RotatingCardFront from "../../../examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "../../../assets/images/home-page-img.jpg";
import bgBack from "../../../assets/images/home-page-image.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6} bgColor="secondary">
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront image={bgFront} color="dark" />
              <RotatingCardBack
                image={bgBack}
                color="light"
                title="Biz Kimiz?"
                description="Saç Kesiminde en iyisiz."
                action={{
                  type: "internal",
                  route: "/about-us",
                  label: "Daha Fazla Bilgi İçin",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  title="Biz Kimiz?"
                  description="2000 yılı İstanbul doğumlu, 12 yaşındayken 1935 yılında dedesi ile başlayıp, babasıyla devam eden kuaförlük serüvenini sürdürmüş ama aynı zamanda eğitim hayatına devam etmiştir. Sonucunda Kocaeli Üni. Bilgisayar Programcılığı, Anadolu Üni. İşletme Fakültelerini ve Başkent Üniversitesi Eğitim Koçluğu bitirmiştir. Eğitim hayatında bir dönüm noktası belirleyip dede mesleği kuaförlük üzerine rotasını çizip bu işi de eğitimli, donanımlı bir şekilde yapmayı öngörmüştür. Bu düşünce akabinde, diksiyon eğitimi ve beden dili, yurt içi ve yurt dışı bir çok akademi ve eğitmenden teknik kesim, renklendirme ve ürün eğitimlerini tamamlamıştır. 2015 te İtalya'da gerçekleşen organizasyonda Türk Ekibi üyesi olarak, ülkemize dünya ikinciliğini getirdi."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
