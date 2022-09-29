import { useState } from 'react';

export default function ClickCounter(props) {
  const [numClicks, setNumClicks] = useState(0);

  // 'e' is the current event object
  function increaseNumClicks(e, message) { 
    console.log(message)
    setNumClicks(prevClicks => prevClicks + 1);
  }

  return (
    <>  
        <button onClick={(e) => {increaseNumClicks(e, "Hello")}}>Clicks: {numClicks}</button>
    </>
  )
}