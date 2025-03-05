import React from 'react'
import styled from 'styled-components'

const ContactSection = styled.section`
  padding: 2rem;
  background-color: #000000;
  text-align: center;
  color: white;
  font-family: 'Poppins';
`

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea rows={5} placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  )
}

export default Contact