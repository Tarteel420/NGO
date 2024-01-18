import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const countersData = [
    { id: 1, target: 20000 },

  ];

  const [counters, setCounters] = useState(countersData.map(counter => ({ ...counter, value: 0 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters =>
        prevCounters.map(counter => {
          if (counter.value < counter.target) {
            const step = Math.ceil((counter.target - counter.value) / 1000); // Adjust the step size as needed
            return { ...counter, value: counter.value + step };
          }
          return counter;
        })
      );
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main-counter">
      {counters.map(counter => (
        <div className="counter" key={counter.id}>
            <img src='/images/success.webp'></img>
          <h2> Our Successful Projects {counter.value.toLocaleString()} </h2>
        </div>
      ))}
    </div>
  );
}

export default Counter;

