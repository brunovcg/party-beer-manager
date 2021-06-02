import DrinkCard from '../../components/DrinkCard/DrinkCard'
import Container from "./styles"
import {useGraduation} from '../../hooks/graduationContext'

const Graduation = () => {

    const {addGraduation, subGraduation, graduationList} = useGraduation();


    return(
        <Container>{graduationList.map((item, index)=>
            <DrinkCard
                key={index}
                name={item.name}
                image={item.image_url}
                first_brewed={item.first_brewed} 
                description={item.description}
                size={`${item.volume.value} ${item.volume.unit}`}
                isRemovable
            >{item.name}
            </DrinkCard>)}
        </Container>
    )
}

export default Graduation;