# task-4

A simple React product page for KABi's tools: **Inviews**, **Hyrdd**, and **Jobbit**.

Demonstrates:
- **Components** — `ProductCard`, `LikeButton`, `Stats`
- **Props** — `App` passes each product down to `ProductCard`, which passes the product name to `LikeButton`
- **State / `useState`** — `LikeButton` tracks a per-card like counter
- **`useEffect`** — `Stats` fetches live time and refreshes every second.

# Run

```bash
npm install && npm run dev
```
