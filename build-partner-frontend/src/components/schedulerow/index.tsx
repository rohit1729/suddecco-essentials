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
        task_ref.current = e.target.value
    }

    const materialHandleChange = (e: any) => {
        e.preventDefault();
        material_ref.current = e.target.value
    }

    return (
        <TableRow>
            <TableCell>
                <Select
                    labelId="task_select_dropdown"
                    value={props.task.task.display_name}
                    label="Task"
                    onClick={handleClick("task")}
                    onChange={taskHandleChange}
                >
                    {stage_tasks.map((stage_task) =>(
                        <MenuItem value={stage_task}>
                            {stage_task["display_name"]}
                        </MenuItem>
                    ))}
                </Select>
            </TableCell>
            <TableCell>
            <Select
                    labelId="material_dropdown"
                    value={props.task.material.name}
                    label="Specification"
                    onClick={handleClick("material")}
                    onChange={materialHandleChange}
                >
                    {task_materials.map((material) =>(
                        <MenuItem value={material}>
                            {material["name"]}
                        </MenuItem>
                    ))}
                </Select>
            </TableCell>
        </TableRow>
    );
}

export default ScheduleRow;