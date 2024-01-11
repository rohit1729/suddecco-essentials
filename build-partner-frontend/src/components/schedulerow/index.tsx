import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CancelIcon from '@mui/icons-material/Cancel';
import { InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { getStageTasks } from '../../services/apis';


const ScheduleRow = (props: any) => {
    const [stage_tasks, setStageTasks] = useState([])
    const [task_materials, setTaskMaterials] = useState([])
    

    const handleClick = () => {
        return (event: React.MouseEvent) => {
            if (stage_tasks.length == 0){
                fetchTasks(props.task.task.stage_id)
            }
        }
    };

    const fetchTasks = async(stage_id: number) => {
        const results = await getStageTasks(stage_id);
        setStageTasks(results.data);
    }
    return (
        <TableRow>
            <TableCell>
                <Select
                    labelId="task_select_dropdown"
                    value={props.task.task.display_name}
                    label="Task"
                    onClick={handleClick()}
                >
                    {stage_tasks.map((stage_task) =>(
                        <MenuItem value={stage_task["display_name"]}>
                            {stage_task["display_name"]}
                        </MenuItem>
                    ))}
                </Select>
            </TableCell>
            <TableCell>
            </TableCell>
        </TableRow>
    );
}

export default ScheduleRow;