import Card from './styles';
import Button from '../Button/Button'
import {useState} from 'react'
import {useGraduation} from '../../hooks/graduationContext'

const DrinkCard = ({name, image, first_brewed, description, size, isRemovable, product}) => {

    const [details, setDetails] = useState(false)

    const showDetails = () => {

      setDetails(!details)
    }

    const {addGraduation, subGraduation} = useGraduation();


    return(
        <Card>
            <figure><img src={image} alt="foto" /></figure>
            <h3>{name}</h3>
            <Button 
                setColor="darkgray"
                click={showDetails}
                >{details ? "esconder" : "detalhes"}
            </Button>

            <div className= "bottomContainer">
                { details ?
                <div className="details">
                    <div className="fab">since: {first_brewed}</div>
                    <div className="description">{description}</div>
                    <div className="size">{size}</div>
                   
                </div>
                :
                <div className="buttonList">
                    {isRemovable 
                        ? <Button setColor="red">Remover</Button>
                        : <div>
                            <h5>Add to:</h5>
                            <Button setColor="blue">Party</Button>
                            <Button setColor="orange">Mariage</Button>
                            <Button click={()=>addGraduation(product)} setColor="green">Graduation</Button>
                        </div>
                    }   
                </div>
            }

            </div>



        </Card>
    )
}

export default DrinkCard;