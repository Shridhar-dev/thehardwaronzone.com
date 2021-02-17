import React from 'react';
import Ribbon from './Images/Recent Projects.png';
import Cards from './Cards';
import discreet from './Images/DISCREET.png'
import twitter from './Images/twitter.png'
import discord from './Images/Discord.png'
import './RecentProjects.css';
import gossip from './Images/gossip.png'


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
                    <div class="row justify-content-center align-items-start">
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4">
                            <Cards img={gossip} title="Gossip" text="A simple chat app built with React and Firebase" link="https://gossip-5c9ef.web.app/"/>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4">
                            <Cards img={discord} title="Discord UI Clone" text="Discord UI Clone" link="https://disord-clone.netlify.app/"/> 
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-4">
                            <Cards img={twitter} title="Twitter Clone" text="Twitter Clone" link="https://twitter-clone-af477.web.app/"/>
                        </div>
                    </div>
                 </div>
            </>
        )
    }   
}

export default RecentProjects;
