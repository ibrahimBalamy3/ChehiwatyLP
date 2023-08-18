import { useEffect, useState } from "react"
import Container from "../../components/container/Container"
import "./Contact.css"

export const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email : null,
    message: null
})

  const [formIsValid, setFormIsValid] = useState(false)
  const emailRe = /\w{1,}@\w{1,}\.\w{2,}/i;
  
  const handleFormSubmit= (event)=> {
    event.preventDefault()

      if(emailRe.test(contactFormData.email)) {
        setFormIsValid(prevState => {
          return {
            ...prevState,
            email: true,
          }
        })
      }else {
        alert('you email is not valid')
      }


    if(formIsValid) {
      alert("the contact form is not valid")
    }else {
      alert("your message / comments send by succes")
      console.log(contactFormData)
    }
  }

  const handleInput = (event)=> {
    setContactFormData(prevData => {
      return {
          ...prevData,
          [`${event.target.name}`] : event.target.value
      }
    })
  }

  return (
    <section className="contact" id="contact">
        <Container>
            <h2 className="primary styled">contact us</h2>
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
    </section>
  )
}

export default Contact
