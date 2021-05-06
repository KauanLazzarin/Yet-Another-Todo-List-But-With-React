import styled from 'styled-components';

export const Label = styled.label`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    filter: drop-shadow(1px 1px 2px rgb(175, 25, 255));
`;

export const Input = styled.input`
    width: 100%;
    height: 7vh;
    background-color: rgba(255, 255, 255, 0.77);

    font-size: 26px;
    text-align: center;
    font-family: 'Poppins';
    color: #4e096b;
    outline: 0;
`;

export const AddButton = styled.button`
    width: 6vw;
    height:7vh;
    background-color:green;
    font-size:16px;
    color:#4e096b;
    font-family: 'Poppins';
    border-radius: 0 10px 10px 0;
    background-color:#d87dff;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content: center;
`;

export const ButtonIcon = styled.img`
    width:40%;
    filter: drop-shadow(1px 1px 4px rgb(255, 255, 255));
`;