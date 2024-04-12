import { FC } from 'react';
import styled from 'styled-components';

interface CardTypes {
    technology: string;
    documentation: string;
    logo: string;
}

const TechnologoyCard: FC<{ data: CardTypes }> = ({ data , forwardFunc }) => {
    return (
        <div>
            <TechonologyCardLogo
                src={data.logo}
                alt={data.technology}
                onClick={() => forwardFunc(data.documentation)}
            />
        </div>
    )
}

export default TechnologoyCard;

const TechonologyCardLogo = styled.img`
    width: 120px;
    height: 120px;
    cursor: pointer;
`;