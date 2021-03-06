import React, {useRef, useState, useContext} from 'react'
import { ContactWrapper, FormWrapper, TextWrapper, Form, Button } from './ContactStyle';
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

const Contact = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [sent, setSent] =useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6pd6wfb', 'template_t5i6ruc', form.current, '4HvEhEr4mwOcsYEPP')
      .then((result) => {
          console.log(result.text);
          setSent(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <ContactWrapper id='Contact'>
        <TextWrapper>
            <span 
            style={{ color: darkMode ? "var(--gold)" : "" }}
            className='Text1'> Get in touch</span>
            <span className='Text2'> Send me an Email</span>

            <div className="blur blur1" style={{ background: "#ABF1FF94" }}></div>
        </TextWrapper>

        <FormWrapper>
            <Form ref={form} onSubmit={sendEmail}>
                <input type='text' name= 'user_name' className='userInput' placeholder='Name' required  />
                <input type='email' name= 'user_email' className='userInput' placeholder='Your Email' required/>
                <textarea name='message' className='userInput' placeholder='Message' required/>
                {sent && <span><i>Thanks for reaching out!</i></span>}

                <Button type='submit'>Send</Button>

                <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>

            </Form>
        </FormWrapper>
    </ContactWrapper>
  )
}

export default Contact