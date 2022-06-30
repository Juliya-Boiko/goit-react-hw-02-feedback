import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${props => props.theme.ruler.standart};
`;

export const SectionTitle = styled.h2`
    margin-bottom: ${props => props.theme.ruler.double};
    text-align: center;
    font-size: ${props => props.theme.ruler.double};
    color: ${props => props.theme.colors.shadow};
    text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
`;