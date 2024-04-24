import { createContext, useEffect, useState } from "react";

export const TodoDoContext = createContext('')
const TodoContentProvider = ( {children}) =>{
    const [data,setData]=useState([])
    const [dataState,setDataState]=useState('All')
    useEffect(()=>{
        const localData = JSON.parse(localStorage.getItem('data'))
        if(localData){
            setData([...localData])
        }
    },[])
    return <TodoDoContext.Provider value={{data,setData,dataState,setDataState}}>
        {children}
    </TodoDoContext.Provider>
}
export default TodoContentProvider ;