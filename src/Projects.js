import React from 'react';
import AbNavbar from './AbNavbar.js';
import Cards from './Cards.js';
import Footer from './Footer.js';
import ProjectImg from './Images/Projects.png';
import gnh from './Images/GNH.PNG';
import lj from './Images/Lj (2).png';
import demo from './Images/demo.png';
import cat from './Images/catopedia.PNG';
import iot from './Images/IoT.png';
import todo from './Images/todoimg.PNG'
import discreet from './Images/DISCREET.png'
import twitter from './Images/twitter.png'

import './Projects.css';

class Projects extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <> 
                <AbNavbar />
                <div class="project-main container-fluid">
                <div class="py-5">
                <div class='row justify-content-center align-items-center py-3 py-sm-3 py-md-0 py-xl-5'>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-0">
                        <div class="display-1 head-text"><strong>Projects</strong></div><div class="display-5 pt-2 project-text-sub">List of all my projects</div>
                        <hr class="mx-5"/>
                        <div class="display-6 project-text-small">From Websites to Arduino and Raspberry Pi</div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-0">
                        <img src={ProjectImg} class="img-fluid" height="650" width="650"/>
                    </div>
                </div>
                </div> 
                <div class="display-4 pb-5">Projects</div>
            <div class="row justify-content-center align-items-center pb-5">
            <div class="col-12 col-sm-12 col-md-6 col-xl-4">
                            <Cards img={twitter} title="Twitter Clone" text="Twitter Clone" link="https://twitter-clone-af477.web.app/"/>
                        </div>
            <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={discreet} title="Discreet" text="A messenger look alike" link="https://discreet-b6d33.web.app/"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={todo} title="Todo app" text="A todo app powered by firebase" link="https://todo-5b16d.web.app/"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={gnh} title="Goan News Hub" text="A site showcasing people with varied talents in Goa" link="https://gnhunofficial.netlify.app/"/>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={lj} title="Llama Jokes" text="Who says a llama can't joke? A joke generator" link="https://llamajokes.netlify.app/"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={demo} title="THZ" text="Just a demo trial website made for testing my skills" link="https://thz.netlify.app/"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={cat} title="Catopedia" text="A cat image generator using cat api" link="https://catopedia.netlify.app/" />
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={iot} title="Iot Lamp" text="A simple IoT Lamp with Google Assistant" link="https://medium.com/@shridharkamat10/how-to-make-an-cool-iot-lamp-that-can-be-controlled-through-google-assistant-37ba61b6fdb2"/> 
                        </div>
                        
                    </div>
            
            </div>
            <Footer/>
         </>
        )
    }   
}

export default Projects;

























