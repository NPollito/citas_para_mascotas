import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    padding: 25px 40px;
    border-radius: 25px 0 0 25px;

    h2 {
        color: #ffffff;
    }

    @media (max-width: 850px) {
        padding: 25px 30px;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`

export const  Button = styled.button`
    margin-top: 15px;
    padding: ${({$padding}) => $padding && $padding };
    background-color: #f8b179;
    font-weight: bold;
    color: #161e31;
    font-size: ${({$fontSize}) => $fontSize ? $fontSize : '16px'};
    border: none;
    cursor: pointer;

    &:hover {
        color: #f8b179;
        background-color: #161e31;
    }
`

export const InputContainer = styled.input`
    margin-top: 5px;
    padding: 10px;
    width: 100%;
    height: ${({$heigth}) => $heigth && $heigth};
    background-color: #424669;
    color: #ffffff;
    border: none;
    outline: none;
`

export const Label = styled.label`
    font-size: 15px;
    color: #676f9d;
`