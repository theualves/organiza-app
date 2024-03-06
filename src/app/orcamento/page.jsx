'use client'
import React, { useState, useEffect } from "react";
import { Card, FormControl, FormHelperText, Box,  Button, TextField, Container, Typography, Paper, Grid } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LayoutAdmin from "@/components/login-cadastro/LayoutAdmin";

const cardStyle = {
  padding: "16px",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  maxWidth: "380px",
};

export default function Orcamento() {
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [expenses, setExpenses] = useState("");
  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("budgetChartData");
    if (storedData) {
      setBudgetData(JSON.parse(storedData));
    }
  }, []);

  const handleAddData = () => {
    if (category && budget && expenses) {
      const newData = [
        ...budgetData,
        {
          name: category,
          orcamento: parseFloat(budget),
          gastosReais: parseFloat(expenses),
        },
      ];
      setBudgetData(newData);
      setCategory("");
      setBudget("");
      setExpenses("");
      localStorage.setItem("budgetChartData", JSON.stringify(newData));
    }
  };

  return (
    <LayoutAdmin>    
      <Header />
      <Container>
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: "bold",
                color: "#00482E",
                marginBottom: "20px",
              }}
            >
              Definir metas de orçamento
            </Typography>
            <Card sx={cardStyle}>
              <FormControl sx={{ m: 1 }}>
                <h2>Categoria:</h2>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <FormHelperText>Obrigatório*</FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1 }}>
                <h2>Orçamento:</h2>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
                <FormHelperText>Obrigatório*</FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1 }}>
                <h2>Gastos Reais:</h2>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="number"
                  value={expenses}
                  onChange={(e) => setExpenses(e.target.value)}
                />
                <FormHelperText>Obrigatório*</FormHelperText>
              </FormControl>

              <Box display="flex" justifyContent="center" mt={2}>
        <Button
          onClick={handleAddData}
          variant="contained" 
          style={{ backgroundColor: '#5FB998', color: 'white', borderRadius: '8px' }} >
          Adicionar
        </Button>
      </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              align="center"
              sx={{
                marginTop: "20px",
                fontWeight: "bold",
                color: "#00482E",
              }}
            >
              Comparação entre Orçamento e Gastos Reais por Categoria
            </Typography>
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={budgetData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orcamento" fill="#00482E" name="Orçamento" />
                  <Bar dataKey="gastosReais" fill="#3B9373" name="Gastos Reais" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </LayoutAdmin>
  );
}
