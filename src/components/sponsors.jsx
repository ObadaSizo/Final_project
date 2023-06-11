import '../style/sponsors.css'
function Sponsors() {
    return(
        <section className='sponsors' id='sponsors'>
            <h2 className="sponsors-header">الداعمون</h2>
            <div className="container">
                <div className="spon">
                <img src={require("../imgs/sponsors/Group 442.png")} alt="" />
                <img src={require("../imgs/sponsors/800px-Jako-logo 1.png")} alt="" className='jako'/>
                </div>
            </div>
        </section>
    );
}

export default Sponsors;