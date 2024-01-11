import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Header from '../../components/Header';
import React, { useState, useEffect }  from 'react';
import { store } from '../../redux/store'
import { getProjectTasks } from '../../services/apis';
import { updateProjectAreaStageTasks } from '../../redux/slices/projectSlice';
import { useDispatch } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ScheduleRow from '../../components/schedulerow';

function Schedule() {
    const [fetchedTask, setFetchedTask] = useState(false);
    const dispatch = useDispatch()

    const handleClick = () => {
        return (event: React.MouseEvent) => {
          submitProject();
        }
    };

    const submitProject = async () => {
        console.log('Effect triggered on button click');
        const project_id = store.getState().project.id;
        const response = await getProjectTasks(project_id);
        dispatch(updateProjectAreaStageTasks(response.data["areas"]))
        console.log("after project task dispatch");
        console.log(store.getState().project.areas_stages_tasks);
        setFetchedTask(true)
    }
  
    return (
      <div >
        <Header tabValue="schedule" />
        {!fetchedTask ? (
            <div>
              <div>
                <button onClick={handleClick()}> Get Project Tasks </button>
              </div>
            </div>
          ) : (
            <div>
                {store.getState().project.areas_stages_tasks.map((row) => (
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                            <Typography>{row.area.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {row.stages.map((stage) => (
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    >
                                      <Typography>{stage.stage.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{tableLayout:"fixed"}}>
                                      <TableHead>
                                        <TableRow key="area_table_header">
                                          <TableCell colSpan={2} align="left">Task</TableCell>
                                          <TableCell colSpan={2} align="left">Specification</TableCell>
                                          <TableCell align="left">Qty&nbsp;</TableCell>
                                          <TableCell align="left">Labour cost/unit&nbsp;</TableCell>
                                          <TableCell align="left">Material cost/unit&nbsp;</TableCell>
                                          <TableCell align="left">Unit total cost/unit&nbsp;</TableCell>
                                          <TableCell align="left">Line Total&nbsp;</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {stage.tasks.map((task) => (
                                          <ScheduleRow task={task}/>
                                        ))}
                                      </TableBody>
                                    </Table>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
          )}
      </div>
    );
}

export default Schedule;