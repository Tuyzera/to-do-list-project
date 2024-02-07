import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";
import { Method } from "@testing-library/react";
import { randomInt } from "crypto";
import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean,
  setIsOpen: Function,
  onAddTask: Function
  taskNameProps?: String,
  taskCategoryProps?: String
  setTaskNameProps: Function
}

export default function Modal({isOpen, setIsOpen, onAddTask, taskNameProps, taskCategoryProps, setTaskNameProps,  ...rest}: ModalProps){
  const [taskName, setTaskName] = useState(taskNameProps || "")
  const [taskCategory, setTaskCategory] = useState(taskCategoryProps || "")


    function handleClose(){
      setIsOpen(false)
      setTaskName("")
      setTaskCategory("")
      setTaskNameProps("")
    }

    function handleAddItem(taskName: String, taskCategory: String, event: any){
     event.preventDefault();
      const data ={
        id: Math.ceil(Math.random()),
        name: taskName,
        category: taskCategory,
        isCompleted: false
      };

      onAddTask(data);

      
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