import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <>
            <div class="footer-main container-fluid">
                <div class=" container-fluid pt-5 pb-3">
                <div class='row px-0 justify-content-center foot-text'>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6">
                       <h3>The Hardwaron Zone</h3>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6">
                    <div class='row px-0 justify-content-center'>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-3">
                            <h4>Follow</h4>
                            <hr class="mr-5 mt-0"/>
                            <a href="https://twitter.com/shridhar_kdev" style={{textDecoration:'none',color:'white'}}><h6>Twitter</h6></a>
                            <a href="https://www.youtube.com/channel/UCv2hTdClW8560n89OZ6cazA?view_as=subscriber" style={{textDecoration:'none',color:'white'}}><h6>YouTube</h6></a>
                            <a href="https://github.com/Shridhar-dev" style={{textDecoration:'none',color:'white'}}><h6>GitHub</h6></a>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-xl-6 py-3">
                            <h4>Contact</h4>
                            <hr class="mr-5 mt-0"/>
                            <i class="fas fa-envelope pr-2"></i>
                            <h6 class="d-inline">shridharkamat10@gmail.com</h6>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="pt-0">
                <h5 class="foot-copyright pt-5 pb-0">Copyright © 2020 Shridhar Kamat. All rights reserved.</h5>
                </div>
                </div> 
            </div>
            </>
        )
    }   
}

export default Footer;
