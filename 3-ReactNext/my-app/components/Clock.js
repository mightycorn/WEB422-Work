import { useState, useEffect } from 'react';

export default function Clock(props) {
    /*
        We are using a destructuring assignment to assign each values in the [] (not an array) to pair of contant variables. This is shorthand for

        const dateState = useState(null);
        const date = dateState[0];
        const setDate = dateState[1];
    */

    const [date, setDate] = useState(); // Note: Never set this to unknown data obtained at run time (ie: new Date(), a random number, etc.) - see: https://nextjs.org/docs/messages/react-hydration-error

    useEffect(() => {
         // render it once
        setDate(new Date());

        // update the date once every second
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000)
        
        // clean up - runs when the component is no longer mounted
        return () => {
            clearInterval(timerID);
        }
    }, []);

    return (
        <>
            <p>
                Locale: {props.locale}: {date?.toLocaleTimeString(props.locale)}
            </p>
        </>
    );
}

Clock.defaultProps = {
    locale: "fr-CA"
  }