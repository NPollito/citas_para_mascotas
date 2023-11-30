import styled from "styled-components";
import photo from "../assets/image/dog.jpg"
import Card from "./Card";

import { Container } from "./UI";

const DataPet = ({citas, deleteCita}) => {

    // Mensaje condicional
    const title = citas.length === 0 ? "No tienes Ninguna Cita" : "Citas Pendientes"

    return(
        <ContainerCitas>
            <h2>{title}</h2>
            <ContainerCards>
                {
                    citas.map(cita => <Card key={cita.id} cita={cita} deleteCita={deleteCita}/>)
                }
            </ContainerCards>
        </ContainerCitas>
    )
}

export default DataPet;

const ContainerCitas = styled(Container)`
    overflow: hidden;
    background-image:
        linear-gradient(321deg, rgba(45,50,80,0.93) 0%, rgba(71,77,115,0.93) 50%, rgba(45,50,80,0.93) 100%),
        url(${photo});
    background-position: center;
    background-size: cover;
    border-radius: 0 25px 25px 0;

    @media (max-width: 700px) {
        border-radius: 25px;
    }
`

const ContainerCards = styled.section`
    margin-top: 15px;
    width: 100%;
    height: 440px;
    overflow: auto;
`
