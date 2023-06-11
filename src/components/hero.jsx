    import {Link} from "react-router-dom";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {  faCaretDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
    import './../style/Hero.css'    
    import './../style/Custmize.css'
    import { useEffect, useState } from "react";
    import React from "react";



    function Hero() {
        const [active,setActive] = useState("false");
        const [animate,setAnimate] = useState("false");
        
        const toggleClass = () => setActive(!active);
        const handleClick = () => setAnimate(!animate);
        
        const [lang , setLang] = useState("عربي");
        const theLang = (event) => {
            setLang(event.target.innerText);
        }
        const [disable , setDisable] = useState(false);
        const ac = () => setDisable(false)
        const notac = () => setDisable(true)
                
            return(
                <div>
                <div className={disable ? "offcanvas" : "offcanvas wb-0 offcanvas-disappear"}>
                    <div className={disable ? "disable" : "disable tr"} onClick={ac}>
                        <span className="dis-right"></span>
                        <span className="dis-left"></span>
                    </div>
                    <div className={disable ? "dis-header" : "dis-header tr"}>
                        <img src={require("../imgs/Ellipse 27.png")} alt="" />
                        <div className="dis-text">
                            <h5>مرحباً بكم</h5>
                            <p>المنتخب السوري لكرة القدم</p>
                        </div>
                    </div>
                    <div className={disable ? "toggle-links" : "toggle-links tr"}>
                            <div className="menu-links">
                                <Link onClick={ac} to="/">الرئيسية</Link>
                                <Link onClick={ac} to="/about"> حول المنتخب </Link>
                                <Link onClick={ac} to="/squad">الفريق </Link>
                                <Link onClick={ac} to="/fans-zone">الجمهور</Link>
                            </div>
                        </div>
                </div>
        <nav className="navbar sticky-main">
            <div className="container">
                <div className="links">
                    <ul>
                        <Link className="main-link" to="/">الرئيسية</Link>
                        <Link className="main-link" to="/about"> حول المنتخب </Link>
                        <Link className="main-link" to="/squad">الفريق </Link>
                        <Link className="main-link" to="/fans-zone">الجمهور</Link>
                    </ul>
                    <div className="toggle-menu" onClick={notac}>
                        <span></span>
                        <span id="tog1"></span>
                        <span></span>
                    </div>
                    
                </div>
                <div className="logo"><img src={require("../imgs/Syria_FA 2.png")} alt="" /></div>
                <div className="actions">
                    <Link to="/live">مباشر</Link>
                    <div className="languages" id="drop1" onClick={toggleClass}>
                        <div className="selected">{lang}</div>
                        <div className="icon"><FontAwesomeIcon icon={faCaretDown} id="drop2"/></div>
                        <ul id="list" className={active ? "d-none" : "null"}>
                            <li id="english" onClick={theLang}>EN</li>
                            <li id="arabic" onClick={theLang}>عربي</li>
                        </ul>
                    </div>
                    <Link className="sign" to="/sign-up">
                        <FontAwesomeIcon icon={faUser} className=".sign-icon"/>
                    </Link>
                    <div className="search">
                        <input type="text" placeholder="Search ..." className={animate ? "null" : "add-anim"}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="searchIcon" onClick={handleClick}/>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
    }


    export default Hero;