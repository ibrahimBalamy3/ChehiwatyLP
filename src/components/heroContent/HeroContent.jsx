import "./HeroContent.css"
import { motion } from "framer-motion"
import { useState } from "react"
import { ContentVariant } from "../../animations"

export const HeroContent = () => {
  const buttonVariant = {
    animate: {
      x: -20,
      transition: {
        repeatType: 'reverse'
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        repeat: Infinity //(keyframs)
      }
    }
  }

  return (
    <motion.div 
      variants={ContentVariant} 
      initial={"initial"} 
      whileInView={"view"} 
      className="content" 
    >
        <motion.h2 exit={{y: "-100%", opacity: 0}} className="primary">welcome to chehiwaty</motion.h2>
        <p>Delve into an Enchanting Moroccan Culinary Haven Where Unparalleled Quality Harmonizes with Exquisite Taste</p>
        <div className="buttons-container">
            <motion.button variants={buttonVariant} animate={'animate'}   whileHover={'hover'} className="primary">discover menu</motion.button>
            <button className="neutral">make a reservation</button>
        </div>
    </motion.div>
  )
}


export default HeroContent