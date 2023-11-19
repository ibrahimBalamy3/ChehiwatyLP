import "./HeroContent.css"
import { motion } from "framer-motion"
import { ContentVariant } from "../../animations"

export const HeroContent = () => {

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
            <button className="primary">discover menu</button>
            <button className="neutral">make a reservation</button>
        </div>
    </motion.div>
  )
}


export default HeroContent