import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CancelIcon from '@mui/icons-material/Cancel';
import { InputAdornment, TextField } from '@mui/material';


const AreaRow = (props: any) => {
    console.log("area row render called");
    return (
        <TableRow
                key={props.area.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {props.area.name}
                </TableCell>
                <TableCell align="right">
                    <TextField defaultValue={props.area.width} variant="standard" 
                    InputProps={{endAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </TableCell>
                <TableCell align="right">
                    <TextField defaultValue={props.area.depth} variant="standard" 
                    InputProps={{endAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </TableCell>
                <TableCell align="right">
                    <TextField defaultValue={props.area.height} variant="standard" 
                    InputProps={{endAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </TableCell>
                <TableCell align="right"><CancelIcon style={{ color: 'red' }}/></TableCell>
        </TableRow>
    );
}

export default AreaRow;