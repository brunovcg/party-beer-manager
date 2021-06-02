import Card from './styles';
import Button from '../Button/Button'

const DrinkCard = ({isRemovable}) => {


    return(
        <Card>
            <figure><img src="" alt="foto" /></figure>
            <h3>Name</h3>
            <div className="fab">Init Fab</div>
            <div className="description">Desc</div>
            <div className="size">10L</div>

            <div className="buttonList">
                {isRemovable 
                    ? <Button setColor="red">Remover</Button>
                    : <div>
                            <h5>Add to:</h5>
                            <Button setColor="blue">Party</Button>
                            <Button setColor="orange">Mariage</Button>
                            <Button setColor="green">Graduation</Button>
                    </div>
                }
                
                
                
            </div>



        </Card>
    )
}

export default DrinkCard;