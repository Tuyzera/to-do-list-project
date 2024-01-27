import React from "react"
import { Button, ButtonGroup } from '@mui/material'
import './Card.css'


export default function Card({title, category, ...rest}: any){
    return(
        <div className="container-card">
            <div className="container-card-left">
                <label id="title">{title}</label>
                <label>({category})</label>
            </div>
            <div className="container-card-right">
                <Button variant="contained"color="success">Confirmar</Button>
                <Button variant="contained" color="error">X</Button>
            </div>
        </div>
    )
}