import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Header from '../../components/Header';
import React, { useState, useEffect }  from 'react';
import { store } from '../../redux/store'
import { getProjectTasks } from '../../services/apis';
import { updateProjectAreaStageTasks } from '../../redux/slices/projectSlice';
import { useDispatch } from 'react-redux';

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
        dispatch(updateProjectAreaStageTasks(response.data))
        console.log("after project task dispatch");
        console.log(store.getState().project.areas_stages_tasks);
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
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Remodel fit out</TableCell>
                      <TableCell align="right">Width</TableCell>
                      <TableCell align="right">Depth&nbsp;</TableCell>
                      <TableCell align="right">Height&nbsp;</TableCell>
                      <TableCell align="right">GIFA m2&nbsp;</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
      </div>
    );
}

export default Schedule;