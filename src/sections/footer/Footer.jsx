import "./Footer.css"
import Container from "../../components/container/Container"
import { motion } from "framer-motion";
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FooterVariant } from "../../animations";

export const Footer = () => {
  return (
    <motion.footer 
        variants={FooterVariant} 
        initial={'initial'} 
        whileInView={'view'} 
        className="footer"
    >
        <Container>
            <div className="content">
                <h4 className="logo">chehiwaty</h4>
                <p>© 2023 - 2024 all right reserved</p>
            </div>
            <div className="icons">
                <a href="#">
                    <AiFillFacebook />
                </a>
                <a href="#">
                    <AiOutlineInstagram />
                </a>
                <a href="#">
                    <AiFillYoutube />
                </a>
                <a href="#">
                    <AiFillLinkedin />
                </a>
            </div>
        </Container>
    </motion.footer>
  )
}


export default Footer