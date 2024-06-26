// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emailjs from 'emailjs-com';

//css
import './ContactForm.css'

const ContactForm = () =>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
        ...formData, [name]: value
    })
};

const handleSubmit = (e) =>{
    e.preventDefault();
    //Handle form submission: send data to the server or email service
//using EmailJS service to recieve mails from this react application
const YOUR_SERVICE_ID = "service_o49m0is";
const YOUR_TEMPLATE_ID = "template_wrapb4o";
const YOUR_USER_ID = "3SO4•••••••••••••••••";

emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });


    console.log(" Form data submited", formData)
};

    return(
        <div className="contForm" id="contact">
            <form onSubmit={handleSubmit}>
                <div className="conts">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="conts">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="conts">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" 
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>
                <div className="conts">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <div className="conts">
                    <button type="submit" className="submitBtn">Send message</button>
                </div>
            
            </form>
        </div>
    );
}
export default ContactForm;
