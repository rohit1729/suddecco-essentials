import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { ProjectArea } from '../../services/apiTypes'

export interface ProjectState {
  id: number,
  name: string,
  postcode: string,
  first_line_address: string,
  second_line_address: string,
  city: string,
  user_id: number,
  area_selection: Record<number, number>,
  areas: AreaState[],
  tasks: TaskState[],
  materials: MaterialState[]
}

export interface AreaState {
    id: number,
    project_id: number,
    reference_area_id: number,
    name: string,
    width: number,
    depth: number,
    height: number,
    wall_area: number,
    floor_area: number,
    ceiling_area: number,
    doors: number,
    windows: number,
    perimeter: number
}

export interface TaskState {
    id: number,
    name: string,
    display_name: string,
    stage_id: number,
    sub_stage_id: number,
    unit_id: number,
    material_category_id: number,
    component_area_id: number,
    component_area: string,
    ratio: number,
    prime_material_id: number,
    material_unit_cost: number,
    labour_unit_cost: number,
    unit_name: string
}

export interface MaterialState {
    id: number,
    name: string,
    unit_id: number,
    specification_id: number,
    category_id: number,
    price: number
}

const initialState: ProjectState = {
  id: -1,
  name: "",
  postcode: "",
  first_line_address: "",
  second_line_address: "",
  city: "",
  user_id: -1,
  area_selection: {},
  areas: [],
  tasks: [],
  materials: []
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addSelectedArea: (state, action: PayloadAction<number>) => {
      console.log("inside add area");
      const current_value = state.area_selection[action.payload] ? state.area_selection[action.payload] : 0
      return {
        ...state,
        area_selection: {
          ...state.area_selection,
          [action.payload]: current_value+1,
        },
      };
    },
    removeSelectedArea: (state, action: PayloadAction<number>) => {
      console.log("inside remove area");
      const current_value = state.area_selection[action.payload]
      if (current_value > 0){
        return {
          ...state,
          area_selection: {
            ...state.area_selection,
            [action.payload]: current_value - 1,
          },
        }
      }
    },
    addProjectDetail: (state, action: PayloadAction<{name: string, postcode: string, first_line_address: string, second_line_address: string, city: string}>) => {
      return {
        ...state,
        name: action.payload.name,
        postcode: action.payload.postcode,
        first_line_address: action.payload.first_line_address,
        second_line_address: action.payload.second_line_address,
        city: action.payload.city
      }
    },
    updateProjectDetail: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      return {
        ...state,
        id: action.payload.data.project.id
      }
    },
    updateProjectAreas: (state, action: PayloadAction<ProjectArea[]>) => {
      console.log(action.payload)
      const areas = action.payload
      const areas_state: AreaState[] = []
      areas.forEach(area => {
        const area_state: AreaState = {
          id: area.id,
          name: area.name,
          width: Number(area.width),
          height: Number(area.height),
          depth: Number(area.depth),
          wall_area: Number(area.wall_area),
          floor_area: Number(area.floor_area),
          ceiling_area: Number(area.ceiling_area),
          doors: area.doors,
          windows: area.windows,
          perimeter: Number(area.perimeter),
          project_id: area.project_id,
          reference_area_id: area.reference_area_id,
        }
        areas_state.push(area_state);
      });
      return {
        ...state,
        area: areas_state
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { addSelectedArea, removeSelectedArea, addProjectDetail, updateProjectDetail, updateProjectAreas } = projectSlice.actions

export default projectSlice.reducer
