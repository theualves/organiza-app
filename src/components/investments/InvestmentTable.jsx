import React, { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const CurrencyFormatter = ({ value }) => (
  <CurrencyInput
    value={value}
    disabled={true}
    allowDecimals={true}
    decimalSeparator=","
    groupSeparator="."
    prefix="R$ "
  />
);

const calculateFutureValue = (initialValue, annualInterestRate, years) => {
  const annualRate = 0.05;
  const compoundPeriodsPerYear = 1;
  const n = years * compoundPeriodsPerYear;
  const r = annualRate / compoundPeriodsPerYear;
  const futureValue = initialValue * Math.pow(1 + r, n);
  // Arredonda o valor para o número inteiro mais próximo
  return Math.round(futureValue);
};

const InvestmentTable = ({ investments }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <TableContainer className='mb-20' component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="border p-2">Nome de Investimento</StyledTableCell>
            <StyledTableCell className="border p-2">Valor</StyledTableCell>
            <StyledTableCell className="border p-2">Descrição</StyledTableCell>
            <StyledTableCell className="border p-2">Data</StyledTableCell>
            <StyledTableCell className="border p-2">Tipo</StyledTableCell>
            <StyledTableCell className="border p-2">Rendimento Após 1 Ano</StyledTableCell>
            <StyledTableCell className="border p-2">Rendimento Após 5 Anos</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <StyledTableCell colSpan={7}>
                <Typography variant="body1" className="text-center">
                  Carregando...
                </Typography>
              </StyledTableCell>
            </TableRow>
          ) : investments.length === 0 ? (
            <TableRow>
              <StyledTableCell colSpan={7}>
                <Typography variant="body1" className="text-center">
                  Sem registros
                </Typography>
              </StyledTableCell>
            </TableRow>
          ) : (
            investments.map((investment, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell className="border p-2">{investment.name}</StyledTableCell>
                <StyledTableCell className="border p-2">
                  <CurrencyFormatter value={investment.value} />
                </StyledTableCell>
                <StyledTableCell className="border p-2">{investment.description}</StyledTableCell>
                <StyledTableCell className="border p-2">{formatDate(investment.date)}</StyledTableCell>
                <StyledTableCell className="border p-2">{investment.type}</StyledTableCell>
                <StyledTableCell className="border p-2">
                  <CurrencyFormatter value={calculateFutureValue(investment.value, 0.05, 1)} />
                </StyledTableCell>
                <StyledTableCell className="border p-2">
                  <CurrencyFormatter value={calculateFutureValue(investment.value, 0.05, 5)} />
                </StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvestmentTable;
