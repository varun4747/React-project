export default function Home() {

    return(
        <>
            {/* Hero Section */}
            <section className="hero-section bg-gradient mb-5" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                color: '#12294a',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold mb-3">Welcome to MobileHub</h1>
                            <p className="lead mb-4">Discover the latest smartphones, tablets, and accessories with exclusive deals</p>
                            <div className="d-flex gap-3">
                                <button className="btn btn-light btn-lg fw-bold px-5">Shop Now</button>
                                <button className="btn btn-light btn-lg fw-bold px-5">View Deals</button>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div style={{
                                fontSize: '120px',
                                opacity: '0.8'
                            }}>
                                📱
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <section className="mb-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm bg-info text-white h-100" style={{ borderRadius: '15px' }}>
                                <div className="card-body text-center py-4">
                                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>🚚</div>
                                    <h5 className="card-title">Free Shipping</h5>
                                    <p className="card-text small">On orders over $50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm bg-success text-white h-100" style={{ borderRadius: '15px' }}>
                                <div className="card-body text-center py-4">
                                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>💳</div>
                                    <h5 className="card-title">Secure Payment</h5>
                                    <p className="card-text small">100% safe transactions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm bg-danger text-white h-100" style={{ borderRadius: '15px' }}>
                                <div className="card-body text-center py-4">
                                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>↩️</div>
                                    <h5 className="card-title">Easy Returns</h5>
                                    <p className="card-text small">30-day money back guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            {/* <section className="mb-5">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Featured Products</h2>
                    <div className="row g-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="col-md-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0 hover-card" style={{ borderRadius: '12px', transition: 'transform 0.3s' }}>
                                    <div className="bg-light p-4 text-center" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px 12px 0 0' }}>
                                        <div style={{ fontSize: '80px' }}>📱</div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Premium Smartphone {item}</h5>
                                        <p className="text-muted small mb-3">High performance device with great features</p>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="text-warning">★★★★★</span>
                                            <span className="text-muted small">(128 reviews)</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="h5 mb-0 text-primary fw-bold">$799</span>
                                            <button className="btn btn-primary btn-sm">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Categories Section */}
            <section className="mb-5">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Shop by Category</h2>
                    <div className="row g-4">
                        {['Smartphones', 'Tablets', 'Accessories', 'Wearables'].map((category, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div className="category-card p-4 text-center rounded-3 cursor-pointer" style={{
                                    background: ['#E3F2FD', '#F3E5F5', '#E8F5E9', '#FFF3E0'][index],
                                    borderRadius: '15px',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    cursor: 'pointer'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                    <div style={{ fontSize: '50px', marginBottom: '15px' }}>
                                        {['📱', '📱', '🎧', '⌚'][index]}
                                    </div>
                                    <h5 className="mb-2">{category}</h5>
                                    <p className="text-muted small">Browse our selection</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promo Section */}
            <section className="mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="bg-dark text-white p-5 rounded-3" style={{
                                background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
                                textAlign: 'center'
                            }}>
                                <h3 className="mb-3">Special Offer!</h3>
                                <p className="mb-4 lead">Get <span className="fw-bold text-warning">20% OFF</span> on your first purchase</p>
                                <p className=" mb-4">Use code: <span className="badge bg-warning text-dark fw-bold">FIRST20</span></p>
                                <p className="small ">Offer valid until 2026-12-31</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            {/* <section className="mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="text-center">
                                <h3 className="mb-3 fw-bold">Subscribe to Our Newsletter</h3>
                                <p className="text-muted mb-4">Get the latest updates, exclusive offers, and new arrivals</p>
                                <form className="d-flex gap-2">
                                    <input 
                                        type="email" 
                                        className="form-control form-control-lg" 
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary btn-lg px-5">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <style>{`
                .hover-card:hover {
                    transform: translateY(-15px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
                    transition: all 0.3s ease;
                }

                .category-card {
                    transition: all 0.3s ease;
                }

                .category-card:hover {
                    transform: translateY(-10px);
                }

                .btn:hover {
                    transform: scale(1.05);
                    transition: all 0.2s ease;
                }
            `}</style>
        </>
    );
}