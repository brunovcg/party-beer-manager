import styled from 'styled-components';

const MyButton = styled.button`
    width: 80px;
    height: 30px;
    background-color: ${props=>props.setColor};
    color: white;
    border: none;
    border-radius: 5px;
    margin: 5px;
    font-weight: bold;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    transition: 0.8s;
    :hover{
        opacity: 50%;
    }
`

export default MyButton;