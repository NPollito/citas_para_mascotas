import styled from "styled-components";
import { Button } from "./UI";

const Card = ({cita, deleteCita}) => (
    <ContainerCard>
        <p>Propietario:<span>{cita.name}</span></p>
        <p>Mascota:<span>{cita.owner}</span></p>
        <p>Fecha:<span>{cita.date}</span></p>
        <p>Hora:<span>{cita.hour}</span></p>
        <p>Sintomas:<span>{cita.information}</span></p>
        <Button 
            $text={'14px'} 
            $padding={'4px 40px'}
            onClick={() => deleteCita(cita.id)}
        >Eliminar</Button>
    </ContainerCard>
)

export default Card;

const ContainerCard = styled.article`
    width: 80%;
    padding: 10px;
    margin-bottom: 13px;
    border-radius: 10px;
    border: 1px solid #676f9d;

    p{
        color: #f8b179;
        font-weight: 600;
    }

    span {
        padding-left: 10px;
        color: #cecece;
        font-weight: normal;
    }

    @media (max-width: 850px) {
        width: 100%;
    }
`