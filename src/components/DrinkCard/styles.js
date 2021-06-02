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
    
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    margin: 5px;
    
    .imgName{
        height: 35%;
        width: 60%;

        figure{
            height: 70%;
            margin: 0;

            img{
                height: 100%;
            }
        }

        h3{
            height: 20%;
            margin: 0;
            color: white;
            font-variant: small-caps;
        }
    }

    .detailButton{
        height: 10%;
    }

    
    .buttonContainer{

        height:35%;

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

        .buttonList{
        height: 40%;

        h5{
            margin: 15px 0 0 0;
            color: white;
            padding-top: 5px;
        }
    }


    }
   
    .size{
        height: 5%;
        font-size: 16px;
        color: white;
        font-variant: small-caps;
    }

    

    @media (max-width: 450px) {
        width: 90%;
        flex-direction: row;
        height: fit-content;
        padding: 10px;

        figure{
           height: 80%;
           width: 100%;

           img{
               width: 30%;
           }
        }



        h3{
            height: 100%;
            width: 100%;
        
        }

        .buttonContainer{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
        }

        .buttonList{
            height: 100%;
            width: 100%;

            h5{
                margin: 0;
                color: white;
                padding-top: 5px;
            }
        }

        .detailButton{
            button{
                width: 80%;
                display:flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`

export default Card