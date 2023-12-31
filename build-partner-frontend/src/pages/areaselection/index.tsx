import React from 'react';
import Header from '../../components/Header';
import style from './areaselection.module.css'
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AreaSelectionBox from '../../components/AreaSelectionBox';
import bedroom_png from '../../images/areas/Bedroom.png'
import bathroom_png from '../../images/areas/Bathroom.png'
import kitchen_png from '../../images/areas/Kitchen.png'
import kitchen_living_dining from '../../images/areas/Kitchen_Living_Dining.png'
import wc_png from '../../images/areas/WC.png'
import lading_excl_stairs from '../../images/areas/Landingexcl.stairs.png'
import en_suite_png from '../../images/areas/En-suite.png'
import utility_png from '../../images/areas/Utility.png'
import entrance_hall_png from '../../images/areas/EntranceHall.png'
import dining_room_png from '../../images/areas/DiningRoom.png'
import landing_incl_stairs_png from '../../images/areas/Landingincl.stairs.png'
import corridor_hall_png from '../../images/areas/Corridor_hall.png'
import storage_cupboard_png from '../../images/areas/StorageCupboard.png'
import living_room_family_room_png from '../../images/areas/Livingroom_familyroom.png'
import den_png from '../../images/areas/Den.png'
import garden_png from '../../images/areas/Garden.png'
import lounge_png from '../../images/areas/Lounge.png'
import boiler_cupboard_png from '../../images/areas/BoilerCupboard.png'
import shower_room_png from '../../images/areas/Showerroom.png'
import study_office_png from '../../images/areas/Study_Office.png'
import dressing_walking_closet_png from '../../images/areas/Dressingroom_Walkincloset.png'
import storage_room_png from '../../images/areas/StorageRoom.png'
import consulting_room_png from '../../images/areas/ConsultingRoom.png'
import therapy_room_png from '../../images/areas/TherapyRoom.png'
import porch_png from '../../images/areas/Porch.png'
import driveway_parking_area_png from '../../images/areas/Driveway_parkingarea.png'
import bootroom_cloakroom_png from '../../images/areas/BootRoom_Cloakroom.png'
import snug_png from '../../images/areas/Snug.png'
import wetroom_png from '../../images/areas/Wetroom.png'
import roof_terrace_png from '../../images/areas/Roofterrace.png'
import kitchenette_png from '../../images/areas/Kitchenette.png'
import gym_png from '../../images/areas/Gym.png'
import media_cinema_room_png from '../../images/areas/Mediaroom_Cinemaroom.png'
import office_reception_waiting_area_png from '../../images/areas/OfficeReception_WaitingArea.png'
import eaves_storage_png from '../../images/areas/EavesStorage.png'
import garage_conversion_shell_png from '../../images/areas/Garageconversion(shell).png'
import remodel_floor_plan_png from '../../images/areas/Remodelfloorplan.png'
import retail_unit_png from '../../images/areas/RetailUnit.png'
import pantry_png from '../../images/areas/Pantry.png'
import communal_area_within_flat_png from '../../images/areas/Communalareawithinflats.png'
import external_png from '../../images/areas/External.png'
import pricing_clarification_png from '../../images/areas/Pricingclarifications.png'
import cafe_fit_out_png from '../../images/areas/CafeFitOut.png'
import meeting_room_png from '../../images/areas/Meetingroom.png'
import office_to_flat_png from '../../images/areas/Officetoflatconversion.png'
import studio_room_png from '../../images/areas/Studioroom.png'
import lightwell_courtyard_png from '../../images/areas/Lightwell_courtyard.png'
import plant_room_png from '../../images/areas/PlantRoom.png'
import studio_apartment_png from '../../images/areas/StudioApartment.png'
import house_to_flat_conversion_png from '../../images/areas/Housetoflatconversion.png'
import shop_fit_out_png from '../../images/areas/ShopFitOut.png'
import apartment_4_bed_png from '../../images/areas/Apartment;4bed.png'
import hairdresser_png from '../../images/areas/Hairdressers.png'
import bunglow_4_bed_png from '../../images/areas/Bunaglow;4bed.png'
import external_courtyard_png from '../../images/areas/External_courtyard.png'
import raised_terrace_png from '../../images/areas/Raised_terrace.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
function AreaSelection() {
    return (
      <div style={{paddingBottom: "64px"}}>
        <Header tabValue="project" />
        <div className={style.project_container}>
            <div style={{display: "flex", justifyContent: "flex-end", marginLeft: "10%", marginRight: "5%", marginTop: "16px"}}>
            <Link to="/areas">
                <Button endIcon={<ArrowForwardOutlinedIcon />} style={{backgroundColor: "green", borderRadius: "24px", fontWeight: "550"}} variant="contained">Next
                </Button>
            </Link>
            </div>
            <h1 style={{marginTop: "12px"}}> Which rooms are you remodeling? </h1>
            <div className={style.standard_container}>
                <AreaSelectionBox image={bedroom_png} id='28769601' name="Bedroom"/>
                <AreaSelectionBox image={bathroom_png} id='28769602' name="Bathroom"/>
                <AreaSelectionBox image={kitchen_png} id='28769603' name="Kitchen"/>
                <AreaSelectionBox image={kitchen_living_dining} id='28769604' name="Kitchen / Living / Dining"/>
            </div>
            <div className={style.standard_container} style={{marginTop: "48px"}}>
                <AreaSelectionBox image={wc_png} id='28769605' name="WC"/>
                <AreaSelectionBox image={lading_excl_stairs} id='28769606' name="Landing excl. stairs"/>
                <AreaSelectionBox image={en_suite_png} id='28769607' name="En-suite"/>
                <AreaSelectionBox image={utility_png} id='28769608' name="Utility"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={entrance_hall_png} id='28769609' name="Entrance Hall"/>
                <AreaSelectionBox image={dining_room_png} id='28769610' name="Dining Room"/>
                <AreaSelectionBox image={landing_incl_stairs_png} id='28769611' name="Landing incl. stairs"/>
                <AreaSelectionBox image={corridor_hall_png} id='28769612' name="Corridor Hall"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={storage_cupboard_png} id='28786104' name="Storage Cupboard "/>
                <AreaSelectionBox image={living_room_family_room_png} id='28786105' name="Living room/ Family room"/>
                <AreaSelectionBox image={den_png} id='28786106' name="Den"/>
                <AreaSelectionBox image={garden_png} id='28786107' name="Garden"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={lounge_png} id='28786108' name="Lounge"/>
                <AreaSelectionBox image={boiler_cupboard_png} id='28786109' name="Boiler Cupboard"/>
                <AreaSelectionBox image={shower_room_png} id='28786110' name="Shower room"/>
                <AreaSelectionBox image={study_office_png} id='28786111' name="Study/ Office"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={dressing_walking_closet_png} id='28786112' name="Dressing room/ Walk in closet"/>
                <AreaSelectionBox image={storage_room_png} id='28786113' name="Storage room"/>
                <AreaSelectionBox image={consulting_room_png} id='28786114' name="Consulting room"/>
                <AreaSelectionBox image={therapy_room_png} id='28786115' name="Therapy room"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={porch_png} id='28952289' name="Porch"/>
                <AreaSelectionBox image={driveway_parking_area_png} id='28786117' name="Driveway/ Parking area"/>
                <AreaSelectionBox image={bootroom_cloakroom_png} id='28786118' name="Boot room/ Cloakroom"/>
                <AreaSelectionBox image={snug_png} id='28786119' name="Snug"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={wetroom_png} id='28786120' name="Wet room"/>
                <AreaSelectionBox image={roof_terrace_png} id='28786121' name="Roof terrace"/>
                <AreaSelectionBox image={kitchenette_png} id='28786122' name="Kitchenette"/>
                <AreaSelectionBox image={gym_png} id='28786123' name="Gym"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={media_cinema_room_png} id='28769601' name="Media room/ Cinema room"/>
                <AreaSelectionBox image={office_reception_waiting_area_png} id='28769601' name="Office reception/ Waiting room"/>
                <AreaSelectionBox image={eaves_storage_png} id='28769601' name="Eaves Storage"/>
                <AreaSelectionBox image={garage_conversion_shell_png} id='28769601' name="Garage convesion (shell)"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={remodel_floor_plan_png} id='28769601' name="Remodel floor plan"/>
                <AreaSelectionBox image={retail_unit_png} id='28769601' name="Retail unit"/>
                <AreaSelectionBox image={pantry_png} id='28769601' name="Pantry"/>
                <AreaSelectionBox image={communal_area_within_flat_png} id='28769601' name="Communal area within flats"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={external_png} id='28769601' name="External"/>
                <AreaSelectionBox image={pricing_clarification_png} id='28769601' name="Pricing clarifications"/>
                <AreaSelectionBox image={cafe_fit_out_png} id='28769601' name="Cafe fit out"/>
                <AreaSelectionBox image={meeting_room_png} id='28769601' name="Meeting room"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={office_to_flat_png} id='28769601' name="Office to flat conversion"/>
                <AreaSelectionBox image={studio_room_png} id='28769601' name="Studio room"/>
                <AreaSelectionBox image={lightwell_courtyard_png} id='28769601' name="Lightwell/ courtyard"/>
                <AreaSelectionBox image={plant_room_png} id='28769601' name="Plant room"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={office_to_flat_png} id='28769601' name="Office to flat conversion"/>
                <AreaSelectionBox image={studio_room_png} id='28769601' name="Studio room"/>
                <AreaSelectionBox image={lightwell_courtyard_png} id='28769601' name="Lightwell/ courtyard"/>
                <AreaSelectionBox image={plant_room_png} id='28769601' name="Plant room"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={office_to_flat_png} id='28769601' name="Office to flat conversion"/>
                <AreaSelectionBox image={studio_room_png} id='28769601' name="Studio room"/>
                <AreaSelectionBox image={lightwell_courtyard_png} id='28769601' name="Lightwell/ courtyard"/>
                <AreaSelectionBox image={plant_room_png} id='28769601' name="Plant room"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={studio_apartment_png} id='28769601' name="Studio apartment"/>
                <AreaSelectionBox image={house_to_flat_conversion_png} id='28769601' name="House to flat conversion"/>
                <AreaSelectionBox image={apartment_4_bed_png}  id='28769601' name="Apartment: 4 bed"/>
                <AreaSelectionBox image={shop_fit_out_png} id='28769601' name="Shop fit out"/>
            </div>
            <div className={style.standard_container}>
                <AreaSelectionBox image={hairdresser_png} id='28769601' name="Hairdressers"/>
                <AreaSelectionBox image={bunglow_4_bed_png} id='28769601' name="Bunglow: 4 bed"/>
                <AreaSelectionBox image={external_courtyard_png} id='28769601' name="External courtyard"/>
                <AreaSelectionBox image={raised_terrace_png} id='28769601' name="Raised Terrace"/>
            </div>
        </div>
      </div>
    );
}

export default AreaSelection;