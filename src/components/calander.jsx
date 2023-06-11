import { faChevronDown, faChevronLeft, faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/calander.css";
import React, { useEffect, useState } from "react";

function Calander() {
    const [down , setDown] = useState(false);
    useEffect(()=>{
        // the card slider
const carousel = document.querySelector(".slider");
const card = carousel.querySelector(".card");
const leftButton = document.querySelector(".arrow-left");
const rightButton = document.querySelector(".arrow-right");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);


let offset = 0;


leftButton.addEventListener("click", function() {
    if (offset !== 0) {
        // offset += carouselWidth + cardMarginRight;
        offset += carouselWidth/2;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset >= -1300) {
      // offset -= carouselWidth + cardMarginRight;
      offset -= carouselWidth/2;
      carousel.style.transform = `translateX(${offset}px)`;
  }
})
    // the previuos matches expander
    
    const arrowDown = document.querySelector(".arrow");
    const expandList = document.querySelector(".pre-cont");
    const preFoot = document.querySelector(".pre-foot");
    arrowDown.onclick = () => {
        if(!down){
            setDown(true);
            expandList.style.height = "425px";
            expandList.style.overflowY = "scroll";
            expandList.style.overflowX = "hidden";
            preFoot.style.boxShadow = "0px 0px 100px 0px rgb(105, 105, 105, 0.253)";
        }else {
            setDown(false);
            expandList.style.height = "280px";
            expandList.style.overflowY = "hidden";
            expandList.style.overflowX = "hidden";
            expandList.scrollTo({top: 0, behavior: 'smooth'});
            preFoot.style.boxShadow = "0px 0px 100px 0px rgb(105, 105, 105, 0.753) , 0 40px 10px rgba(0, 0, 0, 0.656)";
        }
    }
        } 
    );
    
    
    return(
        <section className="calander" id="calander">
            <div className="container">
            <FontAwesomeIcon icon={faChevronRight} className="arrow-right" />
            <div className="card-slider">
                <div className="slider">
                <div className="matches-card card">
                    <div className="match-date">
                        <div className="date">
                        <p className="day">Sat, Oct 26<span className="suffix">th</span></p>
                        <p className="hour">5.30 PM</p>
                        </div>
                        <div className="status">انتهت</div>
                    </div>
                    <div className="body">
                        <div className="stad">Lusail Stadium - qatar</div>
                        <div className="result">
                            <div className="guest">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Syria_Flat_Round-128x128.png" alt="" className="flag" />
                            <span className="team">SYR</span>
                            </div>
                            <span className="score">2</span>
                            <span className="lin"></span>
                            <span className="score">1</span>
                            <div className="host">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Qatar_Flat_Round-128x128.png" alt="" className="flag" />
                            <span className="team">QAT</span>
                            </div>
                        </div>
                    </div>
                        <div className="details">
                            <div className="championship">Asian Cup AFC 2022</div>
                            <button className="more-details">Match Story</button>
                        </div>
                </div>
                <div className="matches-card card coming">
                    <div className="match-date">
                        <div className="date">
                        <p className="day">Sat, Nov 2<span className="suffix">th</span></p>
                        <p className="hour">9.00 PM</p>
                        </div>
                        <div className="status">المباراة القادمة</div>
                    </div>
                    <div className="body">
                        <div className="stad">khalifa Stadium - QATAR</div>
                        <div className="result">
                            <div className="guest">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Syria_Flat_Round-128x128.png" alt="" className="flag" />
                            <span className="team">SYR</span>
                            </div>
                            <span className="score">VS</span>
                            <div className="host">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Libya_Flat_Round-128x128.png" alt="" className="flag" />
                            <span className="team">LIB</span>
                            </div>
                        </div>
                    </div>
                        <div className="details">
                            <div className="championship">Asian Cup AFC 2022</div>
                            <button className="more-details">Match INFO</button>
                        </div>
                </div>
                <div className="matches-card card coming">
                    <div className="match-date">
                        <div className="date">
                        <p className="day">Sat, Nov 8<span className="suffix">th</span></p>
                        <p className="hour">11.00 PM</p>
                        </div>
                        <div className="status">قريباََ</div>
                    </div>
                    <div className="body">
                        <div className="stad">ITTEHAD Stadium - QATAR</div>
                        <div className="result">
                            <div className="guest">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Syria_Flat_Round-128x128.png" alt="" className="flag" />
                            <span className="team">SYR</span>
                            </div>
                            <span className="score">VS</span>
                            <div className="host">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Algeria_Flat_Round-128x128.png" alt="" className="flag" />
                            <span className="team">ِALG</span>
                            </div>
                        </div>
                    </div>
                        <div className="details">
                            <div className="championship">Asian Cup AFC 2022</div>
                            <button className="more-details">Match INFO</button>
                        </div>
                </div>
                </div>
            </div>
            <FontAwesomeIcon icon={faChevronLeft} className="arrow-left"/>
            </div>
                <h2 className="pre-header">المباريات السابقة</h2>
            <div className="container pre-cont">
                <div className="previous-matches">
                <div className="pre-card">
                    <div className="champ-date">
                        <div className="championship">Asian Cup AFC 2022</div>
                        <div className="date">
                            <div className="day">Sun, Oct 12th</div>
                            <div className="time">5.30 PM</div>
                        </div>
                    </div>
                        <div className="flags">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Syria_Flat_Round-128x128.png" alt="" />
                            <img className="top" src="https://flagdownload.com/wp-content/uploads/Flag_of_Iraq_Flat_Round-128x128.png" alt="" />
                        </div>
                        <div className="result">
                            <div className="geust syr">Syria<span className="res">2</span></div>
                            <div className="host">Iraq<span className="res">2</span></div>
                        </div>
                        <button className="story">Match Story</button>
                </div>
                </div>
                <hr />
                <div className="previous-matches">
                <div className="pre-card">
                    <div className="champ-date">
                        <div className="championship">Friendly International</div>
                        <div className="date">
                            <div className="day">Sun, Oct 15th</div>
                            <div className="time">5.30 PM</div>
                        </div>
                    </div>
                        <div className="flags">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Syria_Flat_Round-128x128.png" alt="" />
                            <img className="top" src="https://flagdownload.com/wp-content/uploads/Flag_of_Thailand_Flat_Round-128x128.png" alt="" />
                        </div>
                        <div className="result">
                            <div className="geust syr">Syria<span className="res">3</span></div>
                            <div className="host">Thailand<span className="res">1</span></div>
                        </div>
                        <button className="story">Match Story</button>
                </div>
                </div>
                <hr />
                <div className="previous-matches">
                <div className="pre-card">
                    <div className="champ-date">
                        <div className="championship">Friendly International</div>
                        <div className="date">
                            <div className="day">Sun, Oct 15th</div>
                            <div className="time">5.30 PM</div>
                        </div>
                    </div>
                        <div className="flags">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Syria_Flat_Round-128x128.png" alt="" />
                            <img className="top" src="https://flagdownload.com/wp-content/uploads/Flag_of_Thailand_Flat_Round-128x128.png" alt="" />
                        </div>
                        <div className="result">
                            <div className="geust syr">Syria<span className="res">3</span></div>
                            <div className="host">Thailand<span className="res">1</span></div>
                        </div>
                        <button className="story">Match Story</button>
                </div>
                </div>
                <hr />
                <div className="previous-matches">
                <div className="pre-card">
                    <div className="champ-date">
                        <div className="championship">Friendly International</div>
                        <div className="date">
                            <div className="day">Sun, Oct 15th</div>
                            <div className="time">5.30 PM</div>
                        </div>
                    </div>
                        <div className="flags">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Syria_Flat_Round-128x128.png" alt="" />
                            <img className="top" src="https://flagdownload.com/wp-content/uploads/Flag_of_Thailand_Flat_Round-128x128.png" alt="" />
                        </div>
                        <div className="result">
                            <div className="geust syr">Syria<span className="res">3</span></div>
                            <div className="host">Thailand<span className="res">1</span></div>
                        </div>
                        <button className="story">Match Story</button>
                </div>
                </div>
                <hr />
                <div className="previous-matches">
                <div className="pre-card">
                    <div className="champ-date">
                        <div className="championship">Friendly International</div>
                        <div className="date">
                            <div className="day">Sun, Oct 15th</div>
                            <div className="time">5.30 PM</div>
                        </div>
                    </div>
                        <div className="flags">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Syria_Flat_Round-128x128.png" alt="" />
                            <img className="top" src="https://flagdownload.com/wp-content/uploads/Flag_of_Thailand_Flat_Round-128x128.png" alt="" />
                        </div>
                        <div className="result">
                            <div className="geust syr">Syria<span className="res">3</span></div>
                            <div className="host">Thailand<span className="res">1</span></div>
                        </div>
                        <button className="story">Match Story</button>
                </div>
                </div>
                <hr />
                <div className="previous-matches">
                <div className="pre-card">
                    <div className="champ-date">
                        <div className="championship">Friendly International</div>
                        <div className="date">
                            <div className="day">Sun, Oct 15th</div>
                            <div className="time">5.30 PM</div>
                        </div>
                    </div>
                        <div className="flags">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Syria_Flat_Round-128x128.png" alt="" />
                            <img className="top" src="https://flagdownload.com/wp-content/uploads/Flag_of_Thailand_Flat_Round-128x128.png" alt="" />
                        </div>
                        <div className="result">
                            <div className="geust syr">Syria<span className="res">3</span></div>
                            <div className="host">Thailand<span className="res">1</span></div>
                        </div>
                        <button className="story">Match Story</button>
                </div>
                </div>
            </div>
            <div className="pre-foot">
                <div className="arrow">
                    <FontAwesomeIcon icon={down ? faChevronUp : faChevronDown} className="arrow-down"/>
                </div>
            </div>
        </section>
    );
}

export default Calander;