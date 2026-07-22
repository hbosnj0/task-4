import Stats from './components/Stats'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">KABi</p>
        <h1>Making Hiring Easier, One Tool at a Time</h1>
        <p className="subtitle">
          The next generation of hiring, assessing, and matching products.
        </p>
      </header>

      <Stats />

      <main className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

      <footer className="footer">
        <p>Made By Hamzah &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
