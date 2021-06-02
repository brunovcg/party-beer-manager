import { createContext, useState, useContext } from 'react';

const PartyContext = createContext([]);

export const PartyProvider = ({children}) => {

    const [partyList, setPartyList] = useState([])

    const addParty = (product) => {

        if (!partyList.includes(product)) {

            setPartyList([...partyList, product ])
        } else {
            alert(`${product.name} is already added for Party!`)
        }   
    }

    const subParty = (product) => {

        const newList = partyList.filter(
            (item)=>item.id !== product.id
        );


        setPartyList(newList)
    }

    return(
        <PartyContext.Provider
            value={{addParty,subParty, partyList}}
        >
            {children}
        </PartyContext.Provider>
    )
}

export const useParty = () => useContext(PartyContext);