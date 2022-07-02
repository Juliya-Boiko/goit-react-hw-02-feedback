import styled from "styled-components";

export const StatisticsLabel = styled.p`
    min-width: 250px;
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.ruler.small};
    font-weight: ${props => props.theme.fontWeight.normal};
    font-size: ${props => props.theme.ruler.standart};
    color: ${props => props.theme.colors.primary};
`;