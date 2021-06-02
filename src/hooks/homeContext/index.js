import { createContext, useEffect, useState, useContext } from 'react';
import api from '../../services/api';

const HomeContext = createContext([]);

export const HomeProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const productDownload = () => api.get().then(response=> setProducts(response.data))

    useEffect(()=>{productDownload()},[]);

    return(
        <HomeContext.Provider
            value={{products}}
        >
            {children}
        </HomeContext.Provider>
    )
}

export const useHome = () => useContext(HomeContext);