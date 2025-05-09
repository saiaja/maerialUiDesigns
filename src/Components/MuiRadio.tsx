import{Box,FormControl,FormLabel,FormControlLabel,Radio,RadioGroup, FormHelperText} from '@mui/material'
import { useState } from 'react';

export default function MuiRadio(){
    const [value,setValue] =useState("");
    console.log(value);
    const onChangeRadio=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
    return(
        <div>
            <Box>
                <FormControl>
                    <FormLabel id='job-experience-group-level'>
                        Years Of Experience
                    </FormLabel>
                    <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={onChangeRadio} row >
                        <FormControlLabel control={<Radio  size='medium' color='success'/>}  label='0-2' value='0-2' />
                        <FormControlLabel control={<Radio size='medium' color='primary'/>} label='3-5' value='3-5' />
                        <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='6-10' value='6-10'/>  
                    </RadioGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>

        </div>
    )

}