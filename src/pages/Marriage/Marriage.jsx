import DrinkCard from '../../components/DrinkCard/DrinkCard'
import {Container, Title} from "./styles"
import {useMarriage} from '../../hooks/marriageContext'


const Marriage = () => {

    const {subMarriage, marriageList} = useMarriage();

    const remove = (product)=>{
        subMarriage(product)
    }


    return(
        <>
        <Title>Marriage</Title>
        <Container>{marriageList.map((item, index)=>
            
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

export default Marriage;