import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TodoDoContext } from '../context/TodoData';

export default function SelectDropDown() {
  const [state, setState] = React.useState('All');
const{setDataState}=React.useContext(TodoDoContext)
  const handleChange = (event) => {
    setState(event.target.value);
    setDataState(event.target.value)
  };
  return (
    <Box sx={{ minWidth: 50 }} className='border bg-white rounded'>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem  value={'All'}>All</MenuItem>
          <MenuItem value={'Active'}>Active</MenuItem>
          <MenuItem value={'completed'}>completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}