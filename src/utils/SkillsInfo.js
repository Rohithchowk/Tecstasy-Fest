export const skillsData = [
    {
      label: "FRONT END",
      data: [
        {
          skillName: "HTML 5",
          percentage: "90",
        },
        {
          skillName: "CSS",
          percentage: "75",
        },
        {
          skillName: "TailwindCss",
          percentage: "50",
        },
        {
          skillName: "React.js",
          percentage: "80",
        },
      ],
    },
    {
      label: "BACK END",
      data: [
        {
          skillName: "Node.js",
          percentage: "75",
        },
        {
          skillName: "Express.js",
          percentage: "70",
        },
        {
          skillName: "MongoDB",
          percentage: "75",
        },
        {
          skillName: "SQL",
          percentage: "70",
        },
      ],
    },
    {
      label: "Programming",
      data: [
        
        {
          skillName: "C",
          percentage: "55",
        },
        {
          skillName: "C++",
          percentage: "85",
        },
        {
          skillName: "JAVA",
          percentage: "75",
        },
        {
          skillName: "PYTHON",
          percentage: "55",
        },
        
      ],
    },
  ];




//   // Example.js
// import React from "react";
// import { Paper, Typography } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';

// function Example(props) {
//   var items = [
//     {
//         name: "https://www.cbit.ac.in/wp-content/uploads/2023/05/Orientation-Programme-2023-Guest-Honors-11.09.2023-1.png",
//         number :'1',
//     },
//     {
//         name: "https://www.cbit.ac.in/wp-content/uploads/2023/07/Naac-A-Grade.png",
//         number :'2',
//     },
//     {
//         name: "http://45.114.246.81/~adroitprojects/projects/cbit/v3/banner/bnrimg65252ada98624.png",
//         number :'3',
//     },
//     {
//         name: "https://www.cbit.ac.in/wp-content/uploads/2023/05/Orientation-Programme-2023-Guest-Honors-11.09.2023-1.png",
//         number :'4',
//     },
//     {
//         name: "https://www.cbit.ac.in/wp-content/uploads/2023/07/Naac-A-Grade.png",
//         number :'5',
//     },
//     {
//         name: "http://45.114.246.81/~adroitprojects/projects/cbit/v3/banner/bnrimg65252ada98624.png",
//         number :'6',
//     },
//     {
//         name: "https://www.cbit.ac.in/wp-content/uploads/2023/05/Orientation-Programme-2023-Guest-Honors-11.09.2023-1.png",
//         number :'7',
//     },
//     {
//         name: "https://www.cbit.ac.in/wp-content/uploads/2023/07/Naac-A-Grade.png",
//         number :'8',
//     },
//     {
//         name: "http://45.114.246.81/~adroitprojects/projects/cbit/v3/banner/bnrimg65252ada98624.png",
//         number :'9',
//     },{
//         name: "https://www.cbit.ac.in/wp-content/uploads/2023/05/Orientation-Programme-2023-Guest-Honors-11.09.2023-1.png",
//         number :'10',
//     },
//     {
//         name: "https://www.cbit.ac.in/wp-content/uploads/2023/07/Naac-A-Grade.png",
//         number :'11',
//     },
//     {
//         name: "http://45.114.246.81/~adroitprojects/projects/cbit/v3/banner/bnrimg65252ada98624.png",
//         number :'12',
//     }
// ];

//     const itemStyle = {
//         position: 'relative',
//     };

//     const imageStyle = {
//         width: '100%',
//         height: '520px',
//         objectFit: 'cover',
//     };

//     const numberStyle = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         color: '#fff', // Text color
//         fontSize: '2em', // Adjust the font size as needed
//         fontWeight: 'bold',
//     };

//     // Responsive styles
//     const responsiveStyles = `
//         @media (max-width: 600px) {
//             ${imageStyle.height} : 300px; /* Adjust height for smaller screens */
//             /* Add any other styles for smaller screens as needed */
//         }

//         @media (min-width: 1200px) {
//             ${imageStyle.height} : 600px; /* Adjust height for larger screens */
//             /* Add any other styles for larger screens as needed */
//         }
//     `;

//     return (
//         <Carousel
//             navButtonsAlwaysVisible={false}
//             navButtonsAlwaysInvisible={false}
//             stopAutoPlayOnHover={false}
//             indicatorIconButtonProps={{ style: { display: 'none' } }}
//         >
//             {items.map((item, i) => (
//                 <Item key={i} item={item} responsiveStyles={responsiveStyles} />
//             ))}
//         </Carousel>
//     );
// }

// function Item(props) {
//     const itemStyle = {
//         ...props.responsiveStyles,
//         position: 'relative',
//     };

//     const imageStyle = {
//         ...props.responsiveStyles,
//         width: '100%',
//         objectFit: 'cover',
//     };

//     const numberStyle = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         color: '#fff', // Text color
//         fontSize: '2em', // Adjust the font size as needed
//         fontWeight: 'bold',
//     };

//     return (
//         <div style={itemStyle}>
//             <Paper>
//                 <img src={props.item.name} alt={`cbit-logo-${props.item.number}`} style={imageStyle} />
//                 <Typography variant="h5" style={numberStyle}>
//                     {props.item.number}
//                 </Typography>
//             </Paper>
//         </div>
//     );
// }

// export default Example;
