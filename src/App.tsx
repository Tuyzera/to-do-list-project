import React, { useState } from 'react';
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material'

import './App.css';

function App() {
  const [filters, setFilters] = useState([])
  const [filterSelected, setFilterSelected] = useState("")


  function handleChangeFilterValue(event: any){
    setFilterSelected(event.target.value)
  }

  return (
    <div className="container">
      <div className='container-title'>
        <h1>Lista de Tarefas</h1>
      </div>
      <div className='container-search'>
          <TextField id="outlined-basic" label="Pesquisar" variant="outlined" />
      </div>
      <div className='container-filter'>
        <div className='container-filter-right'>
          <h1>Filtro</h1>
          <FormControl sx={{m: 1, width: 150}}>
            <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterSelected}
                label="Filtro"
                onChange={handleChangeFilterValue}
              >
                <MenuItem value={"Todas"} >Todas</MenuItem>
                <MenuItem value={"Trabalho"}>Trabalho</MenuItem>
                <MenuItem value={"Estudos"}>Estudos</MenuItem>
                <MenuItem value={"Academia"}>Academia</MenuItem>
              </Select>
</FormControl>
        </div>
        <div className='container-filter-left'>
          <label>Ordem Alfabetica</label>
        </div>
         
      </div>
    </div>
  );
}

export default App;
