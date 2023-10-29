import { createContext, useState } from "react";
import PropTypes from "prop-types"




 export const StockContext = createContext({})


StockContextProvider.propTypes = {
    children:PropTypes.node
}
export function StockContextProvider({ children }) {
  const [itens, setItens] = useState(() => {
    const storedItens = localStorage.getItem("estoquewzx");

    if (!storedItens) {
      return [];
    } else {
      const itens = JSON.parse(storedItens);

      itens.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
        item.updatedAt = new Date(item.updatedAt);
      });

      return itens; // Se houver itens no localStorage, analise e retorne a lista
    }
  });

     const addItem = (item)=>{
        setItens(currentState =>{
            const updatedItens = [item, ...currentState]
            localStorage.setItem("estoquewzx", JSON.stringify(updatedItens))
            return updatedItens
        })
     }
     const deleteItem = (itemId) =>{
      setItens(currentState=>{
        const updatedItens = currentState.filter(item=> item.id !==itemId)
        localStorage.setItem("estoquewzx", JSON.stringify(updatedItens))
        return updatedItens
      })
     }
     const getItem = (itemId)=>{
      return itens.find(item => item.id === +itemId)

     }
     const updateItem = (itemId, newAtributes) => {
      setItens((currentState) => {
        const itemIndex = currentState.findIndex((item) => item.id === +itemId);
        const updatedItens = [...currentState];
        Object.assign(updatedItens[itemIndex], newAtributes, { updatedAt: new Date() });
        localStorage.setItem("estoquewzx", JSON.stringify(updatedItens));
        return updatedItens;
      });
    };
    
     const stock = {
        itens,
        addItem,
        deleteItem,
        getItem,
        updateItem
     }


    return(
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
 }
