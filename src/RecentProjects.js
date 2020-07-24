import React from 'react';
import headImg from './Images/headImg.png';
import lj from './Images/Lj (2).png';
import cat from './Images/catopedia.PNG';
import demo from './Images/demo.png';
import gnh from './Images/GNH.PNG';
import Ribbon from './Images/Recent Projects.png';
import Cards from './Cards';
import './RecentProjects.css';

class RecentProjects extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <> 
                <div class="container-fluid py-5">
                    <div class="display-4 py-5">
                        <img src={Ribbon} class="img-fluid" height="500px" width="800" />     
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4">
                            <Cards img={gnh} title="Goan News Hub" text="People with varied talents in Goa" link="https://gnhunofficial.netlify.app/"/>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4">
                            <Cards img={lj} title="Llama Jokes" text="A joke generator" link="https://llamajokes.netlify.app/"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4">
                            <Cards img={demo} title="THZ" text="Just a demo trial website" link="https://thz.netlify.app/"/> 
                        </div>
                    </div>
                 </div>
            </>
        )
    }   
}

export default RecentProjects;
