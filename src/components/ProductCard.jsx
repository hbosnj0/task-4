import LikeButton from './LikeButton'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h2>{product.name}</h2>
      <p className="tagline">{product.tagline}</p>
      <p className="description">{product.description}</p>
      <LikeButton productName={product.name} />
    </article>
  )
}

export default ProductCard
