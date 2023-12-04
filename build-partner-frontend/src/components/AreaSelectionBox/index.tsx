import React from 'react';
import style from './areaselection.module.css'
import Box from '@mui/material/Box';
import { Button, Card, CardContent, IconButton, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const AreaSelectionBox = (props: any) => {
    const [count, setCount] = React.useState(0);

    const handleChangeClick = (add: boolean) => {
        return (event: React.MouseEvent) => {
            if (add){
                setCount(count+1);
            }else{
                setCount(count-1);
            }
            event.preventDefault();
        }
    };

    return (
      <div >
        <Box sx={{ width: 240, height: 240, marginLeft: "16px" }}>
            <div>
                <Card>
                    <CardContent style={{paddingTop: "8px", paddingBottom: "0px"}}>
                        <img src={props.image} style={{width: "128px", height: "128px"}}/>
                        <div>
                            <h5>{props.name}</h5>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                        <IconButton onClick={handleChangeClick(false)} style={{border: "1px solid", borderRadius: "4px", height: "24px", width:"24px"}} 
                            aria-label="delete" color="primary">
                            <RemoveIcon style={{width:"16px", height: "16px"}} />
                        </IconButton>
                        <p style={{marginLeft: "16px", marginRight: "16px"}}>{count}</p>
                        <IconButton onClick={handleChangeClick(true)}  style={{border: "1px solid", borderRadius: "4px", height: "24px", width:"24px"}} 
                            aria-label="delete" color="primary">
                            <AddIcon style={{width:"16px", height: "16px"}} />
                        </IconButton>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Box>    
      </div>
    );
}

export default AreaSelectionBox;