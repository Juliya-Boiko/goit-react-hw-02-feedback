import styled from "styled-components";

export const StatisticsLabel = styled.p`
    width: 250px;
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.ruler.small};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.ruler.standart};
    text-shadow: 1px 1px 0 ${props => props.theme.colors.white};
    color: #61677C;
`;