const Categories = () => {
    return (
        <section className="game-categories">
            <div className="section-header">
                <h2>Game Categories</h2>
                <a href="#">View All <i className="fa-solid fa-angle-right"></i></a>
            </div>
            <div className="category-grid">
                <div className="category-card">
                    <img style={{ backgroundColor: 'azure' }} src="/images/action.png" alt="Action" />
                    <span>Action</span>
                </div>
                <div className="category-card">
                    <img src="/images/rpg.png" alt="RPG" />
                    <span>RPG</span>
                </div>
                <div className="category-card">
                    <img style={{ backgroundColor: 'azure' }} src="/images/fps.png" alt="FPS" />
                    <span>FPS</span>
                </div>
                <div className="category-card">
                    <img src="/images/open.png" alt="Open World" />
                    <span>Open World</span>
                </div>
                <div className="category-card">
                    <img src="/images/racing.png" alt="Racing" />
                    <span>Racing</span>
                </div>
                <div className="category-card">
                    <img style={{ backgroundColor: 'azure' }} src="/images/horror.png" alt="Horror" />
                    <span>Horror</span>
                </div>
            </div>
        </section>
    );
};

export default Categories;
