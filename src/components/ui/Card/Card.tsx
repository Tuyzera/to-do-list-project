import React from "react"
import { Button} from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import './Card.css'



export default function Card({title, category, onDeleteItem, onEditItem, ...rest}: any){

    function handleDeleteItem(title: string){
        onDeleteItem(title)
    }

    function handleEditItem(title: string, category: string){
        alert("Title: " + title + ", Category: " + category)
        onEditItem(title, category)
        
    }


    return(
        <div className="container-card">
            <div className="container-card-left">
                <label id="title">{title}</label>
                <label>({category})</label>
            </div>
            <div className="container-card-right">
                <Button variant="contained"color="success">Confirmar</Button>
                <Button variant="contained"color="primary" onClick={() => handleEditItem(title, category)}><CreateIcon></CreateIcon></Button>
                <Button variant="contained" color="error" onClick={() => handleDeleteItem(title)}>X</Button>
            </div>
        </div>
    )
}