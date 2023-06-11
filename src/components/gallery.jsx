import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/gallery.css'
import { faChevronLeft, faChevronRight, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
    return (
        <section className="gallery" id='gallery'>
                <h2 className="gallery-header">المعرض</h2>
            <div className="container">
                <div className="main-post">
                    <img src={require("../imgs/image-background.png")} alt="" className="main-img" />
                    <div className="spot-sec">
                    <p className='spot'>
                    ولد في 1 كانون الثاني 1993
                    (30 سنة) وهو من مدينة حماة، يبلغ طوله 172 سنتيمتر، لاعب كرة قدم لعب مع عدد من
                    </p>
                    <div className="buttons-react">
                    <button className='love'>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className='loves'>4.3K</span>
                        </button>
                        <button className='like'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span className='likes'>1.7K</span>
                        </button>
                    </div>
                    </div>
                </div>
                <div className="other-posts">
                    <div className="container">
                    <div className="gallery-other-imgs">
                        <div className="cont-slider">
                    <FontAwesomeIcon icon={faChevronRight} className="arrow-right-gallery d-none-mobile" />
                        <img src={require('../imgs/players imgs/Rectangle 125.png')} alt="" />
                        <img src={require('../imgs/players imgs/Rectangle 50.png')} alt="" />
                        <img src={require('../imgs/players imgs/Rectangle 52.png')} alt="" />
                        <img src={require('../imgs/players imgs/Rectangle 53.png')} alt="" />
                    <FontAwesomeIcon icon={faChevronLeft} className="arrow-left-gallery d-none-mobile" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;