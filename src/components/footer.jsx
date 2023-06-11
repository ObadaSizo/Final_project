import '../style/footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <div className="footer">
            <div className="container">
                <div className="copy-rights">
                    &copy; Copyright {currentYear} All Rights Reserved
                </div>
                <div className="designers">
                Designed by Focal X UI/UX Team
                </div>
                <div className="social">
                <i class="fa-brands fa-instagram insta"></i>
                <i class="fa-brands fa-facebook"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;