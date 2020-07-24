import React from 'react';
import yt from './Images/YouTube.png';
import pc from './Images/Podcast.png';
import './Join.css';
class Join extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            
            <>
                <div class="container-fluid px-0 mx-0 py-5">
                    <div class="display-4">Join us on our Journey🚆</div>
                    <div class="row mx-5 py-5 align-items-center justify-content-center">
                    <div class="col-12 col-sm-12 col-md-4 col-xl-4 shad px-0 my-5 my-sm-5 my-md-2 my-xl-2 py-5 ">
                        <img src={yt} class="img-fluid pt-3" width="100" />
                        <h3 class="pt-3">The Hardwaron Zone</h3>
                        <small class="d-block pb-2">Our <a href="https://www.youtube.com/channel/UCv2hTdClW8560n89OZ6cazA?view_as=subscriber"> YouTube</a> channel</small>   
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 col-xl-4 offset-xl-2 offset-md-2 offset-0 shad px-0 my-2 py-5">
                        <img src={pc} class="img-fluid pt-3" width="100" />
                        <h3 class="pt-3">The Hardwaron Show</h3>
                        <small class="d-block pb-2">Our <a href="https://anchor.fm/the-hardwaron-show"> Podcasting</a> channel</small>
                    </div>
                </div>
                <a href="https://www.youtube.com/channel/UCv2hTdClW8560n89OZ6cazA?view_as=subscriber"><i class="fab fa-youtube px-3"></i></a>
                <a href="https://twitter.com/shridhar_kdev"><i class="fab fa-twitter px-3"></i></a>
                <a href="https://github.com/Shridhar-dev"><i class="fab fa-github px-3"></i></a>
                <a href="https://www.facebook.com/The-Hardwaron-Zone-101916491572127/"><i class="fab fa-facebook-square px-3"></i></a>
                <a href="https://anchor.fm/the-hardwaron-show"><i class="fab fa-spotify px-3"></i></a>
                </div>
            </>
            
           
        )
    }   
}
export default Join; 