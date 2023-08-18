import { useEffect, useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Data from "../../data/Data";
import "./Hero.css"

export const Hero = () => {
    const imageArr = Data.sliderImages
    const [counter, setCounter] = useState(0)
    const [stopToRight, setStopToRight] = useState(false)
    const [stopToLeft, setStopToLeft] = useState(false)

    // const updateIndex = ()=> {
    //     setCounter(prevState => (prevState + 1) % imageArr.length)
    // }
    const handleToRightClick = ()=> {
        if(counter < imageArr.length - 1) {
            setCounter(prevState => prevState + 1)
            setStopToRight(false)
        } else {
            setStopToRight(true)
        }
    }
    
    const handleToLeftClick = ()=> {
        if(counter > 0) {
            setCounter(prevState => prevState - 1)
            setStopToLeft(false)
        }else {
            setStopToLeft(true)
        }
    }


  return (
    <section className="hero" id="home">
        <div className="container">
            <div className="slider">
                <div className="img-container">
                    <img src={imageArr[counter]} alt="image" />
                        <div 
                            className={`right ${stopToRight ? "stop" : ""}`} 
                            onClick={handleToRightClick}>
                            <AiOutlineArrowRight />
                        </div> 
                        <div 
                            className={`left ${stopToLeft ? "stop" : ""}`}  
                            onClick={handleToLeftClick}>
                            <AiOutlineArrowLeft />
                        </div>
                </div>

            </div>
            <div className="content">
                <h2 className="primary">welcome to chehiwaty</h2>
                <p>Delve into an Enchanting Moroccan Culinary Haven Where Unparalleled Quality Harmonizes with Exquisite Taste</p>
                <div className="buttons-container">
                    <button className="primary">discover menu</button>
                    <button className="neutral">make a reservation</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
