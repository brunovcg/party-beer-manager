import Card from './styles';
import Button from '../Button/Button'
import {useState} from 'react'
import {useGraduation} from '../../hooks/graduationContext'
import { useMarriage } from '../../hooks/marriageContext';
import { useParty } from '../../hooks/partyContext'

const DrinkCard = ({name, image, first_brewed, description, size, isRemovable, product, remove}) => {

    const [details, setDetails] = useState(false)

    const showDetails = () => {

      setDetails(!details)
    }

    const {addGraduation} = useGraduation();
    const {addMarriage} = useMarriage();
    const {addParty} = useParty();

    return(
        <Card>
            <section className="imgName">
                <figure><img src={image} alt="foto" /></figure>
                <h3>{name}</h3>
            </section>

            <section className="detailButton">
                <Button 
                    setColor="darkgray"
                    click={showDetails}
                    >{details ? "esconder" : "detalhes"}
                </Button>
            </section>

            <section className= "buttonContainer">
                { details ?
                <div className="details">
                    <div className="fab">since: {first_brewed}</div>
                    <div className="description">{description}</div>
                    <div className="size">{size}</div>
                   
                </div>
                :
                <div className="buttonList">
                    {isRemovable 
                        ?   <Button 
                                setColor="red"
                                click={()=>remove()}
                            >Remover
                            </Button>
                        : <div>
                            <h5>Add to:</h5>
                            <Button 
                                click={()=>addParty(product)}
                                setColor="blue"
                             >Party
                            </Button>

                            <Button
                                click={()=>addMarriage(product)} 
                                setColor="orange"
                             >Mariage
                            </Button>

                            <Button 
                                click={()=>addGraduation(product)} 
                                setColor="green"
                              >Graduation
                            </Button>
                        </div>
                    }   
                </div>
            }
            </section>
        </Card>
    )
}

export default DrinkCard;