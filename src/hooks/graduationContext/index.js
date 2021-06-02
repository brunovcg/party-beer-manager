import { createContext, useState, useContext } from 'react';

const GraduationContext = createContext([]);

export const GraduationProvider = ({children}) => {

    const [graduationList, setGraduationList] = useState([])

    const addGraduation = (product) => {

        if (!graduationList.includes(product)) {

            setGraduationList([...graduationList, product ])
        } else {
            alert(`${product.name} is already added for Graduation!`)
        }   
    }

    const subGraduation = (product) => {

        const newList = graduationList.filter(
            (item)=>item.id !== product.id
        );
        setGraduationList(newList)
    }

    return(
        <GraduationContext.Provider
            value={{addGraduation,subGraduation, graduationList}}
        >
            {children}
        </GraduationContext.Provider>
    )
}

export const useGraduation = () => useContext(GraduationContext);