import styled from "styled-components"


import { useGlobalStore } from "../../../provider/povider"

interface LabelTypes {
    value: string,
    forId: string
}

const Label = ({ value , forId }:LabelTypes) => {
    const { theme } = useGlobalStore()

    const customStyle = {
        color: theme == "light" ? "#181818" : '#fff'
    }

    return (
        <CustomLabel style={customStyle} htmlFor={forId}>
            {
                value
            }
        </CustomLabel>
    )
}

export default Label

const CustomLabel = styled.label``