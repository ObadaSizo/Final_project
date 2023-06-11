import './SecondSlider.css'
import Slider from './Slider'
import image1 from '../../assets/images/slide_5.png'
import image2 from '../../assets/images/slide_2.png'
import image3 from '../../assets/images/slide_3.png'
import image4 from '../../assets/images/slide_4.png'

const SecondSlider = () => {
    
    const slides = [
        <img src={image1} alt="Slide 1" />,
        <img src={image2} alt="Slide 2" />,
        <img src={image3} alt="Slide 3" />,
        <img src={image4} alt="Slide 4" />,
      ];
  return (
    <div className='second-slider'>
        <Slider slides={slides} />
    </div>
)
}

export default SecondSlider