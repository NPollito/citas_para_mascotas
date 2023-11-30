import styled from "styled-components";
import { useState } from "react";
import {v4 as uuid} from "uuid"
import Input from "./Input";
import TextArea from "./TextArea";

import { Container, Button } from "./UI";

const Form = ({createCita}) => {

    const [data, setData] = useState({
        name: "",
        owner: "",
        date: "",
        hour: "",
        information: ""
    })

    const [error, setError] = useState(false)

    // guardar los valores de los imputs en el objeto data
    const saveData = e => {
        setData({...data, [e.target.name]: e.target.value})
    }
    
    const {name, owner, date, hour, information} = data

    // Agregar cita
    const addQuote = e => {

        e.preventDefault()

        // validar formulario
        if (name.trim() === "" ||
            owner.trim() === "" || 
            date.trim() === "" ||
            hour.trim() === "" ||
            information.trim() === ""  
        ) {
            setError(true)
            return
        }

        setError(false)

        // agregar id a los datos
        data.id = uuid()
        
        // crear cita
        createCita(data)

        //Reiniciar el formulario
        setData({
            name: "",
            owner: "",
            date: "",
            hour: "",
            information: ""
        })
    }

    return (
        <Container>
            <h2>Agregar Datos</h2>
            <form onSubmit={addQuote}>
                {error && <MessageError>Todos los campos son obligatorios</MessageError>}
                <Input 
                    nameLabel="Nombre del propietario:"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={name}
                    saveData={saveData}
                />
                <Input 
                    nameLabel="Nombre de la Masota:" 
                    type="text"
                    placeholder="Nombre"
                    name="owner"
                    value={owner}
                    saveData={saveData}
                />
                <Input 
                    nameLabel="Fecha:" 
                    type="date"
                    name="date"
                    value={date}
                    saveData={saveData}
                />
                <Input 
                    nameLabel="Hora:" 
                    type="time"
                    name="hour"
                    value={hour}
                    saveData={saveData}
                />
                <TextArea 
                    nameLabel="Sintomas de la mascota"
                    name="information"
                    value={information}
                    saveData={saveData}
                />
                <Button type="label" $padding={'7px 20px'}>Guardar</Button>
            </form>
        </Container>
    )
}

export default Form;

//==========Styled-components==========

const MessageError = styled.p`
    margin-top: 15px;
    color: #bc0000;
    text-align: center;
`