import styled from 'styled-components'

const OuterContainer = styled.div`

  text-align: center;
  height: 700px;;
  min-height: 100vh;
  width: 100vw;

  .InnerContainer {
    background: #0F2027;  
    background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027);  
    background: linear-gradient(to top, #2C5364, #203A43, #0F2027);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: blue;
    height:100%;
    width: 85%auto;

      header{
        height:  20%;
        box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
      }

      main{
      margin-top: 20px;
      width: 80vw;
      height: 65%;
      background-color: white;
      border-radius: 20px;
      padding-top:20px;
      box-sizing: border-box;
      box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
      }
  }

 


`
export default OuterContainer;





