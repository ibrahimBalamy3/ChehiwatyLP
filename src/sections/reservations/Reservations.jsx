import { useEffect, useState } from "react"
import Container from "../../components/container/Container"
import "./Reservations.css"
import { motion } from "framer-motion"
import { PrimaryTitlesVariant, PrimaryVariant } from "../../animations"

export const Reservations = () => {
    const [reservationFormData, setReservationFormData] = useState({
        name: "",
        phone : null,
        table: null,
        date: "",
        time: ""

    })

    const [formIsValid, setFormIsValid] = useState(false)

    const regEx= {
        nameRe: /\w{3,}|\s*/ig,
        phoneRe: /0(5|6|7)\d{8}/ig,
    }

    // just for changing the type of the date & time inputs
    const handleFocus = (event, type)=> {
        event.target.type= type
    }
    const handleBlur = (event)=> {
        event.target.type="text"
    }


    const handleFormSubmit = (event)=> {
        event.preventDefault()
        if(formIsValid) {
            console.log(reservationFormData)
        }else {
            alert('the reservation form is invalid')
        }
    }

    // for storing the data in the reservationFormData state
    const handleInput = (event)=> {
        setReservationFormData(prevData => {
            return {
                ...prevData,
                [`${event.target.name}`] : event.target.value
            }
        })

    }

    // to be sure the reservation form is not empty || valid
    useEffect(()=> {
        setFormIsValid(
            regEx.nameRe.test(reservationFormData.name) &&
            regEx.phoneRe.test(reservationFormData.phone) &&
            reservationFormData.table && 
            reservationFormData.date &&
            reservationFormData.time ? 
            true : 
            false

        )

    }, [reservationFormData])

  return (
    <motion.section 
        variants={PrimaryVariant} 
        initial={'initial'} 
        whileInView={'view'} 
        className="reservations" id="reservations"
    >
        <Container>
            <motion.h2 
                variants={PrimaryTitlesVariant} 
                initial={'initial'} 
                whileInView={'view'} 
                className="primary styled"
            >reservations</motion.h2>
            <form action="" method="post" onSubmit={(event)=> handleFormSubmit(event)}>
                <div>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="name"  
                      className="child"
                      onInput={(event) => handleInput(event)}
                      />
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="phone number"  
                      className="child" 
                      onInput={(event) => handleInput(event)}
                      />
                    <select name="table" id="table" className="child" onInput={(event) => handleInput(event)}>
                        <option value="" className="default-option">choose your table</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                        <option value="4">foor</option>
                        <option value="5">five</option>
                        <option value="6">six</option>
                    </select>
                </div>
                <div>
                    <input 
                      type="text" 
                      name="date" 
                      placeholder="DD/MM/YYYY" 
                      className="child" 
                      onInput={(event) => handleInput(event)}
                      onFocus={(event) => handleFocus(event, 'date')} 
                      onBlur={(event)=> handleBlur(event)}
                      />
                    <input 
                      type="text" 
                      name="time"
                      placeholder="time" 
                      className="child" 
                      onInput={(event) => handleInput(event)}
                      onFocus={(event) => handleFocus(event, 'time')} 
                      onBlur={(event)=> handleBlur(event)}
                      />
                </div>
                <button type="submit">reserve</button>
            </form>
        </Container>
    </motion.section>
  )
}

export default Reservations
