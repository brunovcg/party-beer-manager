import HeaderContainer from './styles'
import Button from '../Button/Button'
import {useHistory} from 'react-router-dom'
import { useGraduation } from '../../hooks/graduationContext';
import { useMarriage } from '../../hooks/marriageContext';
import { useParty } from '../../hooks/partyContext';

const Header = () => {

    const history = useHistory();

    const goThere = (path) => {
        return history.push(path)
    }

    const {graduationList} = useGraduation()
    const {marriageList} = useMarriage()
    const {partyList} = useParty()

    return(
        <HeaderContainer>
            <h2>Party Manager</h2>  

            <section>
                <div className="typeParty">
                    <Button click={()=>goThere("/")} setColor="red">Home</Button>
                </div>
                
                <div className="typeParty">
                    <Button click={()=>goThere("/party")} setColor="blue">Party</Button>
                    <p>{`itens: ${partyList.length}`}</p>
                </div>

                <div className="typeParty">
                    <Button click={()=>goThere("/marriage")} setColor="orange">Marriage</Button>
                    <p>{`itens: ${marriageList.length}`}</p>
                </div>

                <div className="typeParty">
                    <Button click={()=>goThere("/graduation")} setColor="green">Graduation</Button>
                    <p>{`itens: ${graduationList.length}`}</p>
                </div>
            </section>
            
        </HeaderContainer>
    )
}

export default Header