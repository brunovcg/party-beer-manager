import DrinkCard from '../../components/DrinkCard/DrinkCard'
import {Container, Title} from "./styles"
import {useGraduation} from '../../hooks/graduationContext'

const Graduation = () => {

    const {subGraduation, graduationList} = useGraduation();

    const remove = (product)=>{
        subGraduation(product)
    }

    return(
        <>
            <Title>Graduation</Title>
            <Container>{graduationList.map((item, index)=>
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

export default Graduation;