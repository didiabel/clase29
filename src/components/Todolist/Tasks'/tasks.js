import './tasks.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import React from 'react';

const tasks = (props) => {
    const {tareas, eliminarTarea} =props
    return ( 
        <>
        {tareas.length > 0 ? 
        tareas.map( tarea => (
        <div className='lista'>    
        <List sx={{ width: '100%', maxWidth: 360, marginTop: 20}}>
           <ListItem
             key={tarea.id}
             disableGutters
             secondaryAction={
           <IconButton 
              edge="end"
              aria-label="delete"
              onClick={() => eliminarTarea(tarea.id)}
              >
                 <DeleteIcon />
               </IconButton>
             }
           >
             <ListItemText primary={tarea.name} />
           </ListItem>
        </List>
        </div>
      ))

        : 
        <div className='lista'>
        <h4>no hay tareas</h4>
        </div>
        }
        </>
     );
}
 
export default tasks;