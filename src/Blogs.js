import React from 'react';
import AbNavbar from './AbNavbar.js';
import Cards from './Cards.js';
import Footer from './Footer.js';
import blogsImg from './Images/blogs.png';
import ddg from './Images/ddg.jpg';
import fb from './Images/fb.png';
import arduino from './Images/arduino.png';
import iotlamp from './Images/iot lamp.png';
import IoT from './Images/iiot.png';
import ifttt from './Images/ifttt.jpg';
import tfi from './Images/textfromimg.jpg';
import bfi from './Images/bfi.jpg';
import './Projects.css';

class Blogs extends React.Component{
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
                        <div class="display-1 head-text"><strong>Blogs</strong></div><div class="display-5 pt-2 project-text-sub">Helpful resources for the present and the future </div>
                        <hr class="mx-5"/>
                        <div class="display-6 project-text-small">Blogs about different topics of tech</div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-0">
                        <img src={blogsImg} class="img-fluid" width="650"/>
                    </div>
                </div>
                </div> 
                <div class="display-4 pb-5">Blogs</div>
            <div class="row justify-content-center align-items-center pb-5">
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={bfi} title="Removing background from images" text="A simple way for removing background from images" link="https://medium.com/@shridharkamat10/how-to-remove-background-from-images-no-photoshop-easiest-method-253bff1bd6eb"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={tfi} title="Extracting text from an image" text="Using python to extract text from an image" link="https://medium.com/@shridharkamat10/how-to-extract-text-from-image-using-python-in-windows-e138488fe615"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={ifttt} title="IFTTT automation app in depth" text="Learn about IFTTT app used for automation in depth" link="https://medium.com/@shridharkamat10/ifttt-in-depth-smart-home-automation-31fa7c1846f4"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={ddg} title="DuckDuckGo browser" text="Learn about duckduckgo browser in depth" link="https://medium.com/@shridharkamat10/duckduckgo-the-best-search-engine-141b6ade96d0"/>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={fb} title="Facebook Gaming App in depth" text="Learn about Facebook Gaming app in depth" link="https://medium.com/@shridharkamat10/facebook-gaming-app-in-depth-66fd4847fad0"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={arduino} title="Arduino pin stuck problem solution!" text="Solution for pin that gets stuck in Arduino's GPIO" link="https://medium.com/@shridharkamat10/arduino-pin-stuck-problem-solved-c28865394bb1"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={iotlamp} title="IoT lamp with Google Assitant" text="An IoT lamp controlled with Google Assistant" link="https://medium.com/@shridharkamat10/how-to-make-an-cool-iot-lamp-that-can-be-controlled-through-google-assistant-37ba61b6fdb2"/>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4 py-3">
                            <Cards img={IoT} title="Understanding MQTT and IoT" text="Learn and Understand the concepts of MQTT and IoT" link="https://medium.com/@shridharkamat10/understanding-mqtt-and-iot-946c5daf272b"/> 
                        </div>
                       
                    </div>
            
            </div>
            <Footer/>
         </>
        )
    }   
}

export default Blogs;

























