const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" />
                    <div className="logo-text">
                        <h2>A<span style={{ color: 'white', fontSize: '35px' }}>A</span>A</h2>
                        <span>Games Hub</span>
                    </div>
                </div>
                <ul className="nav-links">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">REVIEWS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">COMMUNITY</a></li>
                    <li><a href="#">HUB</a></li>
                </ul>
                <div className="right-section">
                    <div className="search-box">
                        <input type="text" placeholder="Search games" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
