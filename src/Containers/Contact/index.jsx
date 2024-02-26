import React from "react";
import PageHeaderContent from '../../Components/PageHeaderContainer/index'
import { BiSolidContact } from "react-icons/bi";
import { Animate } from "react-simple-animate";
import "./style.css";



import { Paper, Typography } from '@mui/material';
import Carousel, { NavButton } from 'react-material-ui-carousel';

function Exa(props) {
    var items = [
        {
            name: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'1',
        },
        {
            name: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'2',
        },
        {
            name: "https://images.pexels.com/photos/68912/pexels-photo-68912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'3',
        },
        {
            name: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'4',
        },
        {
            name: "https://images.pexels.com/photos/1500610/pexels-photo-1500610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'5',
        },
        {
            name: "https://images.pexels.com/photos/65169/pexels-photo-65169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'6',
        },
        {
            name: "https://images.pexels.com/photos/6966323/pexels-photo-6966323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            number :'7',
        },
        {
          name: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           number :'8',
      },
      {
          name: "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           number :'9',
      },
      
      {
          name: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          number :'10',
      },
      {
        name: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'11',
    },
      
      {
          name: "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          number :'12',
      },
      {
        name: "https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'13',
    },
      
    {
        name: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'14',
    },
    {
        name: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'15',
    },
    {
        name: "https://images.pexels.com/photos/35995/hippo-mammal-wildlife-nature.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'16',
    },
    
    {
        name: "https://images.pexels.com/photos/267447/pexels-photo-267447.jpeg?auto=compress&cs=tinysrgb&w=600",
        number :'17',
    },
    {
        name: "https://images.pexels.com/photos/2929411/pexels-photo-2929411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'18',
    },
    {
        name: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'19',
    },
    {
        name: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'20',
    },
    
    {
        name: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'21',
    },{
        name: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'22',
    },
    {
        name: "https://images.pexels.com/photos/625788/pexels-photo-625788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'23',
    },
    {
        name: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'24',
    },
    {
        name: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        number :'25',
    }
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
            interval={1000}
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


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        HeaderText="Hard+"
        icon={<BiSolidContact color="#50ceb1" size={40} />}
      />
      <Exa/>
    </section>
  );
};
export default Contact;
