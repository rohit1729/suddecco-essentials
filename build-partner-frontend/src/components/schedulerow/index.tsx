import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CancelIcon from '@mui/icons-material/Cancel';
import { InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { getCategoryMaterials, getStageTasks } from '../../services/apis';
import { MaterialState, TaskState } from '../../redux/slices/projectSlice';


const ScheduleRow = (props: any) => {
    const [stage_tasks, setStageTasks] = useState([])
    const [task_materials, setTaskMaterials] = useState([])
    const task_ref = React.useRef<TaskState | null>(null);
    const material_ref = React.useRef<MaterialState | null>(null);
    
    console.log("printing props hahs");
    console.log(props);
    const handleClick = (type: string) => {
        return (event: React.MouseEvent) => {
            if (type == "task"){
                if (stage_tasks.length == 0){
                    fetchTasks(props.task.task.stage_id)
                }
            }
            if (type == "material"){
                if (task_ref.current != null){
                    fetchMaterial(task_ref.current["material_category_id"])
                }
            }
        }
    };
    
    const fetchTasks = async(stage_id: number) => {
        const results = await getStageTasks(stage_id);
        setStageTasks(results.data);
    }

    const fetchMaterial = async(category_id: any) => {
        const results = await getCategoryMaterials(category_id)
        setTaskMaterials(results.data);
    }

    const taskHandleChange = (e: any) => {
        e.preventDefault();
        const tasks = stage_tasks.filter((stage_task) => {
            return stage_task["id"] == e.target.value;
        })
        task_ref.current = tasks[0];
    }

    const materialHandleChange = (e: any) => {
        e.preventDefault();
        material_ref.current = e.target.value
    }

    const getTasksMenuItems = () => {
        return stage_tasks.map((stage_task) =>(
            <MenuItem value={stage_task["id"]}>
                {stage_task["display_name"]}
            </MenuItem>
        ))
    }

    const getMaterialMenuItems = () => {
        if (task_materials.length > 0){
            const menuItems: JSX.Element[] = [];
            task_materials.forEach((task_material) => {
                menuItems.push(<MenuItem value={task_material["id"]}> {task_material["name"]} </MenuItem>)
            })
            return menuItems;
        }else{
            return (<MenuItem value={props.task.material.id}>{props.task.material.name}</MenuItem>)
        }
    }

    const getDefaultQuantity = () => {
        console.log(props.task.pricing);
        if (props.task.pricing.quantity){
            return props.task.pricing.quantity
        }
        return "";
    }

    const getTaskUnit = () => {
        if (task_ref.current != null){
            return task_ref.current["unit_name"];
        }
        return props.task.task["unit_name"];
    }

    const getTaskLabourUnitPrice = () => {
        if (task_ref.current != null){
            return task_ref.current["labour_unit_cost"];
        }
        return props.task.pricing.labour_unit_cost;
    }

    const getTaskMaterialUnitPrice = () => {
        if (task_ref.current != null){
            return task_ref.current["material_unit_cost"];
        }
        return props.task.pricing.material_unit_cost;
    }

    const getTaskTotalUnitPrice = () => {
        const material_unit_price = Number.parseFloat(getTaskMaterialUnitPrice());
        const labour_unit_price = Number.parseFloat(getTaskLabourUnitPrice());
        return (material_unit_price + labour_unit_price).toFixed(2);
    }

    const getLineTotal = () => {
        const quantity = Number.parseFloat(getDefaultQuantity());
        const total_unit_cost = Number.parseFloat(getTaskTotalUnitPrice());
        return (quantity*total_unit_cost).toFixed(2);
    }

    return (
        <TableRow>
            <TableCell colSpan={2} size='small'>
                <Select
                    labelId="task_select_dropdown"
                    defaultValue={props.task.task.id}
                    label="Task"
                    onClick={handleClick("task")}
                    onChange={taskHandleChange}
                    style={{maxWidth: "100%"}}
                    
                >
                    {stage_tasks.length > 0 ? (
                        getTasksMenuItems()
                    ):(
                        <MenuItem value={props.task.task.id}>
                            {props.task.task.display_name}
                        </MenuItem>
                    )}

                </Select>
            </TableCell>
            <TableCell colSpan={2}>
                {props.task.material ? (
                <Select
                    labelId="material_dropdown"
                    defaultValue={props.task.material.id}
                    label="Specification"
                    onClick={handleClick("material")}
                    onChange={materialHandleChange}
                    style={{maxWidth: "100%", width: "100%"}}
                >
                    {getMaterialMenuItems()}

                </Select> 
                ): (
                    <div></div>
                )}
            </TableCell>
            <TableCell>
                <TextField variant="outlined" defaultValue={getDefaultQuantity()}
                    InputProps={{
                        endAdornment: <InputAdornment position="start">{getTaskUnit()}</InputAdornment>,
                    }}>
                    </TextField>
            </TableCell>
            <TableCell>
                &#163; {getTaskLabourUnitPrice()}
            </TableCell>
            <TableCell>
                &#163; {getTaskMaterialUnitPrice()}
            </TableCell>
            <TableCell>
                &#163; {getTaskTotalUnitPrice()}
            </TableCell>
            <TableCell>
                &#163; {getLineTotal()}
            </TableCell>
        </TableRow>
    );
}

export default ScheduleRow;