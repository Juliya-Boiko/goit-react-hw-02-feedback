import styled from "styled-components";

export const FeedbackOptionsList = styled.ul`
    display: flex;
    margin: 0 -${props => props.theme.ruler.small};
`;

export const FeedbackOptionsListItem = styled.li`
    margin: 0 ${props => props.theme.ruler.small};
`;

export const FeedbackButton = styled.button`
  width: ${props => props.theme.ruler.big};
  border: none;
  outline: none;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.ruler.standart};
  border-radius: ${props => props.theme.ruler.double};
  padding: ${props => props.theme.ruler.standart};
  background-color: ${props => props.theme.colors.bgc};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.white};
    box-shadow: -5px -5px 20px ${props => props.theme.colors.white},  5px 5px 20px ${props => props.theme.colors.shadow};
  cursor: pointer;
  color: #61677C;
`;