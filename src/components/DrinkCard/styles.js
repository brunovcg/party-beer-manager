import styled from 'styled-components';

const Card = styled.div`

    background: #294D5D;  
    border-radius: 10px;
    width: 30%; 
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    font-size: 15px;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    margin: 5px;
    
    figure{
        height: 30%;
        margin: 0;

        img{
            height: 100%;
        }
    }

    h3{
        height: 10%;
        margin: 0;
        color: white;
        font-variant: small-caps;
    }

    .fab{
        height: 5%;
        font-size: 14px;
        color: yellow;
        font-variant: small-caps;
    }

    .description{
        height: 5%;
        font-size: 16px;
        color: yellow;
        font-variant: small-caps;
    }

    .size{
        height: 5%;
        font-size: 16px;
        color: white;
        font-variant: small-caps;
    }

    .buttonList{
        height: 40%;

        h5{
            margin: 0;
            color: white;
            padding-top: 5px;
        }
    }

    @media (max-width: 450px) {
        width: 80%;
        flex-direction: row;
        height: fit-content;
        padding: 10px;

        figure{
            height: 10%;
            width: 100%;

            img{
                width: 100%;
            }
        }

        h3{
            height: 100%;
            width: 20%;
        
        }

        .fab{
            display: none;
        }

        .description{
            display: none;
        }

        .size{
            display: none;;
        }

        .buttonList{
            height: 100%;
            width: 40%;

            h5{
                margin: 0;
                color: white;
                padding-top: 5px;
            }
        }
    }
`

export default Card