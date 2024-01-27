import React, { useEffect, useState } from 'react';
import {Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material'

import './App.css';
import Card from './components/ui/Card/Card';
import Modal from './components/ui/Modal/Modal';

interface Task {
  id: number;
  name: string;
  category: string;
  isCompleted: boolean;
}

function App() {
  const [list, setList] = useState<Task[]>([])
  const [filters, setFilters] = useState([])
  const [filterSelected, setFilterSelected] = useState("")
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleAdicionarTarefa = (novaTarefa: Task) => {
    list.push(novaTarefa);
  };






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
                {list.map((task) => {
                  return(
                    <MenuItem value={task.category}>{task.category}</MenuItem>
                  )
                })}
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
        {list.map((task) => {
          return(
            <Card title={task.name} category={task.category}/>
          )
        })}
        

        <Modal isOpen={open} setIsOpen={setOpen} onAddTask={handleAdicionarTarefa}/>
    </div>
  );
}

export default App;
