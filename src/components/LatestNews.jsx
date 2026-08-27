const LatestNews = () => {
    return (
        <section className="latest-news">
            <div className="section-header">
                <h2>Latest News</h2>
                <a href="#">View All</a>
            </div>
            <div className="news-container">
                {/* main News */}
                <div className="main-news">
                    <img src="/images/new1.avif" alt="Gta 6" />
                    <div className="news-overlay">
                        <span className="news-date">26 July 2026</span>
                        <h2>Rockstar Announces New GTA VI Gameplay Trailer</h2>
                        <p>
                            Rockstar Games has officially revealed a new gameplay trailer
                            showcasing improved graphics, AI, and an expanded open world.
                        </p>
                        <a href="#">Read More →</a>
                    </div>
                </div>

                {/* right side News */}
                <div className="news-list">
                    <div className="news-card">
                        <img src="/images/news2.jpeg" alt="EA Reveals Battlefield Update" />
                        <div>
                            <h3>EA Reveals Battlefield Update</h3>
                            <span>25 July 2026</span>
                        </div>
                    </div>
                    <div className="news-card">
                        <img src="/images/news3.jpg" alt="black myth wukong breaks steam records" />
                        <div>
                            <h3>Black Myth Wukong Breaks Steam Records</h3>
                            <span>24 July 2026</span>
                        </div>
                    </div>
                    <div className="news-card">
                        <img src="/images/news4.jpeg" alt="Ubisoft Confirms Assassin's Creed DLC" />
                        <div>
                            <h3>Ubisoft Confirms Assassin's Creed DLC</h3>
                            <span>22 July 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
