import React from "react";
import PageContainer from "../../Components/PageHeaderContainer/index";
import { BsPeopleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { resume } from "../../utils/ResumeInfo";
import './style.css';
import {MdWork} from 'react-icons/md';
import { CiAlarmOn } from "react-icons/ci";

import { Paper, Typography } from '@mui/material';
import Carousel, { NavButton } from 'react-material-ui-carousel';

function Exa(props) {
    var items = [
        {
            name: "https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'1',
        },
        {
            name: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'2',
        },
        {
            name: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'3',
        },
        {
            name: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'4',
        },
        {
            name: "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'5',
        },
        {
            name: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'6',
        },
        {
            name: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'7',
        },
        {
            name: "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'8',
        },
        {
            name: "https://images.pexels.com/photos/164903/pexels-photo-164903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'9',
        },{
            name: "https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'10',
        },
        {
            name: "https://images.pexels.com/photos/15342412/pexels-photo-15342412/free-photo-of-brand-logo-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'11',
        },
        {
            name: "https://images.pexels.com/photos/19760936/pexels-photo-19760936/free-photo-of-close-up-of-the-volkswagen-emblem-on-a-vintage-van.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'12',
        },
        {
            name: "https://images.pexels.com/photos/5287538/pexels-photo-5287538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'13',
        },
        {
            name: "https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'14',
        },
        {
            name: "https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'15',
        },
        {
            name: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'16',
        },{
            name: "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'17',
        },
        {
            name: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'18',
        },
        
    ];

    const indicatorStyles = {
        display: 'none', 
    };

    return (
        <Carousel
        autoPlay={true} 
            navButtonsAlwaysVisible={false} 
            navButtonsAlwaysInvisible={false} 
            stopAutoPlayOnHover={false} 
            indicatorIconButtonProps={{ style: indicatorStyles }} 
            interval={2000}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
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



const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageContainer
                HeaderText="Hard"
                icon={<CiAlarmOn color="#50ceb1" size={40} />}
            />
      <Exa/>

      <PageContainer
                HeaderText="Time is Running Out ..."
                
            />
    </section>
  );
};
export default Resume;
