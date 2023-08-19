import HeroContent from "../../components/heroContent/HeroContent";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import "./Hero.css"

export const Hero = () => {
  return (
    <section className="hero" id="home">
        <div className="container">
            <HeroSlider />
            <HeroContent />
        </div>
    </section>
  )
}

export default Hero
