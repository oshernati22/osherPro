import React, { Component } from 'react';
import { Link } from 'react-scroll';
import "./contact.scss";
import emailjs from "emailjs-com";

class Contact extends Component {
    
    render() {
        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm('osher', 'template_j3hs60j', e.target,'user_rdxtPMCTAguI1kaknInAu')
            .then((result) => {
                alert("The message was recived")
                e.target.reset();
            }, (error) => {
            console.log(error.text);
            });
            }
        return (
            <div className="contact-section">
                <section className="section-book">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <form onSubmit={sendEmail} action="#" className="form">
                                    <div style={{textAlign:"left"}} className="u-center-text u-margin-bottom-big">
                                        <h2 id="contact" className="heading-secondary">
                                            Contact Me
                                        </h2>
                                        <br/>
                                        <Link to="footer" className="details" > For More Details Click Here</Link>
                                    </div>
                                   
                                    <div className="form__group">
                                        <input type="text" className="form__input" placeholder="Full Name" id="name" name="name" required />
                                        <label htmlFor="name" className="form__label">Full Name</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="email" className="form__input" placeholder="Email Adress" name="email" id="email" required />
                                        <label htmlFor="email" className="form__label">Email Adress</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="text" className="form__input" placeholder="Subject" name="subject" id="subject" required />
                                        <label htmlFor="text" className="form__label">Subject</label>
                                    </div>
                                    <div className="form__group">
                                        <input style={{padding:" 4rem 2rem"}} type="text" className="form__input" name="message" placeholder="Message" id="message" required />
                                        <label htmlFor="text" className="form__label">Message</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="submit" className="btn btn--green" value="Send Message &#9813;"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;