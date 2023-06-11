import Achievement from '../Achievement/Achievement'
import FirstSlider from '../FirstSlider/FirstSlider'
import './Prizes.css'

const Prizes = () => {
    return (
        <section class="prize" id="gifts">
            <Achievement />
            <FirstSlider />
            <div class="lastline">
                <h4>هذه الجوائز والإنجازات لا تجلب الاعتراف للمنتخب السوري لكرة القدم فحسب ، بل تشكل أيضًا مصدر فخر وإلهام للاعبين والمدربين والمشجعين. إنها تعكس موهبة الفريق وعمله الجاد وتفانيه في الرياضة ، وهي شهادة على مساهمة الفريق في كرة القدم السورية.</h4>
            </div>
        </section>
    );
}

export default Prizes