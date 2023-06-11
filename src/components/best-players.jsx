import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/best.css'
import '../style/Custmize.css'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
function Best() {
    useEffect(()=>{
        const carousel = document.querySelector(".slider");
        const leftButton = document.querySelector(".arrow-left-best");
        const rightButton = document.querySelector(".arrow-right-best");

        const carouselWidth = carousel.offsetWidth;


        let offset = 0;


        leftButton.addEventListener("click", function() {
            if (offset !== 0) {
                offset += carouselWidth +115;
                carousel.style.transform = `translateX(${offset}px)`;
            }
        })
        
        rightButton.addEventListener("click", function() {
        if (offset >= -1300) {
            console.log("ffffffff")
            offset -= carouselWidth +115;
            carousel.style.transform = `translateX(${offset}px)`;
        }
        })



        const buttonsWrapper = document.querySelector(".best-dots");
        const slides = document.querySelector(".cards .slider");

        buttonsWrapper.onclick = (e) => {
            console.log(e.target.nodeName)
        if (e.target.nodeName === "SPAN") {
            Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove("active")
            );
            if (e.target.classList.contains("first")) {
            slides.style.transform = "translateX(0%)";
            e.target.classList.add("active");
            } else if (e.target.classList.contains("second")) {
            slides.style.transform = "translateX(-50%)";
            e.target.classList.add("active");
            } else if (e.target.classList.contains('third')){
            slides.style.transform = 'translatex(-150%)';
            e.target.classList.add('active');
            }
        }
}
    })
    return (
        <section className='best' id='best'>
        <h2 className='best-header'>أفضل اللاعبين</h2>
        <div className="container mobile-cont">
        <FontAwesomeIcon icon={faChevronRight} className="arrow-right-best d-none-mobile" />
        <div className="cards">
            <div className="slider">
            <div className="card">
                <img src={require('../imgs/playersImgs/Rectangle119.png')} alt="" className='player-pic'/>
                <span className='player-number'>9</span>
                <div className="text">
                    <h3 className='name'>عمر السومة</h3>
                    <p className='position'>مهاجم صريح</p>
                </div>
                <button className='the-profile'>معلومات اللاعب</button>
            </div>
            <div className="card">
                <img src={require('../imgs/playersImgs/Rectangle 109.png')} alt="" className='player-pic'/>
                <span className='player-number'>10</span>
                <div className="text">
                    <h3 className='name'>محمود المواس</h3>
                    <p className='position'>الوسط المهاجم</p>
                </div>
                <button className='the-profile'>معلومات اللاعب</button>
            </div>
            <div className="card">
                <img src={require('../imgs/playersImgs/Rectangle 121.png')} alt="" className='player-pic'/>
                <span className='player-number'>21</span>
                <div className="text">
                    <h3 className='name'>محمد المرمور</h3>
                    <p className='position'>الوسط المحور</p>
                </div>
                <button className='the-profile'>معلومات اللاعب</button>
            </div>
            <div className="card">
                <img src={require('../imgs/playersImgs/Rectangle 120.png')} alt="" className='player-pic'/>
                <span className='player-number'>1</span>
                <div className="text">
                    <h3 className='name'>إبراهيم عالمة</h3>
                    <p className='position'>حارس المرمى</p>
                </div>
                <button className='the-profile'>معلومات اللاعب</button>
            </div>
            </div>
        </div>
        <FontAwesomeIcon icon={faChevronLeft} className="arrow-left-best d-none-mobile" />
        </div>
        <div className='best-dots d-flex-mobile'>
            <span className='first dot active'></span>
            <span className='second dot'></span>
            <span className='third dot'></span>
        </div>
        </section>
    );
}

export default Best ;