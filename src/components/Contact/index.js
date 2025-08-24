import React from 'react'
import { useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: background 0.3s, color 0.3s; /* Add transition for smooth hover effect */

  &:active {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`
const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ type }) => (type === "success" ? "#4BB543" : "#FF5C5C")};
  color: white;
  padding: 14px 20px;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: 0 0 12px rgba(0,0,0,0.3);
  z-index: 100;
  opacity: ${({ message }) => (message ? 1 : 0)};
  transform: translateY(${({ message }) => (message ? "0" : "20px")});
  transition: all 0.3s ease-in-out;
`;

const Contact = () => {
 
  const form = useRef();

  const [toast, setToast] = React.useState({ message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8mcndtv', 'template_t4qrcsk', form.current, 'yebohAMjhW4Xi35Is')
      .then(
        (result) => {
          form.current.reset();
          setToast({ message: "Your message has been sent successfully! 🎉", type: "success" });
          setTimeout(() => setToast({ message: "", type: "" }), 4000); // hide after 4s
        },
        (error) => {
          console.log(error.text);
          setToast({ message: "Oops! Something went wrong. Please try again.", type: "error" });
          setTimeout(() => setToast({ message: "", type: "" }), 4000);
        }
      );
  };


  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Name" name="user_name" autocomplete="name" />
          <ContactInput placeholder="Your Email" name="user_email" autocomplete="email" />          
          <ContactInput placeholder="Subject" name="user_subject" autocomplete="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="user_message" autocomplete="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        {toast.message && <Toast type={toast.type} message={toast.message}>{toast.message}</Toast>}
      </Wrapper>
    </Container>
  );
};

export default Contact;