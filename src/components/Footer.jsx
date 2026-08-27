const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo */}
                <div className="footer-box">
                    <div className="footer-logo">
                        <img src="/images/logo.png" alt="AAA Games Hub" />
                    </div>
                    <p>
                        Your ultimate destination for AAA games, reviews,
                        news, gameplay videos and updates.
                    </p>
                </div>

                {/* Explore */}
                <div className="footer-box">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Videos</a></li>
                    </ul>
                </div>

                {/* Help */}
                <div className="footer-box">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Community */}
                <div className="footer-box">
                    <h3>Community</h3>
                    <ul>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-box">
                    <h3>Contact</h3>
                    <p>contact@aaagameshub.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
