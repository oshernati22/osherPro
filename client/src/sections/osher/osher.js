import React from 'react';
import "./osher.scss";
import photo1 from "./pizza.jpg";
import photo2 from "./burger.jpg";
import photo3 from "./ice.jpg";
import photo4 from "./alchimai.jpg";
import photo5 from "./ktzizot.jpg"
import photo6 from "./bests.jpg"
import photo7 from "./fightclub.png"
import photo8 from "./sherlock.jpg"
import photo9 from "./tommorow.jpg"
import ReactPlayer from "react-player"
import avatar from "./osherAvatar.jpeg";

import {Container,Form,Jumbotron } from "react-bootstrap";


function Osher() {
    return (
        <div>
            <div className="u-center-text u-margin-bottom-big">
                <h1 className="head" >About <img className="head__img" src={avatar}></img>  Me!</h1>
                <hr />
            </div>
            <div className="row">
                <div className="u-center-text ">
                    <h2 id="about" className="heading-secondary">
                        favorite food
                    </h2>
                </div>
                   
                <div className="col-1-of-2">
                        <div className="photos">
                            <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 1" className="photos__photo photos__photo--p1" src={photo1} />
                            <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 2" className="photos__photo photos__photo--p2" src={photo2} />
                            <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 3" className="photos__photo photos__photo--p3" src={photo3} />
                        </div>
                 </div>
            </div>
            <hr/>
            <div className="row">
                <div className="u-center-text ">
                    <h2 id="about" className="heading-secondary">
                        favorite books
                    </h2>
                </div>
                   
                <div className="col-4-of-4" >
                        <div className="photos">
                            
                            <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 1" className="photos__photo photos__photo--p1" src={photo4} />
                            <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 2" className="photos__photo photos__photo--p2" src={photo5}/>
                            <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 3" className="photos__photo photos__photo--p3" src={photo6}/>
                            
                        </div>
                 </div>
            </div>
            <hr/>
            <div className="row">
                <div className="u-center-text ">
                    <h2 id="about" className="heading-secondary">
                        favorite movies
                    </h2>
                </div>
                   
                <div className="col-1-of-2">
                        <div className="photos">
                            <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 1" className="photos__photo photos__photo--p1" src={photo7} />
                            <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 2" className="photos__photo photos__photo--p2" src={photo8} />
                            <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 3" className="photos__photo photos__photo--p3" src={photo9} />
                        </div>
                 </div>
            </div>
            <hr/>
            <div className="row">
                <div className="u-center-text ">
                    <h2 id="about" className="heading-secondary">
                    bonus
                    </h2>
                </div>
                   
                <div className="col-4-of-4">
                        <div className="photos">
                        <ReactPlayer controls="true" width="35rem"   className="photos__photo photos__photo--p1" url='https://www.youtube.com/watch?v=Wel6u32JebE&t=13s' /> 
                        <ReactPlayer controls="true" width="35rem"  className="photos__photo photos__photo--p1" url='https://www.youtube.com/watch?v=3fMKRCueUBM' />
                        <ReactPlayer controls="true" width="35rem"   className="photos__photo photos__photo--p1" url='https://www.youtube.com/watch?v=7ow3OEz9EAg' />
                       
                        </div>
                 </div>
            </div>
            <hr/>
           
        </div>
    );
}

export default Osher;