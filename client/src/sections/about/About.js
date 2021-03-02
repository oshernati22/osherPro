import React, { Component } from 'react';
import "./about.scss";
import photo1 from "./osherphoto1.jpeg"
import photo2 from "./osherPhoto2.jpeg"
import photo3 from "./osherPhoto3.jpeg"
import {Link} from "react-router-dom";
const coder= " <coder/>" ;
class About extends Component {
 
  render() {
    return (
        <section className="section-about" >
          <div className="u-center-text u-margin-bottom-big">
            <h2 id="about" className="heading-secondary">
              Hello! I'M Osher
          </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertairy u-margin-bottom-small " >About Me</h3>
              <p className="paragraph">
                A highly motivated FULL STACK developer, <d className="word">Creative</d> thinker who takes the initiative for any challenge.<br />
              Coming from the bottom and really Believe in improving my skills through hands-on training.<br />
              Also always love to search and learn about new technologies. <h6 className="opentowork">#OpenToWork</h6>
            </p>
              <h3 className="heading-tertairy u-margin-bottom-small">I'm A WEB  {coder} </h3>
              <p className="paragraph">
                Have STRONG passion for web development (both frontend and backend) but open to any kind of technology, developed various projects for studies and fun.
            </p>
            <Link to="/osh" className="btn-text">Learn more about me <span style={{fontSize: "1.5rem"}}>&#9825;</span></Link>
           
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 1" className="composition__photo composition__photo--p1" src={photo1}/>
                <img  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 2" className="composition__photo composition__photo--p2" src={photo2}/>
                <img  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 3" className="composition__photo composition__photo--p3" src={photo3} />
                {/*<img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
              <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />*/}
              </div>
            </div>
          </div>
        </section>
   
    );
  }
}

export default About;