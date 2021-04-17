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
    transition: .3s;

    &:hover{
        background: #1A885E;
        cursor: pointer;
    }
`;

export const Text = styled.h4``;