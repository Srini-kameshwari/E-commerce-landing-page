import './App.css';
 
function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">E-Shop</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a herf="#about">About</a>
          <a href="# ">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="hero" className="hero">
        <h1>WOMENS FASHION</h1>
        <div className="hero-content">
          <img src="/photo/web page logo.jpeg"/>
          <h2>Discover Amazing Products</h2>
          <p>Find the best deals and exclusive offers on our new arrivals.</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      <section id="products" className="products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="/photo/web page cloth.jpeg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$29.99</p>
            <button className="cta-button">Buy Now</button>
          </div>
          <div className="product-card">
            <img src="/photo/web page cosemetics.jpeg" alt="Product 2" />
            <h3>Product 2</h3>
          <div className="product-card">
          </div>
            <p>$49.99</p>
            <button className="cta-button">Buy Now</button>
          </div>
          {/* Add more products as needed */}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
        <p>
          <a href="#contact">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
