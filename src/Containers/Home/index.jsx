import React from "react";
import { Animate } from "react-simple-animate";
import "./style.css";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
const handleLink=()=>{
    navigate('/contact');

}

const Reveal=()=>{
  console.log()
  console.log('Easy :')
  console.log('Tiger')
  console.log('Sheep')
  console.log('Squirrel')
  console.log('Zebra')
  console.log('Elephant')
  console.log('Rhino')
  console.log()
  console.log()
  console.log('Medium:')
  console.log('dog')
  console.log('egg')
  console.log('hippo')
  console.log('drone')
  console.log('Mobile')
  console.log('Camera')
  console.log('Mike')
  console.log('guitar')
  console.log('keyboard')
  console.log('MArshall radio')
  console.log('Bicylcing')
  console.log('Tennis')
  console.log()
  console.log()
  console.log('Hard:')
  console.log('baseball')
  console.log('burger')
  console.log('french fries')
  console.log('ice craem')
  console.log('charminar')
  console.log('tajmahal')
  console.log('Shoes')
  console.log('guitar')
  console.log('starbucks')
  console.log('MArshall radio')
  console.log('jagauar')
  console.log('Nike')
  
  console.log('Wolsvagen')
  console.log('Benz')
  console.log('Clcok')
  console.log('Train ')
  console.log('Cherry')
  console.log('strawberry , grapes, banana')

}
const handleDownload = () => {
  const downloadLink = document.createElement('a');
  downloadLink.href = '/CV/ANKUR_SRIVASTAVA_RESUME.pdf'; 
  downloadLink.download = 'ANKUR_SRIVASTAVA_RESUME.pdf'; 
  downloadLink.click();

};
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
           Welcome to Tecstasy2k24!!!
          <br />
          Skribble It
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <Stack direction="column">
          <button onClick={()=>{navigate('/Easy')}}>Easy</button>
          <button onClick={()=>{navigate('/Medium')}}>Medium</button>
          <button onClick={()=>{navigate('/Hard')}}>Hard</button>
          <button onClick={Reveal()}>Answers</button>

          </Stack>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
