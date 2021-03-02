import React, { Component } from 'react';
import "./skills.scss"

class Skills extends Component {
    render() {
        return (
            <div className="skills-section" >
                  <section className="section-features">
          <div className="row" id="skills">
            <div className="col-2-of-4">
              <div className="feature-box">
              <h3 style={{fontSize:"4rem"}} className="heading-tertiary u-margin-bottom-small ">BUSINESS</h3>
                <i className="feature-box__icon icon-basic-world" />
                <p style={{fontSize:"2rem"}}  className="feature-box__text">
                	<p>NODE.JS , C#</p>
                  <p>CPP , Java (also android)</p>
                  <p>SQL, MONGOdb</p>
                </p>
              </div>
            </div>
            <div className="col-2-of-4">
              <div className="feature-box">
                <h3 style={{fontSize:"4rem"}} className="heading-tertiary u-margin-bottom-small ">PLEASURE </h3>
                <i className="feature-box__icon icon-basic-heart" />
                <p style={{fontSize:"2rem"}} className="feature-box__text">
                  <p>HTML</p>
                  <p>CSS, SASS</p>
                  <p>JAVAsCRIPT, REACT.JS</p>
                </p>
              </div>
            </div>
          </div>  
          <h6 className="opentowork">#OpenToWork</h6>
        </section>
            </div>
        );
    }
}

export default Skills;