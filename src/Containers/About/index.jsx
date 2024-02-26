import PageContainer from "../../Components/PageHeaderContainer";
import {BsInfoCircleFill} from 'react-icons/bs';
import {Animate} from 'react-simple-animate';
import {personalDetails} from '../../utils/AboutMeInfo.js'
import {jobSummary} from '../../utils/AboutMeInfo.js'
import {DiCss3} from 'react-icons/di';
import {BsDatabase} from 'react-icons/bs';
import {FaDev} from 'react-icons/fa';
import {BsGit} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import { FaInstagram} from "react-icons/fa";
import { AiOutlineGithub} from "react-icons/ai";
import { Stack } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './style.css'
import { CiAlarmOn } from "react-icons/ci";


import React from "react";
import { Paper, Typography } from '@mui/material';
import Carousel, { NavButton } from 'react-material-ui-carousel';

function Example(props) {
    var items = [
        {
            name: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
             number :'1',
        },
        {
            name: "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
             number :'2',
        },
        {
            name: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'3',
        },
        {
            name: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'4',
        },
        {
            name: "https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'5',
        },
        {
            name: "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'6',
        },
       
    ];

    const indicatorStyles = {
        display: 'none', 
    };

    return (
        <Carousel
        autoPlay={true}  // Enable auto-play
        stopAutoPlayOnHover={false}  // Stop auto-play on hover
        navButtonsAlwaysVisible={false} 
        navButtonsAlwaysInvisible={false} 
        indicatorIconButtonProps={{ style: indicatorStyles }} 
        interval={3000}
    >
        {items.map((item, i) => <Item key={i} item={item} />)}
    </Carousel>
    )
}

function Item(props) {
    const itemStyle = {
        position: 'relative',
    };

    const imageStyle = {
        width: '100%',
        height: '520px',
        objectFit: 'cover',
        borderRadius: '10px',  // Add border-radius for rounded corners
    };

    const numberStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff', // Text color
        fontSize: '6em', // Adjust the font size as needed
        fontWeight: 'bold',
    };

    return (
        <div style={itemStyle}>
            <Paper>
                <img src={props.item.name} alt={`cbit-logo-${props.item.number}`} style={imageStyle} />
                <Typography variant="h1" style={numberStyle}>
                    {props.item.number}
                </Typography>
            </Paper>
        </div>
    )
}


const About=()=>{
    return (
        <section id="about" className="about">
        <PageContainer 
        HeaderText="Easy" 
        icon={<CiAlarmOn color="#50ceb1" size={40}/>}
        />
        {/* <div className="about__content">
        <div className="about__content_personal">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
            <h3>Mern Stack Developer</h3>
            <p>{jobSummary}</p>
        </Animate>
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <h3 className="personalInfo">Personal Information</h3>
        <ul>
            {
                personalDetails.map((item,i)=>(
                    <li key={i}>
                        <span className="title">{item.label}</span>
                        <span className="value">{item.value}</span>
                    </li>
                ))
            }
        </ul>
        </Animate>
        </div>
        <div className="about__content_service">
        <Stack direction="column">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
            <div className="about__content_service_innerContent">
            <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <DiCss3 size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <BsDatabase size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <BsGit size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            </div>
            </Animate>
            
          </Stack>
        </div>
        
        </div> */}
        
        <Example/>
        <PageContainer 
        HeaderText="Time is Running Out..." 
       
        />
        </section>
    )
}
export default About;