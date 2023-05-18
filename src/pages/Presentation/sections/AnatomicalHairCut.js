import React from "react";

import MKBox from "../../../components/MK/MKBox";
import { Container, Grid, Stack, Card } from "@mui/material";
import AnatomicalHairImage from "./AnatomicalHairImage";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

const AnatomicalHairCut = () => {
  return (
    <>
      <MKBox bgColor="white">
        <MKBox component="section" py={6} my={6} bgColor="black">
          <Container>
            <Grid
              container
              item
              xs={11}
              spacing={3}
              alignItems="center"
              sx={{ mx: "auto" }}
            >
              <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
                <Grid container>
                  <Grid item xs={12} md={8}>
                    <DefaultInfoCard
                      title="ANATOMİK SAÇ KESİMİ"
                      description="Anatomik saç kesimi bir saç modeli değildir öncelikle bundan bahsetmek gereklidir. Anatomik saç kesimi Kadir Alkan tarafından bulunan, kuaförlerin misafirlerinin istedikleri saç modellerinin kafa ve yüz kemiklerinin altın oran kuralıyla hesaplanmasıyla ,istenilen saç modelinin kişilere özel bir saç modeli haline gelmesine imkan veren bir methoddur."
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={4} sx={{ mx: "auto" }}>
                <AnatomicalHairImage />
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </>
  );
};

export default AnatomicalHairCut;
