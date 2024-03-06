"use client";
import BalancoGeral from "@/components/BalancoGeral";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import UltimasMovimentacoes from "@/components/UltimasMovimentacoes";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { OverviewDespesas } from "../../components/principal/overview/Overview-despesas";
import { OverviewGastosMesAtual } from "../../components/principal/overview/Overview-gastos-mes-atual";
import { OverviewReceitas } from "../../components/principal/overview/Overview-receitas";
import { OverviewSaldoGeral } from "../../components/principal/overview/Overview-saldo-geral";
import LayoutAdmin from "@/components/login-cadastro/LayoutAdmin";

export default function Principal() {
  return (    
    <LayoutAdmin>
      <Header />
      <Box
        className={{ background: "#9C9C9C" }}
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={6}
            justifyContent="center"
            alignItems="flex-start" // Alinhe ao topo
          >
            <Grid xs={12} sm={6} lg={3}>
              <OverviewSaldoGeral
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="R$ 9.000,00"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewReceitas
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value="R$ 4.000,00"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewDespesas
                difference={12}
                sx={{ height: "100%" }}
                value={"R$ 2.700,00"}
              />
            </Grid>
            <Grid xs={12} lg={5}>
              <Grid xs={12} lg={5}>
                <UltimasMovimentacoes />
              </Grid>
              <Grid xs={12} lg={4} sx={{ mt: 4 }}>
                <BalancoGeral />
              </Grid>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewGastosMesAtual
                chartSeries={[67.5, 32.5]}
                labels={["Receita", "Despesa"]}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </LayoutAdmin>    
  );
}
