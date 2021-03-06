import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component{
    constructor(){
        super()
        this.state={
            isTop: true
        }
    }
  
    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 850;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
              console.log(this.state.isTop)
          }
        });
      }
    render(){
        let color = this.state.isTop ? '#0099ff' : 'white';
        return(
            <nav class="navbar navbar-expand-lg navbar-light sticky-top mt-0" style={{backgroundColor:color,transition:'0.5s'}} >
                <div class="container-fluid px-5 py-2">
                    <Link class="navbar-brand" href="#">The Hardwaron Zone</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.handleScroll}>
                    <span class="navbar-toggler-icon" ></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" class="nav-link" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/projects" class="nav-link">Projects</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/blogs" class="nav-link" aria-current="page" href="#">Blogs</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }   
}

export default Navbar;
