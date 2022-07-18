import React, { useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from '@emailjs/browser';

import "../styles/ContactForm.css";

export default function ContactForm() {

    const [isDisabled, setIsDisabled] = useState(false);

    function setFalse() {
        setIsDisabled(true);
    }
    
    const form = useRef();
    const nameInput = useRef();
    const cityInput = useRef();
    const emailInput = useRef();
    const phoneInput = useRef();
    const radio1 = useRef();
    const radio2 = useRef();
    const jobDescriptionInput = useRef();
    
    function resetForm() {
        nameInput.current.value = '';
        cityInput.current.value = '';
        emailInput.current.value = '';
        phoneInput.current.value = '';
        radio1.current.checked = false;
        radio2.current.checked = false;
        jobDescriptionInput.current.value = '';
    }

    const sendEmail = (e) => {

        
        if (nameInput.current.value && cityInput.current.value && emailInput.current.value && phoneInput.current.value && (radio1.current.checked || radio2.current.checked)) {
            setFalse();
            
            
            emailjs.sendForm('service_by43v7z', 'template_ccaag9o', form.current, 'KH7O7vPOajOPZAtMm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            resetForm();
        }
        e.preventDefault();
      };

    return (
        <div className="" style={{textAlign: "left"}}>
            <form ref={form} onSubmit={sendEmail}>
                <div className="someMarginForm">
                    <label>Name</label>
                </div>
                <div className="someMarginForm">
                    <input ref={nameInput} className="inputBoxFix inputFields inputBoxBorder" type="text" name="user_name" placeholder="Name" />
                </div>
                <div className="someMarginForm">
                    <label>City</label>
                </div>
                <div className="someMarginForm">
                    <input ref={cityInput} className="inputBoxFix inputFields inputBoxBorder" type="text" name="user_city" />
                </div>
                <div className="someMarginForm">
                    <label>Email</label>
                </div>
                <div className="someMarginForm">
                    <input ref={emailInput} className="inputBoxFix inputFields inputBoxBorder" type="email" name="user_email" />
                </div>
                <div className="someMarginForm">
                    <label>Phone Number</label>
                </div>
                <div className="someMarginForm">
                    <input ref={phoneInput} className="inputBoxFix inputFields inputBoxBorder" type="tel" name="user_phone" />
                </div>
                <div className="someMarginForm">
                    <label>Job Type</label>
                </div>
                <div className="someMarginForm radioButtonDiv" style={{"display": "flex", justifyContent: "flex-start", alignItems: "center"}}>
                    <div>
                        <input className="inputBoxBorder" ref={radio1} type="radio" name="user_job_type" value="commercial" />
                    </div>
                    <div>
                        <p style={{marginLeft: "10px", marginBottom: "0"}}>Commercial</p>
                    </div>
                    <div>
                        <input ref={radio2} className="fixRadio inputBoxBorder" type="radio" name="user_job_type" value="residential" />
                    </div>
                    <div>
                        <p style={{marginLeft: "10px", marginBottom: "0"}}>Residential</p>
                    </div>
                </div>
                <div className="someMarginForm">
                    <label>Job Description (i.e. bathroom, kitchen etc.)</label>
                </div>
                <div className="someMarginForm">
                    <textarea ref={jobDescriptionInput} className="jobBoxFix inputFields inputBoxBorder" name="message" />
                </div>
                <div className="someMarginForm formButtonDiv" style={{display: "flex", justifyContent: "flex-end"}}>
                    <div style={{marginRight: "10px"}}>
                        <button type="button" className="formSendButton" onClick={resetForm}>Clear</button>
                    </div>
                    <div style={{marginLeft: "10px"}}>
                        <input className="formSendButton" type="submit" value="Send" disabled={isDisabled} />
                    </div>
                </div>
            </form>
        </div>
    );
}

    
        
    