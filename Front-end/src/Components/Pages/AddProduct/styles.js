import styled from 'styled-components';

export const Content = styled.div`
    padding-bottom: 4rem;
    width: 100vw;
    height: 100%;

    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items:  center;
`;

export const Hr = styled.hr`
    width: 80%;
    border-top: .5px solid #c1c1c1;
`;

export const Table = styled.div`
    width: 100%;
    max-height: 25rem; 

    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TableContent = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
`;

export const TableItems = styled.table`
    width: 80%;    
    border-collapse: collapse;
`;

export const TableHead = styled.thead`
    height: 1rem;
    width: 100%;
`;

export const TrTitle = styled.tr`
    background: #dfdede;
`;

export const TrItems = styled.tr`
    background: #c4ebdb;

    &:hover {    
        cursor: pointer;    
        background: linear-gradient(180deg, #6bc5a3, #aed7c6);
    }
`;

export const Th = styled.th`
    padding: 8px;
    text-align: left;
    border-top: 1px solid #bebebe;
`;

export const Td = styled.td`
    padding: 8px;
    text-align: left;
    border-top: 1px solid #bebebe;
`;

export const Actions = styled.th`   
    padding: 8px;    
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid #bebebe;
`;

export const TableBody = styled.tbody``;

export const Message = styled.div`
    position: fixed;
    height: 5rem;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #90e4c1;
`;