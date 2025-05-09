// import { Checkbox } from '@mui/icons-material';
import {Box,FormControlLabel,Checkbox, FormControl,FormGroup,FormLabel} from '@mui/material';
// import BookmarkBorderIcon from '@mui/icons-material/BookMarkBorder';
// import BookMarkIcon from  '@mui/icons-material/Bookmark'
import { useState } from 'react';

export default function MuiCheckbox(){
    const [acceptTnc,setAcceptTnc] =useState(false);
    const [skill, setSkill] = useState<string[]>([]);
     console.log(skill);
    const OnChangeAccept=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setAcceptTnc(event.target.checked);
    }
    const onChangeSkill=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const index = skill.indexOf(event.target.value);
if(index == -1)
{
const [skill, setSkill] = useState<string[]>([]);
setSkill([...skill,event.target.value]);
}else{
setSkill(skill.filter((skill => skill !== event.target.value)))

}
    }

    return (
     
        <Box>
            <Box>
            <FormControlLabel  label='I Accept Terms and Conditions' 
            control={<Checkbox checked={acceptTnc} onChange={OnChangeAccept} />} />
        </Box>
        <Box>
            <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
                <FormControlLabel  label='HTML' control={<Checkbox  value='html' checked={skill.includes('html')} onChange={onChangeSkill}/>}/>
                <FormControlLabel  label='CSS' control={<Checkbox  value='css' checked={skill.includes('css')} onChange={onChangeSkill}/>}/>
                <FormControlLabel  label='Javascript' control={<Checkbox  value='Javascript' checked={skill.includes('javascript')} onChange={onChangeSkill}/>}/>
                </FormGroup>

            </FormControl>
       
        </Box>
        </Box>
    )

}