import { ImCompass } from 'react-icons/im';
import PageContainer from "../../Components/PageHeaderContainer";
import { Animate } from 'react-simple-animate';
import {Stack} from '@mui/material';
import {FaLinkedin} from 'react-icons/fa';
import { FaInstagram} from "react-icons/fa";
import { AiOutlineGithub} from "react-icons/ai";
import {SiHashnode} from 'react-icons/si';
import {AiFillGitlab} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import './style.css';
import { CiAlarmOn } from 'react-icons/ci';

import React from "react";
import { Paper, Typography } from '@mui/material';
import Carousel, { NavButton } from 'react-material-ui-carousel';

function Exam(props) {
    var items = [
        {
            name: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'1',
        },
        {
            name: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'2',
        },
        {
            name: "https://images.pexels.com/photos/35995/hippo-mammal-wildlife-nature.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'3',
        },
        {
            name: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'4',
        },
        {
            name: "https://images.pexels.com/photos/267447/pexels-photo-267447.jpeg?auto=compress&cs=tinysrgb&w=600",
            number :'5',
        },
        {
            name: "https://images.pexels.com/photos/2929411/pexels-photo-2929411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'6',
        },
        {
            name: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'7',
        },
        {
            name: "https://images.pexels.com/photos/625788/pexels-photo-625788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'8',
        },
        {
            name: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'9',
        },{
            name: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'10',
        },
        {
            name: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'11',
        },
        {
            name: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'12',
        }
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


const Socials = () => {
    return (
        <section id="skills" className="skills">
            <PageContainer
                HeaderText="Medium"
                icon={<CiAlarmOn color="#50ceb1" size={40} />}
            />
            <Exam/>
            <PageContainer
                HeaderText="Time is Running Out.."
                
            />
          
        </section>
    )
}
export default Socials;