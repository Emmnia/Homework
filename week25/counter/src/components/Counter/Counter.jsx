import './Counter.css'
import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="container">
            <button onClick={() => setCount((count) => count + 1)}>{count}</button>
        </div>
    )
}