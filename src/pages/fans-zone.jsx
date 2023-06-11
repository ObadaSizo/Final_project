import Footer from '../components/footer';
import Hero from '../components/hero';
import JustHero from '../components/just-hero';
import '../style/Custmize.css'
import '../style/fanspage.css'
import backGround from './../imgs/Heros/Rectangle11.png'
function FansZone() {
    return(
    <>
    <Hero/>
    <JustHero image= {backGround}/>
        <section className="container section5">
        <div className="left-part">
          <h1>أجمل هدف في مسيرة المنتخب السوري</h1>
          <p>
            لحظـات تاريخيــــة كرويــــة محفورة في ذاكــرة السوريين<span>23-12-2018</span>
          </p>
          <p>
            من خلال التركيز القوي على تنميــة الشــــباب ودعم المشجعين
            المتحمسـين ، تمكن الفريق من إنتاج لاعبين ماهرين ذهبوا للعب مع أندية
            محلية ودوليـــة بارزة. تاريخ المنتخب السوري لكرة القدم هو شهادة على
            البلد.
          </p>
          <button><a>اقرأ المزيد</a></button>
        </div>
        <div className="right-part">
          <img src={require("../assets/images/Rectangle 37.png")} alt="" />
        </div>
        </section>
        <section className="container section4">
        <div className="full-part">
          <div className="content">
            <p>مشجعين متحمسين ، تمكن الفريق من إنتاج لاعبين ماهرين ذهبوا للعب لأندية محلية ودولية بارزة. تاريخ المنتخب السوري لكرة القدم هو شهادة على البلد
            </p>
            <button><a>اقرأ المزيد</a></button>
          </div>
        </div>
        </section>
        <section className="container cards">
        <div className="d-flex align-items-center justify-content-between p-3 ca">
          <div className="card border-0 fan" style={{width: "18rem"}}>
            <img src={require("../assets/images/Rectangle 93.png")} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-end">لقاء الرئيس بشار الأسد مع المنتخب السوري </h5>
              <p className="card-text text-end">من خلال التركيز القوي على تنمية الشباب ودعم المشجعين المتحمسين ، فإن الفريق لديه ب
              </p>
              <a className="button-card">اقرأ المزيد</a>
            </div>
          </div>
          <div className="card border-0 fan" style={{width: "18rem"}}>
            <img src={require("../assets/images/Rectangle 94.png")} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-end">الجمهور السوري يرسم أروع لوحات التشجيع</h5>
              <p className="card-text text-end">سطر الجمهور السوري أروع صور الوفاء
                في مباراة المنت
                خب السوري أمام فلسطين وملأ جنبات الأمكنة المخصصة له.. </p>
              <a className="btn btn-primary button-card">اقرأ المزيد</a>
            </div>
          </div>
          <div className="card border-0 fan" style={{width: "18rem"}}>
            <img src={require("../assets/images/Rectangle 95.png")} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-end">جمهور كبير يساند المنتخب السوري</h5>
              <p className="card-text text-end">ينتظر أن تحظى مباراة نســــور قاســــيون والكانغارو 
                الأسترالي المقررة مساء اليوم باستاد خليفة بن زايد لحساب الجولة </p>
              <a className="btn btn-primary button-card">اقرأ المزيد</a>
            </div>
          </div>
        </div>
        </section>
        <Footer/>
        </>
    );
}

export default FansZone ;