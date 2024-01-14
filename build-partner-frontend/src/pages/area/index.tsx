import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../../components/Header';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { useCreateProjectMutation, useFetchProjectAreasQuery } from '../../services/jsonServerApi';
import { CreateProjectRequestBody, ProjectArea } from '../../services/apiTypes';
import { updateProjectDetail, updateProjectAreas } from '../../redux/slices/projectSlice';
import { store } from '../../redux/store'
import { createProject, getProjectAreas, patchProjectAreas } from '../../services/apis';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AreaRow from '../../components/arearow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const Area = () => {
    const [fetchedArea, setFetchedArea] = useState(false);
    const dispatch = useDispatch()

    const handleClick = () => {
      return (event: React.MouseEvent) => {
        submitProject();
      }
    };

    const submitProject = async () => {
      console.log('Effect triggered on button click');
      const selected_areas: number[] = []
      const area_map = store.getState().project.area_selection
      for (const key in area_map){
        const value = area_map[key]
        for (let i = 0; i < value; ++i){
          selected_areas.push(parseInt(key))
        }
      }
      const body: CreateProjectRequestBody = {
        name: store.getState().project.name,
        city: store.getState().project.city,
        user_id: 1,
        areas: selected_areas
      }
      const results = await createProject(body);
      console.log("haha");
      console.log(results);
      dispatch(updateProjectDetail(results.data));
      console.log(store.getState().project.id);
      setProjectAreas();
    }

    const setProjectAreas = async() => {
      const project_areas_response = await getProjectAreas(store.getState().project.id);
      dispatch(updateProjectAreas(project_areas_response.data.areas));
      console.log("printing areas");
      console.log(store.getState().project.areas);
      setFetchedArea(true);
    }

    const areaAvailable = () => {
      if (fetchedArea) return true;
      if (store.getState()?.project?.areas.length > 0) return true;
      return false;
    }

    const patchAreasSubmit = async() => {
      const areas = Object.values(store.getState().project.modifiedAreas);
      const patch_area_response = await patchProjectAreas(areas);
      setProjectAreas();
    }

    return (
      <div >
        <Header tabValue="areas" />
        <div>
          {!areaAvailable() ? (
            <div>
              <div>
                <button onClick={handleClick()}> Submit Project </button>
              </div>
            </div>
          ) : (
            <div>
              <div style={{display: "flex", justifyContent: "flex-end", marginRight: "16px", marginTop: "8px"}}>
                <Button variant="contained" onClick={patchAreasSubmit} style={{backgroundColor: "green", borderRadius: "24px", fontWeight: "550"}} endIcon={<SaveIcon />}>
                  Save
                </Button>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow key="area_table_header">
                      <TableCell>Remodel fit out</TableCell>
                      <TableCell align="right">Width</TableCell>
                      <TableCell align="right">Depth&nbsp;</TableCell>
                      <TableCell align="right">Height&nbsp;</TableCell>
                      <TableCell align="right">GIFA m2&nbsp;</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {store.getState().project.areas.map((row) => (
                      <AreaRow key={row.id} area={row}></AreaRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </div>
 
      </div>
    );
}

export default Area;