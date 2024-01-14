import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CancelIcon from '@mui/icons-material/Cancel';
import { InputAdornment, LinearProgress, MenuItem, Select, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { getAreaComponent, getCategoryMaterials, getStageTasks } from '../../services/apis';
import { MaterialState, TaskState } from '../../redux/slices/projectSlice';
import { getValue } from '@testing-library/user-event/dist/utils';


const ScheduleRow = (props: any) => {
    const [stage_tasks, setStageTasks] = useState([])
    const [task_materials, setTaskMaterials] = useState([])
    const task_ref = React.useRef<TaskState | null>(null);
    const material_ref = React.useRef<MaterialState | null>(null);
    const [task_loading, setTask_loading] = useState(false);
    const [material_loading, setMaterialLoading] = useState(false);

    const getDefaultQuantityValue = () => {
        if (props.task.pricing){
            return props.task.pricing.quantity;
        }
        return "";
    }

    const [quantity, setQuantity ] = useState(getDefaultQuantityValue());
    const [toggle, setToggle] = useState(false);
    
    console.log("printing def hahs");
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
        setTask_loading(true);
        const results = await getStageTasks(stage_id);
        setStageTasks(results.data);
        setTask_loading(false);
    }

    const fetchMaterial = async(category_id: any) => {
        console.log("fetch material called with: "+category_id);
        setMaterialLoading(true);
        if (category_id == null || category_id == -1){
            setTaskMaterials([]);
        }else{
            const results = await getCategoryMaterials(category_id)
            setTaskMaterials(results.data);
        }
        setMaterialLoading(false);
    }

    const fetchAreaComponent = async(component_area_id: number) => {
        const area_id = props.area_id;
        if (area_id){
            const results = await getAreaComponent(props.area_id, component_area_id);
            const value = results.data.value;
            setQuantity(value);
        }

    }

    const taskHandleChange = (e: any) => {
        e.preventDefault();
        const tasks = stage_tasks.filter((stage_task) => {
            return stage_task["id"] == e.target.value;
        })
        material_ref.current = null;
        task_ref.current = tasks[0];
        fetchAreaComponent(task_ref.current["component_area_id"]);
        fetchMaterial(task_ref.current["material_category_id"]);
    }

    const materialHandleChange = (e: any) => {
        e.preventDefault();
        const materials = task_materials.filter((task_material) => {
            return task_material["id"] == e.target.value;
        })
        material_ref.current = materials[0];
        setToggle(toggle!);
    }

    const setCustomQuantity = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log("on change getting called");
        setQuantity(event.target.value);
    }


    const getTasksMenuItems = () => {
        if (stage_tasks.length > 0){
            return stage_tasks.map((stage_task) =>(
                <MenuItem value={stage_task["id"]}>
                    {stage_task["display_name"]}
                </MenuItem>
            ))
        }else{
            return (<MenuItem value={props.task.task.id}>
                        {props.task.task.display_name}
                    </MenuItem>
                )
        }
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
        if (task_ref.current == null){
            return props.task.pricing.material_unit_cost;
        }else{
            if (material_ref.current != null){
                return material_ref.current["price"];
            }
            return 0;
        }
    }

    const getTaskTotalUnitPrice = () => {
        const material_unit_price = Number.parseFloat(getTaskMaterialUnitPrice());
        const labour_unit_price = Number.parseFloat(getTaskLabourUnitPrice());
        return (material_unit_price + labour_unit_price).toFixed(2);
    }

    const getLineTotal = () => {
        const quantityValue = Number.parseFloat(quantity);
        const total_unit_cost = Number.parseFloat(getTaskTotalUnitPrice());
        return (quantityValue*total_unit_cost).toFixed(2);
    }

    const getTaskDefaultValue = () => {
        if (task_ref.current){
            return task_ref.current["id"]
        }
        return props.task.task.id;
    }

    const getQuantityValue = () => {
        return quantity;
    }
    
    return (
        <TableRow>
            <TableCell colSpan={2} size='small'>
                <Select
                    labelId="task_select_dropdown"
                    defaultValue={getTaskDefaultValue()}
                    label="Task"
                    onClick={handleClick("task")}
                    onChange={taskHandleChange}
                    style={{maxWidth: "100%", width: "100%"}}
                >
                    {getTasksMenuItems()}

                </Select>
                {task_loading? (<LinearProgress style={{marginTop: "2px"}} />): (
                    <span/>
                )}
                
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
                {material_loading? (<LinearProgress style={{marginTop: "2px"}} />): (
                    <span/>
                )}
            </TableCell>
            <TableCell>
            <TextField variant="outlined" onChange={setCustomQuantity} value={getQuantityValue()}
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