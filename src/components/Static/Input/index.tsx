import { FC, ChangeEvent } from "react";
import styled from "styled-components";

interface InputTypes {
    type: string,
    id: string,
    name: string,
    placeholder: string,
    value: string,
    onInputChange: (name: string, value: string) => void,
}

const InputComponent: FC<InputTypes> = ({ type , placeholder , id , value , name , onInputChange }) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onInputChange(name, inputValue);
    };
    
    return (
        <>
            <Input
                id={id}
                name={name}
                type={type} 
                value={value} 
                onChange={handleChange}
                placeholder={placeholder}
            />
        </>
    )
}

export default InputComponent;

const Input = styled.input`
    background-color: #d8d9db;
    color: rgb(24,24,24);
    border: 0;
    border-radius: 8px;
    height: 56px;
    padding: 0px 0px 0px 16px;
    width: 100%;
    outline: none;
`