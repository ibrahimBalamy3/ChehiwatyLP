import Img1 from "../assets/images/image1.webp"
import Img2 from "../assets/images/image2.jpg"
import Img3 from "../assets/images/image3.jpg"
import Img4 from "../assets/images/image4.jpg"
import Img5 from "../assets/images/image5.jpg"
import Img6 from "../assets/images/image6.jpg"
import Img7 from "../assets/images/image7.jpg"
import SaladM from "../assets/images/saladM.webp"
import SaladN from "../assets/images/saladN.avif"
import Braniya from "../assets/images/braniya.jpg"
import SaladG from "../assets/images/saladG.jpg"
import MTea from "../assets/images/MTea.jpg"
import Couscous from "../assets/images/couscous.png"
import Tfaya from "../assets/images/tfaya.avif"
import Tanjia from "../assets/images/tanjia.webp"
import Refisa from "../assets/images/refisa.jpg"
import Djaj from "../assets/images/djaj.webp"
import Briwat from "../assets/images/briwat.jpg"
import Chebakia from "../assets/images/chebakia.jpg"



export const Data = {
    sliderImages: [
        Img1, 
        Img2, 
        Img3, 
        Img4, 
        Img5, 
        Img6, 
        Img7, 
    ], 
    menuData: [
        {title: "morrocan couscous", price: 12,image: Couscous, rate: 4.5, type: "dish-of-day"},
        {title: "morrocan tea", price: 2,image: MTea, rate: 5, type: "dish-of-day"},

        {title: "morrocan salad", price: 3,image: SaladM, rate: 5, type: "Appetizers"},
        {title: "nesoils salad", price: 2.5,image: SaladN, rate: 4.3, type: "Appetizers"},
        {title: "branya", price: 5,image: Braniya, rate: 5, type: "Appetizers"},
        {title: "garden salad", price: 5,image: SaladG, rate: 4.5, type: "Appetizers"},

        {title: "tfaya", price: 15,image: Tfaya, rate: 5, type: "main"},
        {title: "tanjia", price: 16,image: Tanjia, rate: 4.5, type: "main"},
        {title: "refisa", price: 16,image: Refisa, rate: 4.5, type: "main"},
        {title: "chicken mdaghmar", price: 16,image: Djaj, rate: 4.5, type: "main"},

        {title: "sweet briwat", price: 3,image: Briwat, rate: 5, type: "desserts"},
        {title: "chebakia", price: 4.0,image: Chebakia, rate: 4.5, type: "desserts"},
    ]
}

export default Data