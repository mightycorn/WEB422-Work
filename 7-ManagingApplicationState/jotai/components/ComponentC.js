import { useAtom } from 'jotai'
import { countAtom } from '../store'

export default function ComponentC(props) {
    console.log("Rendering Component C");
    const setCount = useAtom(countAtom)[1];

    return (
        <>
            Component C<br />
            <button onClick={(e) => setCount((count) => count + 1)}>Increase Value</button>
        </>
    )
}