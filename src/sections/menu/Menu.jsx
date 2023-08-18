import { Link, useSearchParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Container from "../../components/container/Container"
import "./Menu.css"
import Card from "../../components/card/Card";
import Data from "../../data/Data";
import { useState } from "react";

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


console.log(isFocused)
  return (
    <section className="menu">
        <Container>
            <h2 className="primary styled">menu</h2>
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
            <div className="indication">swipe for more <BsArrowRight  className="left-arrow-icon"/></div>
        </Container>
    </section> 
  )
}

export default Menu
