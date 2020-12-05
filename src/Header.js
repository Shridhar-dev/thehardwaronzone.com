import React from 'react';
import headImg from './Images/headImg.png';
import './Header.css';

class Header extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <>
            <div class="header-main container-fluid">
                <div class="py-5">
                <div class='row p-0 justify-content-center align-items-center py-3 py-sm-3 py-md-0 py-xl-5'>
                    <div class=" m-0 col-12 col-sm-12 col-md-6 col-xl-6 py-0">
                        <div class="display-1 head-text"><strong>Tech</strong></div><div class="display-1 head-text-sub">an evergrowing trend</div>
                        <hr class="mx-5"/>
                        <div class="display-6 head-text-small">The thing the modern world is dependent upon</div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-0">
                        <img src={headImg} class="img-fluid" height="650" width="650"/>
                    </div>
                </div>
                </div> 
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,224C160,224,320,224,480,213.3C640,203,800,181,960,181.3C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </>
        )
    }   
}

export default Header;
