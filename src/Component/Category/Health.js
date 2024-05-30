import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function Health() {
 
    const [filter, setFilter] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };





  return (
    <div className='md:px-0 mx-auto md:w-[87%] flex flex-col  h-max my-10 '>
    <div className='flex flex-row justify-between'>
      <p>category/-----</p>
      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Filter</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filter}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Discount</MenuItem>
        <MenuItem value={20}>Relevance</MenuItem>
        <MenuItem value={30}>a-z</MenuItem>
      </Select>
    </FormControl>
      </div>
    </div>     
     <div className='flex flex-wrap gap-3 px-3 '>
      <HomeSectionCard/>
      <HomeSectionCard/>
      <HomeSectionCard/>
      <HomeSectionCard/>
      <HomeSectionCard/>
      <HomeSectionCard/>

      </div>
    </div>
    )
}

export default Health