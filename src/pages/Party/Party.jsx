import DrinkCard from '../../components/DrinkCard/DrinkCard'
import {Container, Title} from "./styles"
import {useParty} from '../../hooks/partyContext'

const Party = () => {

    const {subParty, partyList} = useParty();

    const remove = (product)=>{
        subParty(product)
    }

    return(
        <>
            <Title>Party</Title>
            <Container>{partyList.map((item, index)=>
                <DrinkCard
                    key={index}
                    name={item.name}
                    image={item.image_url}
                    first_brewed={item.first_brewed} 
                    description={item.description}
                    size={`${item.volume.value} ${item.volume.unit}`}
                    isRemovable
                    remove={()=>remove(item)}
                >{item.name}
                </DrinkCard>)}
            </Container>
        </>
    )
}

export default Party;