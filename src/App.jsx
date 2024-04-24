import './App.css'
import SimpleCard from './components/SimpleCard'
import { NavBar } from './components/NavBar'
import { useContext, useEffect, useState } from 'react'
import { TodoDoContext } from './context/TodoData'
function App() {
 const {data,setData,dataState} = useContext(TodoDoContext)
 const [subData,setsubData]=useState([...data])
 
console.log(data,'data  ')
 useEffect(()=>{
switch(dataState){
  case 'All':
    setsubData([...data])
    break;
    case 'Active' :
      setsubData([...data.filter((item)=>item.state=='Active')])
    break;
    case 'completed' :
      setsubData([...data.filter((item)=>item.state=='completed')])
    break;
    default:    setsubData([...data])

}
 },[dataState,data])
  return (
    <section className='parent ' >
    <NavBar/>
    <div className="cards  flex-wrap container d-flex align-items-center justify-content-center gap-2">
      {
        data.length? subData.map((item,ind)=><div key={ind}><SimpleCard ind={ind}  item={item}/></div> ) :''
      }
     
    </div>
    </section>
  )
}

export default App
