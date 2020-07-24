import React from 'react';
import headImg from './Images/headImg.png';
import './About.css';

class About extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <>
            <div class="container-fluid">
               <div class="display-4">About</div>
               <div class='row justify-content-center align-items-center py-3 py-sm-3 py-md-0 py-xl-5'>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-0">
                        <img src={headImg} class="img-fluid" height="650" width="650"/>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-0 about-para display-6">
                    Hey there, I am Shridhar Kamat, I am a tech lover and I like to share my experiences while working with tech also telling you about the latest things and explaining some concepts which I know about like sensors, Arduino, Raspberry Pi, electronics, tech, and many more things! Currently, I know about 6 programming languages including Scratch, Arduino, Python, JavaScript, HTML, and CSS. I post regular content on my channel and soon on my podcast based on tech, giving tutorials on specific topics including projects like IoT and home automation systems and even giving my opinion on some topics. I love working with electronics and learning about them.
                    </div>
                </div>
                </div>
            </>
        )
    }   
}

export default About;
