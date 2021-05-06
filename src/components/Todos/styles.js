import styled from 'styled-components';

export const TodosContainer = styled.main`
    width: 80%; 
    padding: 5vh 0;
    margin-top: 3vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    background-color: rgb(255, 255, 255, 0.25);
    box-shadow: 1px 1px 10px 1px rgb(255, 255, 255, 0.25);
    border-radius:8px;
`;

export const TodoCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:90%;
    height: 5vh;
    padding: 3vh 1vw;
    margin: 2vh 0 ;
    border-top: 3px solid purple;
    background-color:#e7a6ff;
    border-radius:0px 0px 8px 8px;
`;

export const TodoCardTitle = styled.h2`
    font-size: 24px;
    font-weight: 400;
    font-family: 'Poppins';
    color: purple;
`;

export const TodoRemoveButton = styled.button`
    width: 3vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color:#ff0d0d;
    border-radius:8px;

    transform: translateX(10.4vw);
`;

export const TodoDoneButton = styled.button`
    width: 3vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color:#38ff49;
    border-radius:8px;
`;

export const ButtonIcon = styled.img`
    width: 32%;
    min-width: 24px;
`;