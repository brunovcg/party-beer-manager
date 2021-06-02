import { createContext, useState, useContext } from 'react';

const GraduationContext = createContext([]);

export const GraduationProvider = ({children}) => {

    const [graduationList, setGraduationList] = useState([])
   

    const addGraduation = (product) => {
        setGraduationList([...graduationList, product ])
    }

    const subGraduation = (product) => {

        const newList = graduationList.filter(
            (item)=>item.name !== product.name
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