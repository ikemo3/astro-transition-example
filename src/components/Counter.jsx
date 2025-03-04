import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>カウンター: {count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      
      <style>{`
        .counter {
          padding: 1rem;
          margin: 1rem 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        
        button {
          margin: 0 0.5rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          background: #4a9eff;
          color: white;
          cursor: pointer;
        }
        
        button:hover {
          background: #357abd;
        }
      `}</style>
    </div>
  );
}
