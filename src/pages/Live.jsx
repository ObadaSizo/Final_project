import './../style/Live.css'
import './../style/Custmize.css'
import players1 from './../assets/images/players1.png'
import play from './../assets/images/play.png'
import insta from './../assets/images/insta.png'
import facebook from './../assets/images/facebook.png'
import Hero from '../components/hero'
import JustHero from './../components/just-hero'
import backGround from './../imgs/Heros/Rectangle111.png'
import SubNave from '../components/subnave'
import Footer from '../components/footer'

const Live = () => {
  const sub = [
    {
        id : "watch",
        link : "مشاهدة مباشرة"
    },
    {
        id : "match-info",
        link : "معلومات المباراة"
    }
]
  return (
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
    <div>
        <section className='section6' id="watch">
          <div className="container">

        <div className='content2'>
            <p>سوريا هي موطن للعديد من الملاعب البارزة التي لعبت دورًا مهمًا في الثقافة الرياضية في البلاد. يعد ملعب العباسيين أحد أشهر الملاعب ، ويقع في العاصمة دمشق. يتسع لأكثر من 30 ألف متفرج ، وقد كان مكانًا للعديد من مباريات كرة القدم وغيرها من الأحداث الرياضية. ملعب آخر بارز هو ملعب حلب الدولي ، الذي يقع في مدينة حلب. استضاف هذا الملعب ، الذي تبلغ سعته حوالي 53000 شخص ، العديد من المباريات الدولية والمحلية  مما يدل على شغف البلاد بكرة القدم. ملعب تشرين في اللاذقية هو مكان معروف آخر ، يستوعب ما يقرب من 15000 متفرج. هذه الملاعب ، من بين أمور أخرى ، بمثابة أماكن تجمع للجماهير لدعم فرقهم المفضلة وشهدت لحظات مثيرة في تاريخ كرة القدم السورية. على الرغم من التحديات التي تواجهها بسبب الصراع المستمر ، لا تزال هذه الملاعب رموزًا مهمة للوحدة والصمود في المشهد الرياضي السوري</p>
        
          <div className='playicon'>
          <img src={players1} alt="" className='ba'/>
            <img src={play} alt="" className='start-btn'/>
          </div>
        </div>
          </div>
        </section>
    </div>
    <Footer/>
    </>
  )
}

export default Live