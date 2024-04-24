import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import { TodoDoContext } from '../context/TodoData';
export default function SimpleCard({item}) {
  const {setData,data}=useContext(TodoDoContext)
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );
const [itemState,setitem]=useState(item)
  const CompletedTask= () =>{
    item.state='completed'
    setitem({...item})
    localStorage.setItem('data', JSON.stringify([...data]))
  }
  const DeleteTask = () => {
const deletedData = data.filter(({id})=>id!=item.id) 
setData([...deletedData])
localStorage.setItem('data', JSON.stringify([...deletedData]))

  }
  console.log(item)
  return (
    <Card sx={{minWidth:275,maxWidth:275,minHeight:175,overflowX:'scroll'}}  className='d-flex flex-column justify-content-between' style={{backgroundColor:`${item.color}`}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className='text-center shadow-sm text-dark  border rounded'>
         {item.title}
        </Typography>
        <Typography variant="body2" className='d-flex gap-2  my-2'>
        

          <b>description:</b>
          <span >{item.description}</span>
        
        </Typography>
        <Typography variant="body2"  className='d-flex gap-2 my-2'>
        <b>date:</b>
          <span>{item.Tdate}</span>
       
        </Typography>
      </CardContent>
      <CardActions>
        {
          item.state=='Active'?<Button  style={{ backgroundColor: "rgba(164, 255, 0, 1)    " }} className='border w-100 text-center text-dark rounded  ' onClick={CompletedTask} size="small">Done</Button>:<Button className='border w-100 text-center rounded bg-danger text-white'>completed</Button>
        }
        <Button className='border  text-center rounded bg-danger text-white' onClick={DeleteTask}><small>delete
          </small></Button>
      </CardActions>
    </Card>
  );
}