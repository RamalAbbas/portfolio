import { FC, ChangeEvent } from "react";
import styled from "styled-components";
import { useGlobalStore } from "../../../provider/povider";

interface TextareaComponentProps {
    id: string;
    name: string;
    placeholder: string;
    value: string;
    onInputChange: (name: string, value: string) => void;
}

const TextareaComponent: FC<TextareaComponentProps> = ({ placeholder , id , value , name , onInputChange }) => {
    const { theme } = useGlobalStore();

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        onInputChange(name, inputValue);
    };

    const dynamicTextAreaStyles = {
        backgroundColor: theme === "light" ? "#fff" : '#d8d9db'
    };
    return (
        <>
            <Textarea
                id={id}
                name={name}
                value={value} 
                onChange={handleChange}
                placeholder={placeholder}
                style={dynamicTextAreaStyles}
            />
        </>
    );
};

export default TextareaComponent;

const Textarea = styled.textarea`
    color: rgb(24,24,24);
    border: 0;
    border-radius: 8px;
    height: 56px;
    padding: 20px 0px 20px 16px;
    outline: none;
    max-width: 608px;
    min-height: 120px;
    width: 100%;
`;