import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import DataPet from './components/DataPet'

function App() {

  // guardar en localstorage
  let citasInitials = JSON.parse(localStorage.getItem('citas'))
  if (!citasInitials) {
    citasInitials = []
  }

  // Arreglo de citas
  const [citas, setCitas] = useState(citasInitials)

  //Use effect para realizar ciertas operaciones cuando el state cambie
  useEffect(() => {
    if (citasInitials) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])

  // Crear cita
  const createCita = cita => {
    setCitas([...citas, cita])
  }

  // Eliminar cita por su id
  const deleteCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id)
    setCitas(newCitas)
  }
  
  return (
    <Container>
      <Title>Citas para Mascotas</Title>
      <ContainerData>
        <Form createCita={createCita}/>
        <DataPet citas={citas} deleteCita={deleteCita}/>
      </ContainerData>
    </Container>
  )
}

export default App;

//==========Styled-components==========

const Container = styled.main`
  padding: 50px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 36px;
  color: #ffffff;
`

const ContainerData = styled.section`
  margin-top: 20px;
  width: 70%;
  min-width: 300px;
  max-width: 1100px;
  background-color: #2d3250;
  border-radius: 25px;
  box-shadow: 0 0 40px 10px rgba(0, 0, 0, .5);
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`