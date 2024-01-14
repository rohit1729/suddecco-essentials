import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CancelIcon from '@mui/icons-material/Cancel';
import { InputAdornment, TextField } from '@mui/material';
import { useDispatch } from 'react-redux'
import React, { useRef, useState } from 'react';
import { AreaState } from '../../redux/slices/projectSlice';
import { updateModifiedAreas } from '../../redux/slices/projectSlice';

// CustomObject.js
class CustomObject {
    param: string

    constructor(param: string) {
      this.param = param;
    }
  }

const AreaRow = (props: any) => {
    const dispatch = useDispatch();
    const customObjectRef = React.useRef(new CustomObject('initialValue'));
    const area_ref = React.useRef<AreaState | null>(null);
    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const classes = event.target.className;
        if (area_ref.current == null){
            const area_clone: AreaState = {
                id: props.area.id,
                project_id: props.area.project_id,
                reference_area_id: props.area.reference_area_id,
                name: props.area.name,
                width: props.area.width,
                height: props.area.height,
                depth: props.area.depth,
                wall_area: props.area.wall_area,
                floor_area: props.area.floor_area,
                ceiling_area: props.area.ceiling_area,
                doors: props.area.doors,
                windows: props.area.windows,
                perimeter: props.area.perimeter
            }
            area_ref.current = area_clone;
        }
        if (area_ref.current != null){
            if (classes.includes("area_width_field")) {
                area_ref.current.width = Number.parseFloat(event.target.value);
            }   
            if (classes.includes("area_depth_field")) {
                area_ref.current.depth = Number.parseFloat(event.target.value);
            }
            if (classes.includes("area_height_field")) {
                area_ref.current.height = Number.parseFloat(event.target.value);
            }
            dispatch(updateModifiedAreas(area_ref.current));
        }
    }
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
                    <TextField inputProps={{className: "area_width_field"}} defaultValue={props.area.width} variant="standard" onChange={handleTextFieldChange}
                    InputProps={{endAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </TableCell>
                <TableCell align="right">
                    <TextField inputProps={{className: "area_depth_field"}} defaultValue={props.area.depth} variant="standard" onChange={handleTextFieldChange}
                    InputProps={{endAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </TableCell>
                <TableCell align="right">
                    <TextField inputProps={{className: "area_height_field"}} defaultValue={props.area.height} variant="standard" onChange={handleTextFieldChange}
                    InputProps={{endAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </TableCell>
                <TableCell align="right"><CancelIcon style={{ color: 'red' }}/></TableCell>
        </TableRow>
    );
}

export default AreaRow;