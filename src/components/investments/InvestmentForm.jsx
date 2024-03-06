import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import Image from 'next/image';
import CurrencyInput from 'react-currency-input-field';



const InvestmentForm = ({ onAddInvestment }) => {
  const [investment, setInvestment] = useState({
    name: '',
    value: '',
    description: '',
    date: '',
    type: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestment({ ...investment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    const errors = {};
    for (const key in investment) {
      if (!investment[key]) {
        errors[key] = 'Campo obrigatório';
      }
    }

    if (Object.keys(errors).length === 0) {
      onAddInvestment(investment);
      setInvestment({
        name: '',
        value: '',
        description: '',
        date: '',
        type: '',
      });
      setFormErrors({});
      setFormValid(false);
    } else {
      setFormErrors(errors);
      setFormValid(true);
    }
  };

  return (
    <Card className="mb-20">
  <CardContent className="flex flex-wrap">
    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
        <div className='flex w-full'>
           <img src="/icon-text.svg" className='mb-2 mr-1'/>
           <label className="mb-2 block text-sm font-semibold" 
           >Nome</label>
        </div>
        <input
          type="text"
          className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
          value={investment.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      {formErrors.type && (
         <div className="mt-2 flex items-center">
             <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
             <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
         </div>
      )}
    </div>

    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
        <div className="flex">
          <img src="/icon-text.svg" className="mb-2 mr-1" />
          <label className="mb-2 block text-sm font-semibold">Valor</label>
        </div>
        <CurrencyInput
          placeholder="R$"
          prefix="R$ "
          decimalSeparator=","
          groupSeparator="."
          decimalsLimit={2}
          value={investment.value}
          onValueChange={(value, name) => handleChange({ target: { name, value } })}
          name="value"
          className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
        />
      </div>
      {formErrors.type && (
        <div className="mt-2 flex items-center">
          <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
          <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
        </div>
      )}
    </div>

    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
      <div className='flex '>
           <img src="/icon-text.svg" className='mb-2 mr-1'/>
           <label className="mb-2 block text-sm font-semibold" 
           >Descrição</label>
        </div>
        <input
          type="text"
          className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
          value={investment.description}
          onChange={handleChange}
          name="description"
        />
      </div>
      {formErrors.type && (
         <div className="mt-2 flex items-center">
             <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
             <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
         </div>
      )}
    </div>

    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
      <div className='flex '>
           <img src="/icon-text.svg" className='mb-2 mr-1'/>
           <label className="mb-2 block text-sm font-semibold" 
           >Data</label>
        </div>
        <input
          type="date"
          className="w-full block rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
          value={investment.date}
          onChange={handleChange}
          name="date"
        />
      </div>
      {formErrors.type && (
         <div className="mt-2 flex items-center">
             <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
             <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
         </div>
      )}
    </div>

    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
      <div className='flex '>
           <img src="/icon-text.svg" className='mb-2 mr-1'/>
           <label className="mb-2 block text-sm font-semibold" 
           >Tipo de investimento</label>
        </div>
        <select
          className="block rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
          name="type"
          value={investment.type}
          onChange={handleChange}
        >
          <option value="">Selecione o tipo:</option>
          <option value="Ações">Ações</option>
          <option value="Renda Fixa">Renda Fixa</option>
          <option value="Imóveis">Imóveis</option>
        </select>
      </div>
      {formErrors.type && (
         <div className="mt-2 flex items-center">
             <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
             <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
         </div>
      )}
    </div>

    <div className="w-full px-2">
      <button
        type="submit"
        className="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded-md float-right"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
      {formValid && (
        <p className="text-red-500 text-sm font-semibold">Preencha todos os campos obrigatórios.</p>
      )}
    </div>
  </CardContent>
</Card>

  );
};

export default InvestmentForm;
