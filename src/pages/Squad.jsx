import Footer from "../components/footer";
import Hero from "../components/hero";
import JustHero from "../components/just-hero";
import Players from "../components/players";
import SubNave from "../components/subnave";
import backGround from '../imgs/Heros/Rectangle1.png'
 
function Squad() {
    const sub = [
        {
            id:"players",
            link:"اللاعبون"
        }
    ]
    return(
        <>
        <Hero/>
        <JustHero image={backGround}/>
        <div className="container sticky">
            <div className="sublinks">
                {sub.map((s) =>  {
                    return(
                        <SubNave data = {s} key={s.id}/>
                    )
                })}
            </div>
        </div>
        <Players/>
        <Footer/>
        </>
    )
}

export default Squad ;