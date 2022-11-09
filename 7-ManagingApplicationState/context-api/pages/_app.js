import '../styles/globals.css'
import { useState, createContext } from 'react'

export const CountContext = createContext();
export const SetCountContext = createContext();

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0); // declare high level "count" state
  // return <Component {...pageProps} count={count} setCount={setCount} /> // pass it as props to the page components

  return (
    <>
      <CountContext.Provider value={count}>
        <SetCountContext.Provider value={setCount}>
          <Component {...pageProps} />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </>
  )
}

export default MyApp
