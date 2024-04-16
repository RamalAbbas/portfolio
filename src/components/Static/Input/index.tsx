import { FC, ChangeEvent } from "react";

import { useGlobalStore } from "../../../provider/povider";
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
    const { theme } = useGlobalStore()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onInputChange(name, inputValue);
    };

    const dynamicInputStyles = {
        backgroundColor: theme == "light" ? "#fff" : '#d8d9db'
    }
    return (
        <>
            <Input
                id={id}
                name={name}
                type={type} 
                value={value} 
                onChange={handleChange}
                placeholder={placeholder}
                style={dynamicInputStyles}
            />
        </>
    )
}

export default InputComponent;

const Input = styled.input`
    color: rgb(24,24,24);
    border: 0;
    border-radius: 8px;
    height: 56px;
    padding: 0px 0px 0px 16px;
    width: 100%;
    outline: none;
`