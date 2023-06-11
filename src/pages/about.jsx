import AboutUs from '../components/AboutUs/AboutUs';
import Achievement from '../components/Achievement/Achievement';
import FirstSlider from '../components/FirstSlider/FirstSlider';
import Prizes from '../components/Prizes/Prizes';
import SecondSlider from '../components/SecondSlider/SecondSlider';
import Studies from '../components/Studies/Studies';
import Hero from '../components/hero';
import SubNave from "../components/subnave";
import './../style/Custmize.css'
import './../style/sublinks.css'
import backGround from '../imgs/Heros/Rectangle1.png'
import JustHero from '../components/just-hero';
import Footer from '../components/footer';
function About() {
    const sub = [
        {
            id : "history",
            link : "تاريخ المنتخب"
        },
        {
            id : "gifts",
            link : "الجوائز"
        },
        {
            id : "studies",
            link : "الدراسات"
        }
    ]
    return(
        <>
        <Hero/>
        <JustHero image = {backGround} key={"Asd1"}/>
        <div className="container sticky">
            <div className="sublinks">
                {sub.map((s) =>  {
                    return(
                        <SubNave data = {s} key={s.id}/>
                    )
                })}
            </div>
        </div>
            <AboutUs/>
            <Prizes/>
            <Studies/>
            <Footer/>
        </>
    )
}

export default About ;