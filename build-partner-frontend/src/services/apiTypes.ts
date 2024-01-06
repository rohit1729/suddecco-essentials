export interface CreateProjectRequestBody {
    name: string,
    city: string,
    user_id: number,
    areas: number[]
}

export interface ProjectArea {
    id: number,
    project_id: number,
    reference_area_id: number,
    name: string,
    width: string,
    depth: string,
    height: string,
    wall_area: string,
    floor_area: string,
    ceiling_area: string,
    doors: number,
    windows: number,
    perimeter: string
}