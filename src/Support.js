import React from 'react';
import support from './Images/Show Your Support (2).png';
import './Support.css';
class Support extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <>
            <div class="container-fluid px-0 mx-0">
                <div class="row px-0 mx-0 justify-content-center align-items-center" >
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 px-0 mx-0">
                        <img src={support} class="img-fluid px-5 mx-0 py-5"/>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 px-0 mx-0 pb-5">
                        <h1 class="pb-5">By Buying Me A Coffee</h1>
                        <a class="bmc-button py-5" target="_blank" href="https://www.buymeacoffee.com/shridharkamat"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a Coffee" /><span style={{marginLeft:'15px',fontSize:'19px'}}>Buy me a Coffee</span></a>
                    </div>
                </div>
                </div>
            </>
        )
    }   
}

export default Support;
