import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Button from '@mui/material/Button';
import './todilist.css'


const Todolist = (props) => {
  const {agregarTareas} =props
  const [tarea, setTarea] = useState("")
  
  const click = (e) => {
    e.preventDefault();
    agregarTareas(tarea)
    setTarea('')
   }

  return ( 
     <div className='todo'>
       <div className='contenido'>
       <Box
         component="form"
           sx={{
           '& > :not(style)': { m: 1, width: '25ch' },
           }}
         noValidate
         autoComplete="off">
         <TextField  value={tarea} onChange={(e) => setTarea(e.target.value)} id="standard-basic" label="Agrega una Tarea" variant="standard" />
       </Box>
       <Button variant="contained" onClick={click}>Agregar</Button>
      </div>
     </div>
   );
}
 
export default Todolist;
// const Todolist = () => {
//   let list = []
//   function infoItem() {
//     const [itemInfo, setInfo] = useState("");
    
//   }
  
//   const item = (e) =>{

//     console.log(itemInfo);
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//     {[1].map((value) => (
//       <ListItem
//         key={itemInfo}
//         disableGutters
//         secondaryAction={
//           <IconButton>
//             <CommentIcon />
//           </IconButton>
//         }
//       >
//         <ListItemText primary={`Line item ${value}`} />
//       </ListItem>
//     ))}
//   </List>

//   }
//   const click = () =>{
//     list.push(item())
//   }
//     return ( 
//     <div className='todo'>
//       <div className='contenido'>
//       <Box
//         component="form"
//           sx={{
//           '& > :not(style)': { m: 1, width: '25ch' },
//           }}
//         noValidate
//         autoComplete="off">
//         <TextField onChange={(e)=>item(e)} id="standard-basic" label="Standard" variant="standard" />
//       </Box>
//       <Button variant="contained" onClick={click}>Contained</Button>
//        <div className='lista'>
    
//        </div>
//       </div>
//     </div>
//     );
// }
 
// export default Todolist;