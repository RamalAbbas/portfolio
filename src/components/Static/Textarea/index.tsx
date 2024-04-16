import { FC, ChangeEvent } from "react";
import styled from "styled-components";

interface TextareaComponent {
    type: string,
    id: string,
    name: string,
    placeholder: string,
    value: string,
    onInputChange: (name: string, value: string) => void,
}

const TextareaComponent: FC<TextareaComponent> = ({ type , placeholder , id , value , name , onInputChange }) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onInputChange(name, inputValue);
    };
    
    return (
        <>
            <Textarea
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

export default TextareaComponent;

const Textarea = styled.textarea`
    background-color: #d8d9db;
    color: rgb(24,24,24);
    border: 0;
    border-radius: 8px;
    height: 56px;
    padding: 20px 0px 20px 16px;
    width: 100%;
    outline: none;
    max-width: 608px;
    min-height: 120px;
`