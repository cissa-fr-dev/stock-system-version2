import styled from 'styled-components';

export const Btn = styled.button`
    width: 4.4rem;
    height: 2rem;

    padding: .2rem;
    margin: .5rem 0;

    display: flex;

    background: transparent;
    border: none;
    border-radius: 2px;

    &:hover{
        cursor: pointer; 
        color: #1FA774;     
        background: #e0e0e0; 
    }
`;

export const Content = styled.div`
    width: 80%;  
`;

export const Text = styled.h4`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;

    color: #1FA774;
    font-weight: bold;
    margin: 0 .5rem;
`;