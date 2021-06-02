import {useHome} from '../../hooks/homeContext';
import DrinkCard from '../../components/DrinkCard/DrinkCard'


const Home = () => {

    const {products} = useHome();


    return(

        <>
        <DrinkCard></DrinkCard>
        <div>{products.map(item=><div>{item.name}</div>)}</div>
        </>
    )
}

export default Home;