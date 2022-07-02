import styled from "styled-components";

export const PrimaryButton = styled.button`
    width: 10rem;
    height: 3rem;
    margin: 5px 0;
    border: none;
    border-radius: 1rem;
    text-align: center;
    text-transform: uppercase;
    box-shadow: .3rem .3rem .6rem #c8d0e7, 
    -.2rem -.2rem .5rem white;
    cursor: pointer;
    transition: all .3s ease;
    :hover {
        color: ${props => props.theme.colors.red};
    }
    :active {
        box-shadow: inset .2rem .2rem .5rem #c8d0e7, 
        inset -.2rem -.2rem .5rem white;
    }
`;