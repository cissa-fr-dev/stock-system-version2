import styled from 'styled-components';

export const Content = styled.button`
    width: 10rem;
    height: 2rem;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    border: none;
    border-radius: 1rem;
  
    background: #1FA774;
    box-shadow: 2px 2px 5px #0e583c;
    transition: .3s;

    &:hover{
        background: #1A885E;
        cursor: pointer;
    }
`;

export const Text = styled.h4``;