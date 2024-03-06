'use client'
import { useEffect, useState } from 'react';
import InvestmentForm from '@/components/investments/InvestmentForm';
import InvestmentTable from '@/components/investments/InvestmentTable';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LayoutAdmin from '@/components/login-cadastro/LayoutAdmin';

export default function Home() {
  const [investments, setInvestments] = useState([]);

  // Função para adicionar um novo investimento
  const handleAddInvestment = (newInvestment) => {
    const updatedInvestments = [...investments, newInvestment];
    setInvestments(updatedInvestments);
    
    // Armazene os dados no localStorage
    localStorage.setItem('investments', JSON.stringify(updatedInvestments));
  };

  // Recupere os dados do localStorage ao carregar a página
  useEffect(() => {
    const storedInvestments = localStorage.getItem('investments');
    if (storedInvestments) {
      setInvestments(JSON.parse(storedInvestments));
    }
  }, []);

  return (
    <LayoutAdmin>    
      <Header />
      <div className="bg-bg-logado px-8 py-4 sm:px-40 sm:py-16">
      <h1 className="text-2xl font-bold mb-4 text-color-p2 mb-8">Adicionar detalhes de investimentos</h1>
      <InvestmentForm onAddInvestment={handleAddInvestment} />
      <h2 className="text-2xl font-bold mt-4 text-color-p2 mb-8">Históricos de investimentos</h2>
      <InvestmentTable investments={investments} />
      </div>
      <Footer />
    </LayoutAdmin>
  );
}
