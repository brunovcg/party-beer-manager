import { createContext, useState, useContext } from 'react';

const MarriageContext = createContext([]);

export const MarriageProvider = ({children}) => {

    const [marriageList, setMarriageList] = useState([])

    const addMarriage = (product) => {

        if (!marriageList.includes(product)) {

            setMarriageList([...marriageList, product ])
        } else {
            alert(`${product.name} is already added for Marriage!`)
        }   
    }

    const subMarriage = (product) => {

        const newList = marriageList.filter(
            (item)=>item.id !== product.id
        );
        setMarriageList(newList)
    }

    return(
        <MarriageContext.Provider
            value={{addMarriage,subMarriage, marriageList}}
        >
            {children}
        </MarriageContext.Provider>
    )
}

export const useMarriage = () => useContext(MarriageContext);