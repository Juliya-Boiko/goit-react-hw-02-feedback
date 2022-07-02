import styled from "styled-components";

export const NotificationMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: ${props => props.theme.fontWeight.normal};
    font-size: ${props => props.theme.ruler.double};
    color: ${props => props.theme.colors.shadow};
`;

export const NotificationText = styled.p`
    margin-bottom: ${props => props.theme.ruler.standart};
`