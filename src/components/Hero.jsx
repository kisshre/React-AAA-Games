const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            {/* Left Content */}
            <div className="hero-content">
                <span className="featured-tag">FEATURED GAME</span>
                <h1 className="hero-title">
                    GOD OF WAR
                    <span> RAGNAROK</span>
                </h1>
                <p className="hero-description">
                    Join Kratos and Atreus on an epic and heartfelt journey.
                    Explore breathtaking realms and face the Norse gods.
                </p>
                <div className="hero-buttons">
                    <button className="explore-btn">EXPLORE NOW</button>
                    <button className="trailer-btn">▶ WATCH TRAILER</button>
                </div>
                <div className="slider-dots">
                    <span className="active-dot"></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* Slider Arrows */}
            <button className="prev">&#10094;</button>
            <button className="next">&#10095;</button>
        </section>
    );
};

export default Hero;
