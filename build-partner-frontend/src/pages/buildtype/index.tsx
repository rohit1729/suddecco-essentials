import React from 'react';
import Header from '../../components/Header';
import style from './buildtype.module.css'
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import build_new from './../../images/build_new.png'
import extension from './../../images/extension.png'
import remodel from './../../images/remodel.png'
import refurbish from './../../images/refurbish.png'
import { Link } from 'react-router-dom';


function BuildType() {
    const [clickedIndex, setClickedIndex] = React.useState(-1);

    const handleCardClick = (index: number) => {
        return (event: React.MouseEvent) => {
            setClickedIndex(index);
            event.preventDefault();
        }
    };

    const getBorder= (index: number) => {
        if (clickedIndex == index){
            return '1px solid red';
        }else{
            return ''
        }
    }
    return (
      <div >
        <Header tabValue="project" />
        <div className={style.project_container}>
            <div style={{display: "flex", justifyContent: "flex-end", marginLeft: "10%", marginRight: "5%", marginTop: "16px"}}>
                <Link to="/selectarea">
                    <Button endIcon={<ArrowForwardOutlinedIcon />} style={{backgroundColor: "green", borderRadius: "24px", fontWeight: "550"}} variant="contained">
                        Next
                    </Button>
                </Link>
            </div>
            <h1 style={{marginTop: "12px"}}> What are the scopes of your project? </h1>
            <div className={style.standard_container}>
                <Box sx={{ width: 240, height: 240, marginLeft: "16px" }}>
                    <div onClick={handleCardClick(1)}>
                        <Card style={{ border: `${getBorder(1)}` }}>
                            <CardContent>
                                <img src={build_new} style={{width: "128px", height: "128px"}}/>
                                <div>
                                    <h4>Build new</h4>
                                    <p style={{fontSize: "12px"}}> Building a new structure and fitting out </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Box>
                <Box sx={{ width: 240, height: 240, marginLeft: "16px" }}>
                    <div onClick={handleCardClick(2)}>
                        <Card style={{ border: `${getBorder(2)}` }}>
                            <CardContent>
                                <img src={extension} style={{width: "128px", height: "128px"}}/>
                                <div>
                                    <h4>Extend</h4>
                                    <p style={{fontSize: "12px"}}> Adding on to existing structure and fitting out </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Box>
                <Box sx={{ width: 240, height: 240, marginLeft: "16px" }}>
                    <div onClick={handleCardClick(3)}>
                        <Card style={{ border: `${getBorder(3)}` }}>
                            <CardContent>
                                <img src={remodel} style={{width: "128px", height: "128px"}}/>
                                <div>
                                    <h4> Remodel </h4>
                                    <p style={{fontSize: "12px"}}> Changing the layout of a structure or room and fitting out </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Box>
                <Box sx={{ width: 240, height: 240, marginLeft: "16px" }}>
                    <div onClick={handleCardClick(4)}>
                        <Card style={{ border: `${getBorder(4)}` }}>
                            <CardContent>
                                <img src={refurbish} style={{width: "128px", height: "128px"}}/>
                                <div>
                                    <h4> Refurbish </h4>
                                    <p style={{fontSize: "12px"}}> Replacing the finishes and fittings in their existing locations </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Box>
            </div>
        </div>
      </div>
    );
}

export default BuildType;