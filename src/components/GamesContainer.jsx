const GamesContainer = () => {
    return (
        <section className="games-container">
            {/* Left */}
            <div className="featured-games">
                <div className="section-header">
                    <h2>Featured Games</h2>
                    <a href="#">View All</a>
                </div>
                <div className="featured-grid">
                    <div className="game-card">
                        <img src="/images/rdr2.jpeg" alt="Game 1" />
                        <div className="overlay">
                            <h3>Red Dead Redemption 2</h3>
                            <span className="rating">⭐ 4.8</span>
                            <p>Action, Adventure</p>
                        </div>
                    </div>
                    <div className="game-card">
                        <img src="/images/mirage.jpeg" alt="Game 2" />
                        <div className="overlay">
                            <h3>Assassin's Creed Mirage</h3>
                            <span className="rating">⭐ 4.7</span>
                            <p>Action, Adventure</p>
                        </div>
                    </div>
                    <div className="game-card">
                        <img src="/images/sm2.jpeg" alt="Game 3" />
                        <div className="overlay">
                            <h3>Spider-Man 2</h3>
                            <span className="rating">⭐ 4.9</span>
                            <p>Action, Adventure</p>
                        </div>
                    </div>
                    <div className="game-card">
                        <img src="/images/stray.jpeg" alt="Game 4" />
                        <div className="overlay">
                            <h3>Stray</h3>
                            <span className="rating">⭐ 4.6</span>
                            <p>Action, Adventure</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right */}
            <aside className="sidebar">
                <div className="trending-games">
                    <div className="section-header">
                        <h2>Trending Games</h2>
                    </div>
                    <div className="trend-item">
                        <span className="rank">1</span>
                        <img src="/images/wukong.jpeg" alt="" />
                        <div className="game-info">
                            <h3>Black Myth: Wukong</h3>
                            <p>Action RPG</p>
                        </div>
                        <span className="score">4.9</span>
                    </div>
                    <div className="trend-item">
                        <span className="rank">2</span>
                        <img src="/images/gfr.jpeg" alt="" />
                        <div className="game-info">
                            <h3>Granblue Fantasy Relink</h3>
                            <p>Action RPG</p>
                        </div>
                        <span className="score">4.8</span>
                    </div>
                    <div className="trend-item">
                        <span className="rank">3</span>
                        <img src="/images/hades2.jpeg" alt="" />
                        <div className="game-info">
                            <h3>Hades II</h3>
                            <p>roguelike</p>
                        </div>
                        <span className="score">4.7</span>
                    </div>
                    <div className="trend-item">
                        <span className="rank">4</span>
                        <img src="/images/starfield.jpeg" alt="" />
                        <div className="game-info">
                            <h3>Starfield</h3>
                            <p>Sandbox RPG</p>
                        </div>
                        <span className="score">4.6</span>
                    </div>
                    <div className="trend-item">
                        <span className="rank">5</span>
                        <img src="/images/dia.jpeg" alt="" />
                        <div className="game-info">
                            <h3>Diablo IV</h3>
                            <p>Action RPG</p>
                        </div>
                        <span className="score">4.5</span>
                    </div>
                </div>
            </aside>
        </section>
    );
};

export default GamesContainer;
