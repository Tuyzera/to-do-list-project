import React, { useEffect, useState } from 'react';
import {Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material'

import './App.css';
import Card from './components/ui/Card/Card';
import Modal from './components/ui/Modal/Modal';



function App() {
  const [list, setList] = useState([])
  const [filters, setFilters] = useState([])
  const [filterSelected, setFilterSelected] = useState("")
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(open)
  };




  useEffect(() => {

  }, [])


  function handleChangeFilterValue(event: any){
    setFilterSelected(event.target.value)
  }

  return (
    <div className="container">
      <div className='container-title'>
        <h1>Lista de Tarefas</h1>
      </div>
      <div className='container-search'>
          <TextField id="outlined-basic" label="Pesquisar" variant="outlined" fullWidth/>
          <Button variant="contained" onClick={handleClickOpen}>+</Button>
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
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button onClick={(name) => alert("One")}>Asc</Button>
            <Button>Desc</Button>
          </ButtonGroup>
        </div>
      </div>
        <Card title={"Item 1"} category={"Trabalho"}/>
        <Card title={"Item 2"} category={"Estudo"}/>
        <Card title={"Item 3"} category={"Academia"}/>
        <Card title={"Item 4"} category={"Estudo"}/>

        <Modal isOpen={open} setIsOpen={setOpen}/>
    </div>
  );
}

export default App;
