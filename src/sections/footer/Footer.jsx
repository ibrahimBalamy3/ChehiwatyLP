import "./Footer.css"
import Container from "../../components/container/Container"
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  )
}


export default Footer