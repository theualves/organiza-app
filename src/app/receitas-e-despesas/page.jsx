"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LayoutAdmin from '@/components/login-cadastro/LayoutAdmin';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Card, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';


export default function ReceitasEDespesas() {
  const [entries, setEntries] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("receita");
  const [date, setDate] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  //Guardando os dados com localStorage
  useEffect(() => {
    const storedEntries = localStorage.getItem('entries');
    if (storedEntries) {
      try {
        const parsedEntries = JSON.parse(storedEntries);
        setEntries(parsedEntries);
      } catch (error) {
        console.error('Error parsing entries from localStorage:', error);
        setEntries([]);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('entries', JSON.stringify(entries)); 
    } catch (error) {
      console.error('Error storing entries in localStorage:', error);
    }
  }, [entries]);

  //Função de adicionar, editar e deletar dados da lista
  const addEntry = () => {
    if (description && amount) {
      const newEntry = {
        description,
        amount: parseFloat(amount),
        type,
        date,
      };

      if (editIndex !== null) {
        const updatedEntries = [...entries];
        updatedEntries[editIndex] = newEntry;
        setEntries(updatedEntries);
        setEditIndex(null);
      } else {
        setEntries([...entries, newEntry]);
      }

      setDescription("");
      setAmount("");
      setType("receita");
      setDate;
    }
  };

  const editEntry = (index) => {
    const entryToEdit = entries[index];
    setDescription(entryToEdit.description);
    setAmount(entryToEdit.amount.toString());
    setType(entryToEdit.type);
    setDate(entryToEdit.date);
    setEditIndex(index);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };


  return (
    <LayoutAdmin>    
        <Header/>
      <h1 className="font-bold text-green-800 pl-10 text-xl mt-10 mb-3 text-center ">Adicionar novas receitas e despesas</h1>
      <Box style={{display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <Card variant='outlined' sx={{ maxWidth: 'full', margin: '15px' }}>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <h2>Tipo:</h2>
        <InputLabel id="demo-simple-select-label" ></InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
  
          >
        <MenuItem value="receita">Receita</MenuItem>
        <MenuItem value="despesa">Despesa</MenuItem>
          </Select>
          <FormHelperText>Obrigatório*</FormHelperText>
      </FormControl>
      </Card>
      
      <Card variant='outlined' sx={{ maxWidth: 'full', margin: '15px' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <h2>Valor:</h2>
      <TextField 
      id="outlined-basic" 
      placeholder="0,00" 
      type="text" 
      variant="outlined"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      />
        <FormHelperText>Obrigatório*</FormHelperText>
      </FormControl>
      </Card>

      <Card variant='outlined' sx={{ maxWidth: 'full', margin: '15px' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <h2>Descrição:</h2>
        <TextField 
        id="outlined-basic" 
        placeholder="Ex.: Remédio " 
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <FormHelperText>Obrigatório*</FormHelperText>
      </FormControl>
      </Card>

      <Card variant='outlined' sx={{ maxWidth: 'full', margin: '15px' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <h2>Data:</h2>
      <TextField 
      id="outlined-basic" 
      type="date" 
      variant="outlined"
      onChange={(e) => setDate(e.target.value)}
      />
        <FormHelperText>Obrigatório*</FormHelperText>
      </FormControl>
      </Card>
      </Box>

        <Box className="flex justify-center items-center">
        <Button 
        className="text-white bg-green-700 px-4 py-1 mt-5 rounded"
        onClick={addEntry}
        >
         {editIndex !== null ? "Editar" : "Adicionar"}
        </Button>
        </Box>


        <Box mt={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Typography variant="h5" className="font-bold text-green-800">
    Lista de receitas e despesas anteriores
  </Typography>
  <Card variant="outlined" sx={{ width: '100%', maxWidth: '600px', marginTop: '15px', marginBottom: "30px" }}>
    <List>
      {entries.map((entry, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`${entry.date} (${entry.type}): ${entry.description} - R$${entry.amount.toFixed(2)}`}
          />
          <ListItemSecondaryAction>
            <IconButton onClick={() => editEntry(index)} color="primary">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteEntry(index)} color="secondary">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </Card>
        </Box>

      
        <Footer/>
  </LayoutAdmin>
  );
}