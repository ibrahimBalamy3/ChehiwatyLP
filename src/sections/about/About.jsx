import Container from "../../components/container/Container"
import Img from "../../assets/images/image1.webp"
import "./About.css"
import { motion } from "framer-motion"
import { PrimaryTitlesVariant, PrimaryVariant } from "../../animations"

export const About = () => {
  return (
    <motion.section 
        variants={PrimaryVariant} 
        initial={'initial'} 
        whileInView={'view'} 
        className="about"
    >
        <Container>
            <motion.h2 
                variants={PrimaryTitlesVariant} 
                initial={'initial'} 
                whileInView={'view'} 
                className="primary styled"
            >about us</motion.h2>
            <div className="content">
                <div className="img-container">
                    <img src={Img} alt="" />
                </div>
                <div className="right-side">
                    <h3>chehiwaty</h3>
                    <p>
                        Welcome to <span>chehiwaty</span>, an enchanting oasis of Moroccan flavors and culture. At our establishment, we invite you to embark on a culinary journey that celebrates the rich tapestry of Moroccan cuisine. Our passionate team is dedicated to delivering an authentic experience where every dish is crafted with precision, drawing inspiration from the vibrant markets of Marrakech and the traditional techniques of Moroccan cooking. From the fragrant spices to the warm hospitality,
                    </p>
                </div>
            </div>
        </Container>
    </motion.section>
  )
}

export default About
