import React from 'react';
import Header from '../../components/Header';
import style from './standard.module.css'
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import basic_png from './../../images/basic.png'
import standard_png from './../../images/standard.png'
import high_png from './../../images/high.png'
import { Link } from 'react-router-dom';

function Standard() {
    const [clickedIndex, setClickedIndex] = React.useState(-1);

    const handleCardClick = (index: number) => {
        console.log("hohoh");
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
                <Link to="/buildtype">
                    <Button endIcon={<ArrowForwardOutlinedIcon />} style={{backgroundColor: "green", borderRadius: "24px", fontWeight: "550"}} variant="contained">
                        Next
                    </Button>
                </Link>
            </div>
            <h1 style={{marginTop: "12px"}}> Which level of specification is your project? </h1>
            <div className={style.standard_container}>
                <Box sx={{ width: 240, height: 240, marginLeft: "16px" }}>
                    <div onClick={handleCardClick(1)}>
                        <Card style={{ border: `${getBorder(1)}` }}>
                            <CardContent>
                                <img src={basic_png} style={{width: "128px", height: "128px"}}/>
                                <div>
                                    <h4>Basic</h4>
                                    <p style={{fontSize: "12px"}}> Basic finishes e.g. Leyland Everest, Wickes</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Box>
                <Box sx={{ width: 240, height: 240, marginLeft: "16px" }}>
                    <div onClick={handleCardClick(2)}>
                        <Card style={{ border: `${getBorder(2)}` }}>
                            <CardContent>
                                <img src={standard_png} style={{width: "128px", height: "128px"}}/>
                                <div>
                                    <h4>Standard</h4>
                                    <p style={{fontSize: "12px"}}> Standard finishes e.g. Dulux, Hamilton, Slim Line </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Box>
                <Box sx={{ width: 240, height: 240, marginLeft: "16px" }}>
                    <div onClick={handleCardClick(3)}>
                        <Card style={{ border: `${getBorder(3)}` }}>
                            <CardContent>
                                <img src={high_png} style={{width: "128px", height: "128px"}}/>
                                <div>
                                    <h4> High </h4>
                                    <p style={{fontSize: "12px"}}> High spec finishes e.g. Farrow & Ball, Fine Line, Siemens </p>
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

export default Standard;