import { useState } from "react"
import Container from "../../components/container/Container"
import "./Contact.css"
import { motion } from "framer-motion"
import { PrimaryTitlesVariant, PrimaryVariant } from "../../animations"

export const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleInput = (e)=> {
    setContactFormData(prevData => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleFormSubmit= (e)=> {
    e.preventDefault()
    console.log(contactFormData)
    alert("Thankyou , \n Your message was send succesfully")
  }
  


  return (
    <motion.section 
      variants={PrimaryVariant} 
      initial={'initial'} 
      whileInView={'view'}  
      className="contact" 
      id="contact us"
    >
        <Container>
            <motion.h2 
              variants={PrimaryTitlesVariant} 
              initial={'initial'} 
              whileInView={'view'} 
              className="primary styled"
            >contact us</motion.h2>
            <form action="" method="post" onSubmit={(event)=> handleFormSubmit(event)}>
                <div className="inputs">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="name"
                      onInput={(event) => handleInput(event)}
                      />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="email"
                      onInput={(event) => handleInput(event)}
                      />
                </div>
                <textarea 
                  name="message"
                  id="message" 
                  placeholder="message or comment..."
                  onInput={(event) => handleInput(event)}
                ></textarea>
                <button className="primary">send</button>
            </form>
        </Container>
    </motion.section>
  )
}

export default Contact
