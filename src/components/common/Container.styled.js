import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${props => props.theme.ruler.double};
    background-color: ${props => props.theme.colors.bgc};
`;