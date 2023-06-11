import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/news.css'
import '../style/Custmize.css'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
function News() {
    return(
        <section className="news" id='news'>
            <h2 className="news-header">الأخبار</h2>
            <div className="container">
                <div className="news-cards">
                    <div className="news-cont">
                    <div className="news-card">
                        <img src={require('../imgs/news/Rectangle 115.png')} alt="" />
                        <p className='news-text'>
                        يبحث منتخب ســوريا عن تأكيد صدارته عندما يلتقي نظيره الصيني الخميس في دبي، ضمن الجولة الخامسة لمنافســــات المجموعة الأولى من التصفيات الآسيوية المزدوجة لكأس العالم 2022 وكأس آسيا 2023، رغم غيابات مؤثرة
                        </p>
                    </div>
                    <div className="news-card d-none-mobile">
                        <img src={require('../imgs/news/Rectangle 14.png')} alt="" />
                        <p className='news-text'>
                        ستكون هناك مبارتان وديتان لمنتخب سوريا مع منتخب الصين ومنتخب الكويت
                        </p>
                    </div>
                    <div className="news-card d-none-mobile">
                        <img src={require('../imgs/news/Rectangle 17.png')} alt="" />
                        <p className='news-text'>
                        منتخب سوريا من أفضل المنتخبات في التصفيات المزدوجة الحالية لكأس العالم 2022 وكأس آسيا 2023، بحسب شركة "انستات" العالمية للإحصاءات في كرة القدم
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="news-foot">
            قراءة المزيد
                <div className="arrows-news">
                    <FontAwesomeIcon icon={faChevronUp} className="arrow-up-news" />
                    <FontAwesomeIcon icon={faChevronDown} className="arrow-down-news" />
                </div>
            </div>
        </section>
    );
}

export default News;