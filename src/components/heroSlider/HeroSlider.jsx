import { useRef, useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Data from "../../data/Data";
import "./HeroSlider.css"
import { motion } from "framer-motion";
import { HeroSilderVariant } from "../../animations";


export const HeroSlider = () => {
    const imageArr = useRef(Data.sliderImages)
    const [counter, setCounter] = useState(0)
    const [stopToRight, setStopToRight] = useState(false)
    const [stopToLeft, setStopToLeft] = useState(false)

    
    const handleToRightClick = ()=> {
        if(counter < imageArr.current.length - 1) {
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
    <motion.div 
        variants={HeroSilderVariant} 
        initial={'initial'} 
        whileInView={'view'} 
        className="slider"
    >
        <div className="img-container">
            <img src={imageArr.current[counter]} alt="image" />
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
   </motion.div>
  )
}


export default HeroSlider