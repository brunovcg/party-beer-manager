import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 20%;
    min-height: 150px;
    background-color: white;
    border-radius: 20px;
    box-sizing: border-box;
    
    section{
        display: flex;
        justify-content: center;
        flex-direction: row;

        .typeParty{
            width: fit-content;
            height: fit-content;

            p{
                color: grey;
                font-size: 16px;
            }
        }

        @media (max-width: 420px){
            width: 80%;
            flex-wrap: wrap;
        }
    }

    h2{
        color: grey;
        margin: 0;
        font-variant: small-caps;
        font-size: 2rem;
    }

    @media (max-width: 420px){
        height: fit-content;
            
    }

    

`

export default HeaderContainer;