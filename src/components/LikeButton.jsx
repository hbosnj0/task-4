import { useState } from 'react'

function LikeButton({ productName }) {
  const [likes, setLikes] = useState(0)

  return (
    <button className="like-button" onClick={() => setLikes(likes + 1)}>
      {likes} {likes === 1 ? 'like' : 'likes'} for {productName}
    </button>
  )
}

export default LikeButton
