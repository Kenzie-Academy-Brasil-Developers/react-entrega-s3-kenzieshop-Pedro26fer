import styled from "styled-components";

export const CurrentSale = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between  ;
    gap: 10px;

    background-color: #fff;
    height: 14vh;
    padding: 5px;

    border: 2px solid var(--bordersColors);
    border-radius: 4px;

    img{
        width: 13vw;
        height: 13vh;
    }

    div{
        width: 50%;
    }

    button{
        padding: 5px;
        background-color: var(--backGrounds);

        font-weight: 600;
        color: #fff;
        font-family: cursive;

        border: none;
        border-radius: 8px;

    }


`