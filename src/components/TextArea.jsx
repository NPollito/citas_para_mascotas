import styled from "styled-components";
import { InputContainer, Label } from "./UI";

const TextArea = ({nameLabel, name, saveData,value}) => (
    <ContainerTextArea>
        <Label>{nameLabel}</Label>
        <InputContainer 
            as={'textarea'}
            $heigth={'60px'}
            style={{resize: 'none'}}
            name={name}
            value={value}
            onChange={saveData}
        ></InputContainer>
    </ContainerTextArea>
)

export default TextArea; 

const ContainerTextArea = styled.div`
    margin-top: 15px;
    width: 90%;

    @media (max-width: 700px) {
        width: 100%;
    }
`