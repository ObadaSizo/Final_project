import'../style/Hero.css'
// import backGround from '../imgs/image.png'
function JustHero (backGround) {
console.log(Object.values(backGround)[0])
    return(
        <div className="hero" style={{backgroundImage : `url(${Object.values(backGround)[0]})`}}>
        </div>
    )
}
export default JustHero;