import Best from "../components/best-players";
import Calander from "../components/calander";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import JustHero from "../components/just-hero";
import News from "../components/news";
import Sponsors from "../components/sponsors";
import SubNave from "../components/subnave";
import './../style/Custmize.css'
import './../style/sublinks.css'
import backGround from '../imgs/image.png'
function Home() {
    const sub = [
        {
            id : "calander",
            link : "التقويم"
        },
        {
            id : "best",
            link : "أفضل اللاعبين"
        },
        {
            id : "gallery",
            link : "المعرض"
        },
        {
            id : "news",
            link : "الأخبار"
        },
        {
            id : "sponsors",
            link : "الداعمون"
        },
    ]
    // const backGround = "../imgs/image.png"
    return(
        <>
        <Hero/>
        <JustHero image = {backGround}/>
        <div className="container sticky">
            <div className="sublinks">
                {sub.map((s) =>  {
                    return(
                        <SubNave data = {s} key={s.id}/>
                    )
                })}
            </div>
        </div>
            <Calander/>
            <Best/>
            <Gallery/>
            <News />
            <Sponsors />
            <Footer/>
        </>
    )
}

export default Home ;