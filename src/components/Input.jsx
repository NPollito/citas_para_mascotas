import styled from "styled-components";
import { InputContainer, Label } from "./UI";

const Input = ({nameLabel, type, placeholder, name, saveData, value}) => (
        
        <ContainerInput>
            <Label>{nameLabel}</Label>
            <InputContainer
                $heigth={'40px'}
                type={type} 
                placeholder={placeholder} 
                name={name} 
                value={value}
                onChange={saveData} />
        </ContainerInput>
)

export default Input;

const ContainerInput = styled.div` 
    margin-top: 15px;
    width: 90%;

    @media (max-width: 700px) {
        width: 100%;
    }
`