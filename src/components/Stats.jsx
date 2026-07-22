import { useEffect, useState } from 'react'

function Stats() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="stats">
      <p>{time.toLocaleTimeString()}</p>
    </section>
  )
}

export default Stats
