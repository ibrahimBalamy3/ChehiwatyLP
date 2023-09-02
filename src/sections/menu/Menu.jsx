import { Link, useSearchParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Container from "../../components/container/Container"
import "./Menu.css"
import Card from "../../components/card/Card";
import Data from "../../data/Data";
import { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryTitlesVariant, PrimaryVariant, SwipVariant } from "../../animations";

export const Menu = () => {
    const data = Data.menuData

    const [isFocused, setIsFocused] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const getNewsearchParamsString = (key, value)=> {
        const sp = new URLSearchParams(searchParams)
        if( sp === null) {
            sp.delete(key)
        }else {
            sp.set(key, value)
        }
        return `?${sp.toString()}`
    }

    const displayedData = typeFilter ? data.filter((ele)=> {
        return ele.type.toLowerCase() == typeFilter
    }): data

    const cards = displayedData.map((ele, index) => {
        return <Card key={index} image={ele.image} title={ele.title} price={ele.price} rate={ele.rate} />
    })

  return (
    <motion.section 
        variants={PrimaryVariant} 
        initial={'initial'} 
        whileInView={'view'} 
        className="menu"
    >
        <Container>
            <motion.h2 
                variants={PrimaryTitlesVariant} 
                initial={'initial'} 
                whileInView={'view'} 
                className="primary styled"
            >menu</motion.h2>
            <p>
                Delve into an Enchanting Moroccan CulinaryHaven Where 
                Unparalleled Quality Harmonizes with Exquisite Taste
            </p>
            <div className="m-container">
                <ul className="navigation">
                    <li>
                        <Link
                          to={getNewsearchParamsString("type", "dish-of-day")} 
                          className={"link"}
                          >Dish of the Day</Link>
                    </li>
                    <li>
                        <Link 
                          to={getNewsearchParamsString("type", "appetizers")}
                          className={"link"}
                          >appetizers</Link>
                    </li>
                    <li>
                        <Link 
                          to={getNewsearchParamsString("type", "main")}
                          className={"link"}
                          >main courses</Link>
                    </li>
                    <li>
                        <Link 
                          to={getNewsearchParamsString("type", "desserts")}
                          className={"link"}
                          >desserts</Link>
                    </li>
                </ul>
                <div className="content">{cards}</div>
            </div>
            <motion.div 
                variants={SwipVariant} 
                animate={'animate'} 
                className="indication"
            >swipe for more <BsArrowRight  className="left-arrow-icon"/></motion.div>
        </Container>
    </motion.section> 
  )
}

export default Menu
