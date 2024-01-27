import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";
import { randomInt } from "crypto";
import { useState } from "react";

export default function Modal({isOpen, setIsOpen, onAddTask, ...rest}: any){
  const [taskName, setTaskName] = useState("")
  const [taskCategory, setTaskCategory] = useState("")

  

    function handleClose(){
      setIsOpen(false)
    }

    function handleAddItem(taskName: string, taskCategory: string, event: any){
     event.preventDefault();
      const data ={
        id: Math.ceil(Math.random()),
        name: taskName,
        category: taskCategory,
        isCompleted: false
      };

      onAddTask(data);

      setTaskName('');
      setTaskCategory('');
      
      handleClose();
      
    }
    

    return(
        <div>
            <Dialog
              fullWidth
              open={isOpen}
              onClose={handleClose}
              PaperProps={{
                component: "form",
                onSubmit: (event: any) => handleAddItem(taskName, taskCategory, event)
              }}
            >
        <DialogTitle>Criar uma nova tarefa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="tarefa"
            name="tarefa"
            label="Nome da tarefa"
            type="text"
            fullWidth
            variant="standard"
            onChange={(name) => setTaskName(name.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="Categoria"
            name="Categoria"
            label="Categoria"
            type="text"
            fullWidth
            variant="standard"
            onChange={(name) => setTaskCategory(name.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Adicionar</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}