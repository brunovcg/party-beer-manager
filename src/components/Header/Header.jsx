import HeaderContainer from './styles'
import Button from '../Button/Button'
import {useHistory} from 'react-router-dom'

const Header = () => {

    const history = useHistory();

    const goThere = (path) => {
        return history.push(path)
    }


    return(
        <HeaderContainer>
            <h2>Party Manager</h2>  

            <section>
                <div className="typeParty">
                    <Button click={()=>goThere("/")} setColor="red">Home</Button>
                    <p>{`itens: ${3}`}</p>
                </div>
                
                <div className="typeParty">
                    <Button click={()=>goThere("/party")} setColor="blue">Party</Button>
                    <p>{`itens: ${3}`}</p>
                </div>

                <div className="typeParty">
                    <Button click={()=>goThere("/marriage")} setColor="orange">Marriage</Button>
                    <p>{`itens: ${3}`}</p>
                </div>

                <div className="typeParty">
                    <Button click={()=>goThere("/graduation")} setColor="green">Graduation</Button>
                    <p>{`itens: ${3}`}</p>
                </div>
            </section>
            
        </HeaderContainer>
    )
}

export default Header