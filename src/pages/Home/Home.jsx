import {useHome} from '../../hooks/homeContext';
import DrinkCard from '../../components/DrinkCard/DrinkCard'
import Container from "./styles"


const Home = () => {

    const {products} = useHome();
    


    return(

        <Container>{products.map((item, index)=>
            <DrinkCard
                key={index}
                name={item.name}
                image={item.image_url}
                first_brewed={item.first_brewed} 
                description={item.description}
                size={`${item.volume.value} ${item.volume.unit}`}
                product={item}

            >{item.name}
            </DrinkCard>)}
        </Container>
    )
}

export default Home;