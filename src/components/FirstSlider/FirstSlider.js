import './FirstSlider.css'
import image1 from '../../assets/images/slide_1.png'
import image2 from '../../assets/images/slide_2.png'
import image3 from '../../assets/images/slide_3.png'
import image4 from '../../assets/images/slide_4.png'
import Carousel from './Carousel';



const FirstSlider = (props) => {

  return (
    <div className='container'>
    <div class="wrapper">
        <Carousel class="carousel">
            <li class="card">
            <div class="img"><img src={image4} alt="img" draggable="false"/></div>
            <h4>كأس العرب</h4>
            </li>
            <li class="card">
            <div class="img"><img src={image3} alt="img" draggable="false"/></div>
            <h4>تصفيات كأس العالم</h4>
            </li>
            <li class="card">
            <div class="img"><img src={image2} alt="img" draggable="false"/></div>
            <h4>بطولة اتحاد غرب آسيا لكرة القدم</h4>
            </li>
            <li class="card">
            <div class="img"><img src={image1} alt="img" draggable="false"/></div>
            <h4>كأس آسيا</h4>
            </li>
            <li class="card">
            <div class="img"><img src={image1} alt="img" draggable="false"/></div>
            <h4>كأس آسيا</h4>
            </li>
            <li class="card">
            <div class="img"><img src={image1} alt="img" draggable="false"/></div>
            <h4>كأس آسيا</h4>
            </li>
        </Carousel>
    </div>
    </div>
  )
}




export default FirstSlider



