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
  let itemName = "";
  let itemCategory = "";

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleAdicionarTarefa = (novaTarefa: Task) => {
    list.push(novaTarefa);
    localStorage.setItem('taskList', JSON.stringify(list))
  };


  function handleChangeFilterValue(event: any){
    setFilterSelected(event.target.value)
  }

  async function handleEditItem(title: string, category: string) {
   setItemName(title)
   console.log("testando " + itemName)
    setItemCategory(category)
    setOpen(true)
  }

  function setItemCategory(value : string){
    itemCategory = value;
  }

  function setItemName(value : string){
    itemName = value;
  }

  const handleDeleteAnItem = (title: string) => {
    setList(prevTarefas => {
      const novaLista = prevTarefas.filter(tarefa => tarefa.name !== title);
      
      // Atualizar o localStorage com o array atualizado
      localStorage.setItem('taskList', JSON.stringify(novaLista));
      
      return novaLista;
    });

  }

  useEffect(() => {
    function getAllTasks(){
      const listaSalva = localStorage.getItem('taskList');
      if (listaSalva) {
      setList(JSON.parse(listaSalva));
    }
    }
    getAllTasks()
  }, [])

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
            <Card title={task.name} category={task.category} onDeleteItem={handleDeleteAnItem} onEditItem={handleEditItem}/>
          )
        })}
        <Modal isOpen={open} setIsOpen={setOpen} onAddTask={handleAdicionarTarefa} taskNameProps={itemName} taskCategoryProps={itemCategory} setTaskNameProps={setItemName}/>
    </div>
  );
}

export default App;
