import React from 'react';
const styles={
  fontSize:'1rem'
}

  function Cards(props){
    return(
           <>
           <div class="px-5">
             <div class="zoom">  
                    <img src={props.img} class="card-img-top" />
             </div>    
             <div class="card-body">
                    <div class="card-title">
                            <div class="h4">{props.title}</div>
                    </div>
                    <div class="card-text pb-2">
                        {props.text}
                    </div>
                    <a href={props.link} class=" mt-2 btn btn-primary">Go!</a>
                </div>
                </div>  
                </>
    )}  

export default Cards;