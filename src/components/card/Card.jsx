import { AiFillStar } from "react-icons/ai";
import "./Card.css"
import Img from "../../assets/images/image1.webp"

export const Card = (props) => {
    const { image, title, price, rate} = props
  return (
    <div className="card">
        <div className="img-container">
            <img src={image} alt="" />
        </div>

        <div className="data">
            <h3>{title}</h3>
            <div>
                <div className="price">${price}</div>
                <div className="rating"><AiFillStar  className="star-icon"/>{rate}</div>
            </div>
        </div>
        <button className="primary">try it</button>
    </div>
  )
}

export default Card
